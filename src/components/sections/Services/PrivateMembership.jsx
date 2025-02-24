import React from 'react';
import './PrivateMembership.css'

const PrivateMembership = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Private Club Membership</h2>
      <p className="text-center text-gray-600 mb-6">
        Our carefully curated wine selection serves as a catalyst for meaningful connections. Estate events transform premium tastings into powerful networking opportunities. Members deepen their wine knowledge while expanding their professional circles through intimate tastings, winemaker dinners, and cultural celebrations. The estate becomes more than a destination - it's an exclusive forum where shared appreciation for exceptional global wines fosters lasting relationships and enriching experiences.
      </p>
      
      {/* Card Section */}
      <div className="card-table-container">
        <div className="cards-table">
          <div className="bronze-card card">
            <h3>Bronze Membership</h3>
            <p>An exceptional introduction to the world of private wine estates. As a member, you’ll enjoy exclusive access to a curated selection of premium wines, delivered to your door each month. Your membership includes access to intimate wine tastings, where you can deepen your appreciation of fine wines in a relaxed yet refined environment. In addition to your monthly tastings, you’ll be invited to select estate events throughout the year, providing a taste of the vibrant community and connections fostered within the estate. The Bronze Membership gives you a rare opportunity to experience the beauty and culture of the estate, with access to the grounds during special open days and seasonal events, offering a glimpse into the rich traditions of the vineyard.</p>
          </div>

          <div className="card silver-card">
            <h3>Silver Membership</h3>
            <p>Designed for those who seek a deeper connection with both the world of wine and the estate itself. Members enjoy a thoughtfully curated collection of wines each month, providing a balance of accessibility and refined luxury. You’ll also have the privilege of attending several exclusive wine tastings throughout the year, where winemakers and sommeliers offer insider knowledge and engaging discussions. Silver members gain VIP access to a variety of private events, from winemaker dinners to seasonal celebrations, creating opportunities to form lasting connections with fellow connoisseurs. With full access to the estate grounds and exclusive member hours, you’ll enjoy a heightened level of intimacy with the estate, ensuring that every visit feels like a personal experience tailored just for you.</p>
          </div>

          <div className="gold-card card">
            <h3>Gold Membership</h3>
            <p>Tailored for those who seek unparalleled access and the highest level of personalized service. As a Gold member, you will receive a collection of rare and limited-edition wines each month, ensuring that every bottle is a unique experience. The wine tastings you’ll enjoy are elevated to a personal level, often hosted with the winemakers themselves, offering rare insights into the process behind each vintage. Gold members are invited to the most exclusive estate events, including private dinners, private tours, and invitations to members-only experiences, where the full splendor of the estate is on display. With unlimited access to the grounds and VIP privileges, every moment at the estate is an opportunity to indulge in the finest elements of luxury living. Your membership also opens doors to an elite network of industry leaders and professionals, ensuring that your time spent here is as enriching as it is exclusive.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateMembership;

