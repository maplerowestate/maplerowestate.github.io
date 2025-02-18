import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/variables.css'
import './styles/global.css'
import './App.css'

// Import Business component
import Business from './pages/Business/Business'

// Placeholder components until we create the actual ones
const Home = () => (
  <div className="section">
    <div className="container">
      <h1 className="display-title">Welcome to Maple Row Estate</h1>
      <p>Luxury agricultural experiences in Virginia's prestigious horse and wine country.</p>
    </div>
  </div>
)

const About = () => (
  <div className="section">
    <div className="container">
      <h1>About Us</h1>
      <p>A heritage-rich estate offering unique agricultural experiences and premium products.</p>
    </div>
  </div>
)

const Products = () => (
  <div className="section">
    <div className="container">
      <h1>Our Products</h1>
      <p>Discover our premium honey mead, brandy, and agricultural offerings.</p>
    </div>
  </div>
)

const Contact = () => (
  <div className="section">
    <div className="container">
      <h1>Contact Us</h1>
      <p>Connect with Maple Row Estate.</p>
    </div>
  </div>
)

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  // Add this state near your other useState declarations
  const [showFooter, setShowFooter] = useState(false)

  // Add this useEffect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Check if we're at the bottom of the page
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPosition = window.scrollY
      
      // Show footer when we're close to the bottom (within 50px)
      setShowFooter(documentHeight - (scrollPosition + windowHeight) <= 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
          <div className="container">
            <div className="header-brand">
              <Link to="/" className="display-title">Maple Row Estate</Link>
            </div>
            <nav className="main-nav">
              <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <div className="nav-dropdown">
                  <Link to="/business#overview" className="nav-link">Business</Link>
                  <div className="dropdown-content">
                    <a href="/business#overview">Overview</a>
                    <a href="/business#about-us">About Us</a>
                    <a href="/business#problem">The Problem</a>
                    <a href="/business#solution">Our Solution</a>
                    <a href="/business#market-validation">Market Validation</a>
                    <a href="/business#market-composition">Market Composition</a>
                    <a href="/business#products">Products</a>
                    <a href="/business#services">Services</a>
                    <a href="/business#business-model">Business Model</a>
                    <a href="/business#market-adoption">Market Adoption</a>
                    <a href="/business#competition">Competition</a>
                    <a href="/business#competitive-advantages">Competitive Advantages</a>
                    <a href="/business#our-team">Our Team</a>
                    <a href="/business#financial">Financial</a>
                    <a href="/business#join-us">Join Us</a>
                  </div>
                </div>
                <Link to="/contact" className="nav-link">Contact</Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/business" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`footer ${showFooter ? 'visible' : ''}`}>
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <h2 className="display-title">Maple Row Estate</h2>
                <p>Fauquier County, VA</p>
              </div>
              <div className="footer-links">
                <div className="footer-section">
                  <h3>Contact</h3>
                  <p>304-801-3201</p>
                  <p>maplerowestate@gmail.com</p>
                </div>
                <div className="footer-section">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Maple Row Estate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
