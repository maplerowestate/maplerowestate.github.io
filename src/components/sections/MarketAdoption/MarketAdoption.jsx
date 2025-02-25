import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './MarketAdoption.css'

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

const MarketAdoption = () => {
  const eventsContent = (
    <>
      <p className="mb-4">Engage with Northern Virginia's high society through exclusive events that showcase our estate's luxury offerings.</p>
      <h4 className="font-medium mb-2">Key Society Events:</h4>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>Seasonal Wine Dinners with celebrity sommeliers</li>
        <li>Middleburg Hunt Club Fox Hunts sponsorships</li>
        <li>Charity Polo Matches at Great Meadow</li>
        <li>Exclusive Tasting Events for private club members</li>
        <li>Northern Virginia Equestrian Shows</li>
        <li>Georgetown & Loudoun County Gala Nights</li>
        <li>Annual Estate Harvest Festival</li>
        <li>Member-only Mead Making Masterclasses</li>
      </ul>
    </>
  );

  const partnershipsContent = (
    <>
      <p className="mb-4">Strategic partnerships will accelerate market adoption and strengthen our brand's positioning in the luxury agricultural sector.</p>
      <h4 className="font-medium mb-2">Key Partnerships:</h4>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>Local Vineyards & Wineries (RdV, Boxwood, Linden)</li>
        <li>Premium Equestrian Facilities (Salamander Resort, Morven Park)</li>
        <li>Regional Beverage Distributors for private allocations</li>
        <li>Culinary Schools & Celebrity Chefs for pairing events</li>
        <li>DC-based Luxury Hotels (Four Seasons, Ritz-Carlton)</li>
        <li>Private Aviation Services at Dulles & Leesburg</li>
        <li>Artisanal Food Producers for complementary goods</li>
        <li>International Sommelier Association for education</li>
      </ul>
    </>
  );

  const onlineContent = (
    <>
      <p className="mb-4">Targeted digital presence will complement our primarily offline business and enhance member engagement.</p>
      <h4 className="font-medium mb-2">Online Strategies:</h4>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>Members-only Digital Portal with exclusive content</li>
        <li>Private Product Allocation System for mead and brandy</li>
        <li>Curated Social Media Presence (Instagram, LinkedIn)</li>
        <li>Digital Newsletter for estate updates and offerings</li>
        <li>Virtual Tastings for remote members</li>
        <li>Estate Virtual Tours and behind-the-scenes content</li>
        <li>Invitation-only Webinars with industry experts</li>
        <li>Targeted Digital Advertising in luxury publications</li>
      </ul>
    </>
  );

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Market Adoption Strategy</h2>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">Our strategic approach to market entry and expansion ensures sustainable growth while maintaining our exclusive brand positioning.</p>
        
        <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <table className="w-full border-collapse" style={{ height: '350px' }}>
            <tbody>
              <tr>
                <td className="p-2 w-1/3 align-top style={{ width: '350px', height: '500px' }}">
                  <FlipCard 
                    title="Exclusive Events" 
                    frontImage="/events.jpg" 
                    backContent={eventsContent} 
                  />
                </td>
                <td className="p-2 w-1/3 align-top style={{ width: '350px', height: '350px' }}">
                  <FlipCard 
                    title="Strategic Partnerships" 
                    frontImage="/partnership.jpg" 
                    backContent={partnershipsContent} 
                  />
                </td>
                <td className="p-2 w-1/3 align-top style={{ width: '350px', height: '350px' }}">
                  <FlipCard 
                    title="Online Engagement" 
                    frontImage="/online.jpg" 
                    backContent={onlineContent} 
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <hr style={{ marginTop: '10rem', marginBottom: '4rem' }} className="my-8" />

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Phased Adoption Approach</h3>
          <p className="text-gray-700 mb-4">Our market adoption strategy follows a deliberate phased approach, ensuring sustainable growth and maintaining our exclusive positioning:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Phase 1: Foundation</h4>
              <p className="text-gray-600 text-sm">Establish core operations, develop initial partnerships, and build private membership base through targeted invitations to influential figures in Northern Virginia.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Phase 2: Expansion</h4>
              <p className="text-gray-600 text-sm">Scale product offerings, increase event frequency, broaden partnership network, and grow membership through existing member referrals to maintain exclusivity.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Phase 3: Refinement</h4>
              <p className="text-gray-600 text-sm">Optimize all business components, introduce franchise opportunities, and establish the estate as a recognized luxury brand throughout the Mid-Atlantic region.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAdoption;
