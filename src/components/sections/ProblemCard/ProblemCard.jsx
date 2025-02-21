import React, { useState } from 'react';
import { GiPodiumWinner, GiWineBottle, GiMoneyStack } from 'react-icons/gi';
import { MdHighQuality } from 'react-icons/md';
import { LiaPuzzlePieceSolid } from 'react-icons/lia';

import { VscCombine } from 'react-icons/vsc';

const CurlyBrace = ({ height }) => (
  <svg 
    width="20" 
    height={height} 
    viewBox={`0 0 20 ${height}`} 
    className="text-gray-400"
    style={{ minHeight: height }}
  >
    <path
      d={`
        M 20 0
        C 10 0, 0 0, 0 20
        L 0 ${height - 20}
        C 0 ${height}, 10 ${height}, 20 ${height}
      `}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ProblemCard = ({ title, icon: Icon, annotations }) => {
  const [isHovered, setIsHovered] = useState(false);
  const totalHeight = annotations.length * 24;

  return (
    <div className="relative w-full">
      <div 
        className="bg-white p-6 rounded-lg shadow cursor-pointer transition-shadow duration-300 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <h4 className="text-lg font-medium mb-3 flex items-center gap-2 border-b-2 border-gray-200 pb-1">
            <Icon className="w-6 h-6" />
            <span>&nbsp;{title}</span>
          </h4>
          
          <div className={`
            absolute left-full top-0 pl-4
            transition-all duration-300 whitespace-nowrap z-10
            ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}>
            <div className="flex">
              {/* Curly brace that spans full height */}
              <div className="relative" style={{ height: totalHeight }}>
                <CurlyBrace height={totalHeight} />
              </div>
              
              {/* Annotations */}
              <div className="space-y-2 pl-2">
                {annotations.map((annotation, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-md text-sm text-gray-700 whitespace-normal w-64"
                    style={{
                      transition: 'all 300ms',
                      transitionDelay: `${index * 50}ms`,
                      transform: isHovered ? 'translateX(0)' : 'translateX(1rem)',
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    {annotation}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProblemSection = () => {
  const market_gaps = [
    {
      title: "Underserved Markets",
      icon: GiMoneyStack,
      annotations: [
        "Lack of premium, exclusive estate experiences",
        "Growing demand for luxury experiential offerings",
        "Limited options for international wine enthusiasts"
      ]
    },
    {
      title: "Limited Regional Selection",
      icon: GiPodiumWinner,
      annotations: [
        "Local wineries lack brandy products",
        "Limited regional production of craft mead",
        "Untapped opportunity in luxury beverage sector"
      ]
    },
    {
      title: "Lack of Integrated Experiences",
      icon: GiWineBottle,
      annotations: [
        "Few options for networking activities and forums",
        "Gap in comprehensive estate experiences",
        "Low presence of wine and brandy expertise delivering a personal experience"
      ]
    }
  ];
  
  const market_chals = [
    {
      title: "Market Fragmentation",
      icon: LiaPuzzlePieceSolid,
      annotations: [
        "Agricultural and luxury experiences are typically offered separately",
        "No single provider offering comprehensive premium services",
        "Disconnected experiences across different venues"
      ]
    },
    {
      title: "Inconsistent Quality Offerings",
      icon: MdHighQuality,
      annotations: [
        "Current market offerings show varying standards in beverage products and services",
        "Inconsistent luxury experiences",
        "Lack of premium quality control across all offerings"
      ]
    },
    {
      title: "Limited Value Integration",
      icon: LiaPuzzlePieceSolid,
      annotations: [
        "Few venues manage to balance an estate aesthetic with social and cultural experiences",
        "Even fewer venues seemlessly integrate local products with imports",
        "No local venues are capable of fielding multifarious unique product lines from across the globe"
      ]
    }
  ];

  return (
    <div>
      <div className="w-full mb-12">
        <h3 className="text-xl font-semibold mb-6">Market Gaps</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {market_gaps.map((gap, index) => (
      <ProblemCard key={index} {...gap} />
    ))}
        </div>
      </div>
      
      <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />

      <div className="w-full mb-12">
        <h3 className="text-xl font-semibold mb-6">Market Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {market_chals.map((chal, index) => (
      <ProblemCard key={index} {...chal} />
    ))}
        </div>
      </div>
      
      <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
    </div>
  );
};

export default ProblemSection;
