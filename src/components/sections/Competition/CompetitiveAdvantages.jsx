import React, { useEffect, useState } from 'react';

const CompetitiveAdvantages = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <table>
        <tbody>
          <tr>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '100px', fontSize: '20px' }}>First Mead Brandy in Region</button>
            </td>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '100px', fontSize: '20px' }}>Unique Winemaker Connections</button>
            </td>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '100px', fontSize: '20px' }}>Multiple Revenue Streams</button>
            </td>
          </tr>
          <tr>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '100px', fontSize: '20px' }}>Prime Location</button>
            </td>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '100px', fontSize: '20px' }}>Exclusive Membership Model</button>
            </td>
            <td className="p-4 text-center font-normal" style={{ width: '400px' }}>
              <button style={{ width: '350px', height: '100px', fontSize: '20px' }}>Competitive Talent Pool</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CompetitiveAdvantages;
