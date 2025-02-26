import React, { useState } from 'react';
import { useEffect } from 'react';
import RapidCounter from '../../common/RapidCounter.jsx'
import './MarketValidation.css'

// Import EB Garamond font
const loadFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const MarketValidation = () => {
  // Load the font when component mounts
  useEffect(() => {
    loadFont();
  }, []);
  const [selectedView, setSelectedView] = useState('Aggregate');

  const marketData = [
    {
      name: 'Craft Honey Mead',
      TAM: 25000000,
      SAM: 5000000,
      SOM: 100000,
      details: 'Premium craft mead targeting luxury market with limited regional competition.'
    },
    {
      name: 'Craft Honey Mead Brandy',
      TAM: 125000000,
      SAM: 12500000,
      SOM: 125000,
      details: 'First local producer in region, targeting premium spirits market.'
    },
    {
      name: 'Premium Alfalfa Hay',
      TAM: 280000000,
      SAM: 7000000,
      SOM: 105000,
      details: 'High-quality hay production for premium livestock market.'
    },
    {
      name: 'Private Wine Club Membership',
      TAM: 7500000000,
      SAM: 150000000,
      SOM: 3000000,
      details: 'Exclusive membership model targeting affluent wine enthusiasts.'
    },
    {
      name: 'Private Wine Club Retail',
      TAM: 3000000000,
      SAM: 60000000,
      SOM: 600000,
      details: 'Premium retail wine sales through exclusive channels.'
    },
    {
      name: 'Horse Boarding',
      TAM: 12200000000,
      SAM: 305000000,
      SOM: 4600000,
      details: 'Comprehensive equestrian services for high-end market.'
    }
  ];

  // Calculate aggregate totals
  const totalMarkets = marketData.reduce((acc, curr) => ({
    TAM: acc.TAM + curr.TAM,
    SAM: acc.SAM + curr.SAM,
    SOM: acc.SOM + curr.SOM
  }), { TAM: 0, SAM: 0, SOM: 0 });

  const formatValue = (value) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value}`;
  };

  const RapidCounter = ({ targetValue, speed }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const incrementStep = Math.ceil(targetValue / speed);
      const intervalId = setInterval(() => {
        setCurrentValue(prev => {
          if (prev >= targetValue) {
            clearInterval(intervalId);
            return targetValue;
          }
          return prev + incrementStep;
        });
      }, 10);

      return () => clearInterval(intervalId);
    }, [targetValue, speed]);

    return (
      <h1 className="text-center">{formatValue(currentValue)}</h1>
    );
  };
  
  const selectedMarket = marketData.find(comp => comp.name === selectedView);

  const MarketCircles = ({ data }) => {
    const svgSize = 400;
    const center = svgSize / 2;
    const maxRadius = (svgSize / 2) - 40;
    
    const getRadius = (value) => {
      return Math.sqrt(value / data.TAM) * maxRadius;
    };

    const tamRadius = maxRadius;
    const samRadius = getRadius(data.SAM);
    const somRadius = getRadius(data.SOM);

    return (
      <div className="relative">
        <svg 
          width={svgSize} 
          height={svgSize} 
          className="transform-gpu"
        >
          <circle
            cx={center}
            cy={center}
            r={tamRadius}
            fill="#4B5563"
            fillOpacity="0.1"
            stroke="#4B5563"
            strokeWidth="2"
          />
          
          <circle
            cx={center}
            cy={center}
            r={samRadius}
            fill="#059669"
            fillOpacity="0.1"
            stroke="#059669"
            strokeWidth="2"
          />
          
          <circle
            cx={center}
            cy={center}
            r={somRadius}
            fill="#2563EB"
            fillOpacity="0.1"
            stroke="#2563EB"
            strokeWidth="2"
          />

          <text x={center} y={center - tamRadius + 20} textAnchor="middle" className="text-sm">
            TAM: {formatValue(data.TAM)}
          </text>
          <text x={center} y={center - samRadius + 20} textAnchor="middle" className="text-sm">
            SAM: {formatValue(data.SAM)}
          </text>
          <text x={center} y={center - somRadius + 20} textAnchor="middle" className="text-sm">
            SOM: {formatValue(data.SOM)}
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Market Size Analysis</h3>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedView('Aggregate');
            }}
            className={`px-4 py-2 rounded-lg transition-colors text-xs ${
              selectedView === 'Aggregate'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Aggregate
          </button>
          {marketData.map((component) => (
            <button
              key={component.name}
              onClick={(e) => {
                e.preventDefault();
                setSelectedView(component.name);
              }}
              className={`px-4 py-2 rounded-lg transition-colors text-base font-serif ${
                selectedView === component.name
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {component.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <table>
            <tbody className="items-left">
              <tr>
                <td className="p-4 text-center align-left">
                  <MarketCircles 
                    data={selectedView === 'Aggregate' ? totalMarkets : 
                      marketData.find(comp => comp.name === selectedView)}
                  />
                </td>
                <td>
                  <h3>{selectedView}</h3>
                  {selectedView !== 'Aggregate' && (
                    <div className="w-full h-screen flex justify-center mt-8">
                      <div className="bg-gray-50 rounded-lg p-4 max-w-2xl">
                        <p className="text-gray-600 text-center">
                          {marketData.find(comp => comp.name === selectedView).details}
                        </p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <table className="w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="p-4 text-center font-normal">
                            <h3 className="text-sm text-gray-600 market-val">
                                Total Addressable Market (TAM)
                            </h3>
                        </th>
                        <th className="p-4 text-center font-normal">
                            <h3 className="text-sm text-gray-600 market-val">
                                Serviceable Available Market (SAM)
                            </h3>
                        </th>
                        <th className="p-4 text-center font-normal">
                            <h3 className="text-sm text-gray-600 market-val">
                                Serviceable Obtainable Market (SOM)
                            </h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 text-center align-middle">
                      <div className="flex flex-col items-center justify-center">
                        <RapidCounter
                          targetValue={selectedView === 'Aggregate' ? totalMarkets.TAM : selectedMarket.TAM}
                          speed={100}
                        />
                      </div>
                    </td>
                    <td className="p-4 text-center align-middle">
                      <div className="flex flex-col items-center justify-center">
                        <RapidCounter 
                          targetValue={selectedView === 'Aggregate' ? totalMarkets.SAM : selectedMarket.SAM}
                          speed={100}
                        />
                      </div>
                    </td>
                    <td className="p-4 text-center align-middle">
                      <div className="flex flex-col items-center justify-center">
                        <RapidCounter 
                          targetValue={selectedView === 'Aggregate' ? totalMarkets.SOM : selectedMarket.SOM}
                          speed={100}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketValidation;
