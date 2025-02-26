import React, { useEffect, useState } from 'react';
import RapidCounter from '../../common/RapidCounter.jsx'
import './Investing.css'

const Investing = () => {
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
  
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <p>We are selectively expanding our minority investor base with partners who value sustainable practices and appreciate the long-term value proposition of our diverse revenue model combining premium alcohol production, equestrian services, and exclusive member experiences.</p>
      <table>
        <tbody>
          <tr>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button className="white-text" style={{ width: '350px', height: '200px', fontSize: '20px' }}>
                <RapidCounter
                  targetValue={500000}
                  speed={100}
                />
                <span className="font-bold">Angel Round</span>
                <p className="subtext">initial investment opportunity</p>
              </button>
            </td>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '200px', fontSize: '20px' }}>
                <RapidCounter 
                  targetValue={1600000}
                  speed={100}
                />
                <span className="font-bold">Revenue</span>
                <p className="subtext">in the first 2 years</p>
              </button>
            </td>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '200px', fontSize: '20px' }}>
                <RapidCounter 
                  targetValue={6600000}
                  speed={100}
                />
                <span className="font-bold">Revenue</span>
                <p className="subtext">in the first 4 years</p>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Investing;
