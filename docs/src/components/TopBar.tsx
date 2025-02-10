import React, { useState, useEffect } from 'react';

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('executive-summary');

  const menuItems = [
    { id: 'executive-summary', name: 'Executive Summary' },
    { id: 'introduction', name: 'Overview' },
    { id: 'problem', name: 'Problem' },
    { id: 'solution', name: 'Solution' },
    { id: 'market', name: 'Market Opportunity' },
    { id: 'business', name: 'Business Model' },
    { id: 'traction', name: 'Traction' },
    { id: 'strategy', name: 'Go-to-Market' },
    { id: 'competition', name: 'Competition' },
    { id: 'financials', name: 'Financials' },
    { id: 'team', name: 'Team' },
    { id: 'funding', name: 'Funding' },
    { id: 'vision', name: 'Vision' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const currentSection = menuItems.find((item, index) => {
        const element = document.getElementById(item.id);
        if (!element) return false;
        const nextElement = menuItems[index + 1] 
          ? document.getElementById(menuItems[index + 1].id) 
          : null;
        const start = element.offsetTop;
        const end = nextElement ? nextElement.offsetTop : document.documentElement.scrollHeight;
        return scrollPosition >= start && scrollPosition < end;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-[95rem] mx-auto">
        <div className="flex items-center h-16 px-4">
          {/* Logo */}
          <div className="w-48 flex-shrink-0">
            <span className="font-pinyon text-copper text-2xl">Maple Row Estate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-grow px-4 overflow-x-auto">
            <div className="flex justify-center space-x-1">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  className={`px-2 py-1 text-sm whitespace-nowrap transition-colors hover:bg-cream rounded ${
                    activeSection === item.id
                      ? 'text-copper font-semibold bg-cream'
                      : 'text-sage hover:text-copper'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="p-2 text-sage hover:text-copper"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-current"></span>
                <span className="w-full h-0.5 bg-current"></span>
                <span className="w-full h-0.5 bg-current"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100">
            <nav className="max-w-[95rem] mx-auto py-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    activeSection === item.id
                      ? 'text-copper font-semibold bg-cream'
                      : 'text-sage hover:text-copper hover:bg-cream'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopBar;
