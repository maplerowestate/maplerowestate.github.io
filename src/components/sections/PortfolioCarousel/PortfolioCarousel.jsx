import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PortfolioCarousel.css';

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      title: 'Honey Mead',
      description: 'Premium craft mead production with traditional methods',
      imageAlt: 'Honey mead production',
      imageSrc: '/mead.jpg',
    },
    {
      title: 'Honey Mead Brandy',
      description: 'Exclusive distillation and premium positioning',
      imageAlt: 'Honey mead brandy',
      imageSrc: '/brandy.jpg',
    },
    {
      title: 'Premium Alfalfa Hay',
      description: 'High-quality cultivation for agricultural excellence',
      imageAlt: 'Premium alfalfa hay field',
      imageSrc: '/hay.jpg',
    },
    {
      title: 'Private Club Membership',
      description: 'Exclusive access and personalized experiences',
      imageAlt: 'Private club experience',
      imageSrc: '/private-membership.jpg',
    },
    {
      title: 'Private Alcohol Sales',
      description: 'Curated selection for discerning clients',
      imageAlt: 'Private alcohol selection',
      imageSrc: '/private-sales.jpg',
    },
    {
      title: 'Horse Boarding',
      description: 'Comprehensive equestrian services and facilities',
      imageAlt: 'Horse boarding facility',
      imageSrc: '/horses.jpg',
    },
    {
      title: 'Social Media',
      description: 'Engaging content and community building',
      imageAlt: 'Social media engagement',
      imageSrc: '/social-media.jpg',
    },
    {
      title: 'Franchise Opportunities',
      description: 'Future expansion and growth potential',
      imageAlt: 'Franchise opportunity',
      imageSrc: '/franchise-contracts.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="portfolio-carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="image-container">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                />
              </div>
              <h3 className="item-title">{item.title}</h3>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="carousel-button prev"
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="carousel-button next"
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="carousel-pagination">
        {Array.from({ length: portfolioItems.length - 2 }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`pagination-dot ${currentIndex === i ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
