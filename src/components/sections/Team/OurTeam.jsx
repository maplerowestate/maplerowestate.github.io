import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './OurTeam.css'

const FlipCard = ({ title, frontImage, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="w-full">
        {/* Front of card */}
        <div
          className="flex flex-col items-center justify-center w-full"
          style={{ width: '350px', height: '350px' }}
          onMouseEnter={() => setIsFlipped(true)}
        >
          <div className="w-full h-full flex flex-col items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="image-container">
              <img 
                src={frontImage} 
                alt={`${title} illustration`} 
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div className="w-full p-4">
              <h3 className="image-text">{title}</h3>
              <p className="image-text">Hover to learn more</p>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="flex flex-col items-center justify-center w-full"
          style={{ width: '350px', height: '350px' }}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <div className="w-full h-full overflow-auto flex flex-col bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <div className="flex-grow overflow-auto text-gray-700 text-sm">
              {backContent}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

const OurTeam = () => {
  const hamiltonContent = (
    <>
      <p className="mb-4">8 years of experience as an entrepreneur.</p>
      <p className="mb-4">Responsible for business portfolios valued at over $10M.</p>
      <h4 className="font-medium mb-2">About Hamilton</h4>
      <p>Hamilton Bonds graduated from the United States Military Academy in 2017 with a Bachelor of Science in Physics and a minor in Cybersecurity. Upon graduation, he was commissioned as a Cyber Officer in the US Army. During his seven-year tenure in the Army, Hamilton's career was marked by two significant roles in cyber intelligence and cyber capabilities development. Hamilton owns two businesses outside of Maple Row Estate, bringing his extensive experience in management and business to the company.</p>
    </>
  );

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <table className="w-full border-collapse items-center justify-center" style={{ marginLeft: 'auto', marginRight: 'auto', verticalAlign: 'top', height: '500px' }}>
            <tbody>
              <tr>
                <td className="p-2 align-top style={{ width: '350px', height: '500px' }}">
                  <p>        </p>
                </td>
                <td className="p-2 align-top style={{ width: '350px', height: '500px' }}">
                  <FlipCard 
                    title="Founder & CEO" 
                    frontImage="/hamilton-bonds.jpg" 
                    backContent={hamiltonContent} 
                  />
                </td>
                <td className="p-2 align-top style={{ width: '350px', height: '350px' }}">
                  <p>        </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <hr style={{ marginTop: '10rem', marginBottom: '4rem' }} className="my-8" />

      </div>
    </div>
  );
};

export default OurTeam;
