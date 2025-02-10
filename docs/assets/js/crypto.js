// crypto.js
class ContentCrypto {
    constructor() {
        this.algorithm = 'AES-GCM';
        this.keyUsages = ['encrypt', 'decrypt'];
        this.salt = new Uint8Array([
            0x89, 0x45, 0x6d, 0x23, 0x9a, 0xf1, 0xb3, 0x82,
            0x45, 0x67, 0xd4, 0x3f, 0x8e, 0x12, 0x41, 0x90
        ]); // This should be stored securely in production
    }

    async deriveKey(password) {
        const encoder = new TextEncoder();
        const keyMaterial = await window.crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            'PBKDF2',
            false,
            ['deriveBits', 'deriveKey']
        );
        
        return window.crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: this.salt,
                iterations: 100000,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: this.algorithm, length: 256 },
            false,
            this.keyUsages
        );
    }

    async encrypt(data, password) {
        const key = await this.deriveKey(password);
        const encoder = new TextEncoder();
        const encodedData = encoder.encode(JSON.stringify(data));
        
        // Generate a random IV for each encryption
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        
        const encryptedData = await window.crypto.subtle.encrypt(
            {
                name: this.algorithm,
                iv: iv
            },
            key,
            encodedData
        );

        // Combine IV and encrypted data into a single array
        const combined = new Uint8Array(iv.length + encryptedData.byteLength);
        combined.set(iv);
        combined.set(new Uint8Array(encryptedData), iv.length);

        // Convert to base64 for storage
        return btoa(String.fromCharCode(...combined));
    }

    async decrypt(encryptedString, password) {
        try {
            // Convert from base64
            const combined = new Uint8Array(
                atob(encryptedString).split('').map(char => char.charCodeAt(0))
            );
            
            // Extract IV and encrypted data
            const iv = combined.slice(0, 12);
            const encryptedData = combined.slice(12);
            
            const key = await this.deriveKey(password);
            
            const decrypted = await window.crypto.subtle.decrypt(
                {
                    name: this.algorithm,
                    iv: iv
                },
                key,
                encryptedData
            );
            
            return JSON.parse(new TextDecoder().decode(decrypted));
        } catch (error) {
            console.error('Decryption failed:', error);
            throw new Error('Invalid password or corrupted data');
        }
    }
}

// auth.js
class Auth {
    constructor() {
        this.crypto = new ContentCrypto();
        this.currentPassword = 'placeholder'; // This will be changed via admin interface
    }

    async authenticate(password) {
        try {
            // Try to decrypt a test value to verify password
            const testData = localStorage.getItem('testEncryption');
            if (!testData) {
                // First time setup - create test encryption
                const encrypted = await this.crypto.encrypt({ test: true }, this.currentPassword);
                localStorage.setItem('testEncryption', encrypted);
                return password === this.currentPassword;
            }
            
            await this.crypto.decrypt(testData, password);
            return true;
        } catch (error) {
            return false;
        }
    }

    async changePassword(oldPassword, newPassword) {
        // Verify old password first
        if (!await this.authenticate(oldPassword)) {
            throw new Error('Current password is incorrect');
        }

        try {
            // Re-encrypt test data with new password
            const testData = { test: true };
            const newEncrypted = await this.crypto.encrypt(testData, newPassword);
            localStorage.setItem('testEncryption', newEncrypted);
            
            // Update stored password
            this.currentPassword = newPassword;
            
            // Here you would also need to re-encrypt all content with the new password
            return true;
        } catch (error) {
            console.error('Password change failed:', error);
            throw new Error('Failed to update password');
        }
    }
}

// Usage example:
async function loadContent() {
    const auth = new Auth();
    const crypto = new ContentCrypto();
    
    try {
        const response = await fetch('/assets/data/content.json');
        const encryptedContent = await response.text();
        
        if (await auth.authenticate('placeholder')) {
            const decryptedContent = await crypto.decrypt(encryptedContent, 'placeholder');
            return decryptedContent;
        } else {
            throw new Error('Authentication failed');
        }
    } catch (error) {
        console.error('Failed to load content:', error);
        throw error;
    }
}
