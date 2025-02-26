import { useState, useEffect, useRef } from 'react'

import './Business.css'
import '../../styles/FullPageLayout.css'

import UniversalButton from '../../components/common/UniversalButton.jsx'

import PortfolioCarousel from '../../components/sections/PortfolioCarousel/PortfolioCarousel'
import ProblemSection from '../../components/sections/ProblemCard/ProblemCard.jsx'
import SolutionGrid from '../../components/sections/SolutionGrid/SolutionGrid.jsx'

import HorseBoardingMarketChart from '../../components/sections/MarketCharts/HorseBoardingMarketChart.jsx'
import MarketValidation from '../../components/sections/MarketCharts/MarketValidation.jsx'
import MarketComposition from '../../components/sections/MarketCharts/MarketComposition.jsx'

import Mead from '../../components/sections/Products/Mead.jsx'
import Brandy from '../../components/sections/Products/Brandy.jsx'
import Hay from '../../components/sections/Products/Hay.jsx'

import PrivateMembership from '../../components/sections/Services/PrivateMembership.jsx'
import PrivateSales from '../../components/sections/Services/PrivateSales.jsx'
import HorseBoarding from '../../components/sections/Services/HorseBoarding.jsx'

import BusinessModel from '../../components/sections/BusinessModel/BusinessModel.jsx'
import MarketAdoption from '../../components/sections/MarketAdoption/MarketAdoption.jsx'
import CompetitorRadarChart from '../../components/sections/Competition/CompetitorRadarChart.jsx'
import CompetitiveAdvantages from '../../components/sections/Competition/CompetitiveAdvantages.jsx'

import OurTeam from '../../components/sections/Team/OurTeam.jsx'
import Investing from '../../components/sections/Financial/Investing.jsx'

import NovaMap from '../../components/sections/NovaMap/NovaMap.jsx'


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
      //const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight
      const isAtBottom = sectionId === '#join-us'
      console.log(sectionId)
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
          <div className="content-section" style={{ width: '100%', height: '100%'}}>
            <MarketValidation />
          </div>
        </div>
      </section>

      {/* Market Composition Section */}
      <section id="market-composition" className="section">
        <div className="container">
          <h2>Market Composition</h2>
          <MarketComposition />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <div className="content-section">
            <h2>Products</h2>
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
            
            <Mead />
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
            
            <Brandy />
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
            
            <Hay />
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="content-section">
            <h2>Services</h2>
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
            
            <PrivateMembership />
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
            
            <PrivateSales />
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
            
            <HorseBoarding />
            <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section id="business-model" className="section">
        <div className="container">
          <h2>Business Model</h2>
          <div className="content-section">
            <BusinessModel />
          </div>
        </div>
      </section>

      {/* Market Adoption Section */}
      <section id="market-adoption" className="section">
        <div className="container">
          <h2>Market Adoption</h2>
          <div className="content-section">
            <MarketAdoption />
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section id="competition" className="section">
        <div className="container">
          <h2>Competition</h2>
          <div className="content-section">
            <CompetitorRadarChart />
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section id="competitive-advantages" className="section">
        <div className="container">
          <h2>Competitive Advantages</h2>
          <div className="content-section">
            <CompetitiveAdvantages />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="content-section">
            <OurTeam />
          </div>
        </div>
      </section>

      {/* Financial Section */}
      <section id="financial" className="section">
        <div className="container">
          <h2>Financial</h2>
          <div className="content-section">
            <Investing />
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
        style={{ display: 'auto' }}
      >
        ↑
      </button>
    </div>
  )
}

// FOOTER GO AWAY

export default Business
