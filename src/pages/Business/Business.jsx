import { useState, useEffect, useRef } from 'react'

import './Business.css'
import '../../styles/FullPageLayout.css'
import PortfolioCarousel from '../../components/sections/PortfolioCarousel/PortfolioCarousel'
import NovaMap from '../../components/sections/NovaMap/NovaMap.jsx'
import ProblemSection from '../../components/sections/ProblemCard/ProblemCard.jsx'
import SolutionGrid from '../../components/sections/SolutionGrid/SolutionGrid.jsx'
import HorseBoardingMarketChart from '../../components/sections/MarketCharts/HorseBoardingMarketChart.jsx'

const Business = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')
  const [showFooter, setShowFooter] = useState(false)
  
  // Track programmatic scrolling state
  const isProgrammaticScrollRef = useRef(false)
  
  // Store intersection observer entries
  const intersectionEntriesRef = useRef([])

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'about-us', label: 'About Us' },
    { id: 'problem', label: 'The Problem' },
    { id: 'solution', label: 'Our Solution' },
    { id: 'market-validation', label: 'Market Validation' },
    { id: 'market-composition', label: 'Market Composition' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'business-model', label: 'Business Model' },
    { id: 'market-adoption', label: 'Market Adoption' },
    { id: 'competition', label: 'Competition' },
    { id: 'competitive-advantages', label: 'Competitive Advantages' },
    { id: 'our-team', label: 'Our Team' },
    { id: 'financial', label: 'Financial' },
    { id: 'join-us', label: 'Join Us' }
  ]

  // Prevent default scroll behavior and set up scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    
    // Prevent default scroll-to-anchor behavior
    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo(window.scrollX, window.scrollY);
      }, 0);
    }
  }, []);

  // Initialize intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    }

    const handleIntersection = (entries) => {
      // Don't update during programmatic scrolling
      if (isProgrammaticScrollRef.current) return

      // Update our ref with latest intersection data
      entries.forEach(entry => {
        const index = intersectionEntriesRef.current.findIndex(
          e => e.target === entry.target
        )
        if (index === -1) {
          intersectionEntriesRef.current.push(entry)
        } else {
          intersectionEntriesRef.current[index] = entry
        }
      })

      // Find the most visible section
      const mostVisible = intersectionEntriesRef.current.reduce((prev, current) => {
        if (!prev || current.intersectionRatio > prev.intersectionRatio) {
          return current
        }
        return prev
      }, null)

      if (mostVisible && mostVisible.target.id !== activeSection) {
        setActiveSection(mostVisible.target.id)
        // Update URL without causing scroll
        const newUrl = new URL(window.location);
        newUrl.hash = mostVisible.target.id;
        window.history.replaceState(null, '', newUrl.toString());
        
        // Prevent browser from scrolling to anchor
        if (window.location.hash) {
          setTimeout(() => {
            window.scrollTo(window.scrollX, window.scrollY);
          }, 0);
        }
      }
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sections, activeSection])

  // Handle scroll events for back-to-top button and footer
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight
      setShowFooter(isAtBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Updated navigation handler
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      isProgrammaticScrollRef.current = true
      
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)

      // Only update URL after scrolling
      setTimeout(() => {
        const newUrl = new URL(window.location);
        newUrl.hash = sectionId;
        window.history.replaceState(null, '', newUrl.toString());
        isProgrammaticScrollRef.current = false
      }, 1000) // Adjust timeout to match scroll duration
    }
  }

  const scrollToTop = () => {
    isProgrammaticScrollRef.current = true

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    setActiveSection('overview')
    window.history.pushState(null, '', '#overview')

    setTimeout(() => {
      isProgrammaticScrollRef.current = false
    }, 1000)
  }

  return (
    <div className="business-page">
      <nav className="section-nav">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`section-nav-dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleNavigation(section.id)}
          >
            <span className="section-nav-label">{section.label}</span>
          </div>
        ))}
      </nav>

      {/* Overview Section with Video Background */}
      <section id="overview" className="section video-section">
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/mre_reel.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-content">
          <h1 className="display-title">Maple Row Estate</h1>
          <p className="lead">
            A distinctive investment opportunity in Northern Virginia's luxury agricultural 
            and hospitality market, combining premium alcohol production, high-end equestrian 
            services, and exclusive member experiences.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="section">
        <div className="container">
          <h2>About Us</h2>
          <div className="content-section grid gap-8">
            <div className="mission-vision">
              <h3>Our Mission</h3>
              <p>
                Maple Row Estate is committed to preserving and cultivating a sustainable, 
                heritage-rich estate while offering unique agricultural experiences and products. 
                We nurture the land, support local economies, and provide a welcoming environment 
                for visitors.
              </p>
            </div>

            <div className="philosophy">
              <h3>Philosophy & Vision</h3>
              <p>
                Our philosophy is rooted in respect for the land, tradition, and community. 
                We believe in sustainable practices, ethical stewardship, and fostering 
                community pride in estate tradition. Our vision is to become a renowned estate 
                offering high-end libations, cultural education, and local products and services.
              </p>
            </div>

            <div className="portfolio">
              <h3>Business Portfolio</h3>
              <PortfolioCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="section">
        <div className="container">
          <h2>The Problem</h2>
          <div className="content-section">
            <ProblemSection />
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section id="solution" className="section">
        <div className="solution-container">
          <h2>Our Solution</h2>
          <div className="content-section">
            {/* Solution Grid Component */}
            <SolutionGrid />
            <div className="mt-12">
            </div>
          </div>
        </div>
      </section>

      {/* Market Validation Section */}
      <section id="market-validation" className="section">
        <div className="container">
          <h2>Market Validation</h2>
          <div className="content-section" style={{ width: '100%', height: 400}}>
            <HorseBoardingMarketChart />
          </div>
        </div>
      </section>

      {/* Market Composition Section */}
      <section id="market-composition" className="section">
        <div className="container">
          <h2>Market Composition</h2>
          <div className="market-grid">
            <div className="market-card">
              <h4>Demographics</h4>
              <ul>
                <li>High-net-worth individuals</li>
                <li>Luxury experience seekers</li>
                <li>Agricultural enthusiasts</li>
              </ul>
            </div>
            <div className="market-card">
              <h4>Geographic Focus</h4>
              <ul>
                <li>Washington D.C. metropolitan area</li>
                <li>Virginia's horse and wine country</li>
                <li>Regional luxury markets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <h2>Products</h2>
          <div className="streams-grid">
            <div className="stream-card">
              <h4>Honey Mead</h4>
              <p>Premium craft mead targeting luxury market.</p>
              <ul>
                <li>100 bottles monthly production</li>
                <li>Multiple product lines: Basic, Aged, and Fine</li>
                <li>Premium positioning</li>
              </ul>
            </div>
            <div className="stream-card">
              <h4>Honey Mead Brandy</h4>
              <p>Exclusive distillation process and premium positioning.</p>
              <ul>
                <li>First local producer in region</li>
                <li>Temperature-controlled aging facility</li>
                <li>Luxury market focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2>Services</h2>
          <div className="streams-grid">
            <div className="stream-card">
              <h4>Horse Boarding</h4>
              <p>Comprehensive equestrian services and facilities.</p>
              <ul>
                <li>Premium facility amenities</li>
                <li>Full-service care packages</li>
                <li>Professional staff</li>
              </ul>
            </div>
            <div className="stream-card">
              <h4>Private Club Membership</h4>
              <p>Exclusive access and experiences.</p>
              <ul>
                <li>Tiered membership levels</li>
                <li>Exclusive events and tastings</li>
                <li>Priority product access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section id="business-model" className="section">
        <div className="container">
          <h2>Business Model</h2>
          <div className="content-section">
            <p>Revenue streams and operational framework.</p>
          </div>
        </div>
      </section>

      {/* Market Adoption Section */}
      <section id="market-adoption" className="section">
        <div className="container">
          <h2>Market Adoption</h2>
          <div className="content-section">
            <p>Strategy for market penetration and growth.</p>
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section id="competition" className="section">
        <div className="container">
          <h2>Competition</h2>
          <div className="content-section">
            <p>Analysis of competitive landscape.</p>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section id="competitive-advantages" className="section">
        <div className="container">
          <h2>Competitive Advantages</h2>
          <div className="operations-grid">
            <div className="operations-card">
              <h4>Production Advantages</h4>
              <ul>
                <li>First local mead brandy producer</li>
                <li>Premium quality control processes</li>
                <li>Temperature-controlled aging</li>
              </ul>
            </div>
            <div className="operations-card">
              <h4>Market Advantages</h4>
              <ul>
                <li>Prime location</li>
                <li>Multiple revenue streams</li>
                <li>Exclusive membership model</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="management-grid">
            <div className="management-card">
              <h4>Executive Team</h4>
              <ul>
                <li>Experienced leadership</li>
                <li>Industry expertise</li>
                <li>Strategic vision</li>
              </ul>
            </div>
            <div className="management-card">
              <h4>Operations Team</h4>
              <ul>
                <li>Skilled production staff</li>
                <li>Agricultural experts</li>
                <li>Customer service specialists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Section */}
      <section id="financial" className="section">
        <div className="container">
          <h2>Financial</h2>
          <div className="subsection">
            <h3>Capital Requirements</h3>
            <div className="financials-grid">
              <div className="financial-card">
                <h4>Total Investment</h4>
                <p className="amount">$5.7M - $6.2M</p>
                <p className="note">Initial Capital Requirement</p>
              </div>
              <div className="financial-card">
                <h4>Property Acquisition</h4>
                <p className="amount">$5.3M</p>
                <p className="note">Target Value</p>
              </div>
              <div className="financial-card">
                <h4>Operating Capital</h4>
                <p className="amount">$700K</p>
                <p className="note">First Year Operations</p>
              </div>
            </div>
          </div>
          
          <div className="subsection">
            <h3>Revenue Projections</h3>
            <div className="financials-grid">
              <div className="financial-card">
                <h4>Year 1</h4>
                <p className="amount">$383,000</p>
              </div>
              <div className="financial-card">
                <h4>Year 2</h4>
                <p className="amount">$1,224,000</p>
              </div>
              <div className="financial-card">
                <h4>Year 3</h4>
                <p className="amount">$2,126,000</p>
              </div>
              <div className="financial-card">
                <h4>Beyond Year 3</h4>
                <p className="amount">$2,862,000+</p>
                <p className="note">20% Annual Growth</p>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3>Revenue Breakdown</h3>
            <div className="revenue-table">
              <table>
                <thead>
                  <tr>
                    <th>Revenue Stream</th>
                    <th>Year 1</th>
                    <th>Year 2</th>
                    <th>Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Honey Mead</td>
                    <td>-</td>
                    <td>$90,000</td>
                    <td>$208,000</td>
                  </tr>
                  <tr>
                    <td>Honey Mead Brandy</td>
                    <td>-</td>
                    <td>$123,000</td>
                    <td>$292,000</td>
                  </tr>
                  <tr>
                    <td>Premium Alfalfa Hay</td>
                    <td>$144,000</td>
                    <td>$192,000</td>
                    <td>$268,000</td>
                  </tr>
                  <tr>
                    <td>Private Club Membership</td>
                    <td>$57,000</td>
                    <td>$403,000</td>
                    <td>$787,000</td>
                  </tr>
                  <tr>
                    <td>Private Alcohol Sales</td>
                    <td>$30,000</td>
                    <td>$90,000</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>Horse Boarding Services</td>
                    <td>$134,000</td>
                    <td>$296,000</td>
                    <td>$384,000</td>
                  </tr>
                  <tr>
                    <td>Social Media</td>
                    <td>$18,000</td>
                    <td>$30,000</td>
                    <td>$87,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="section">
        <div className="container">
          <h2>Join Us</h2>
          <div className="contact-content">
            <div className="subsection">
              <p className="contact-info">
                Hamilton Bonds<br />
                304-801-3201<br />
                maplerowestate@gmail.com
              </p>
            </div>
            <div className="subsection">
              <h3>Next Steps</h3>
              <p>Information about the investment process and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}

export default Business
