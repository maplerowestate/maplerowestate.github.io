import React from 'react';
import WineMap from '../WineMaps/WineMap.jsx';

const PrivateSales = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Private Sales for Club Members</h2>
      <p className="text-center text-gray-600 mb-6">
        Private wine clubs anchor modern estate business strategy. Through direct importing from unique global regions, we offer exclusive access to premium wines unavailable elsewhere. Our curated international selections bypass traditional distribution, delivering exceptional value to members while maintaining strong margins. This model transforms wine enthusiasts into loyal brand advocates who cherish their privileged access to the world's finest wines.
      </p>
      {/*<WineMap />*/}
    </div>
  );
};

export default PrivateSales;
