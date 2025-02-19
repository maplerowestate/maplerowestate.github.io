import React from 'react';
import './SolutionGrid.css';

const SolutionGrid = () => {
  const solutions = [
    {
      id: 'socialize',
      title: "Socialize",
      image: '/socialize.jpg',
      description: "Connect with members in our exclusive spaces"
    },
    {
      id: 'network',
      title: "Network",
      image: '/network.jpg',
      description: "Build meaningful professional relationships"
    },
    {
      id: 'develop',
      title: "Develop",
      image: '/develop.jpg',
      description: "Enhance your cultural knowledge and expertise"
    },
    {
      id: 'experience',
      title: "Experience",
      image: '/experience.jpg',
      description: "Immerse yourself in nature and luxury"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <table className="w-full border-collapse">
        <tbody>
        
          <tr>
            <td className="w-1/2 p-2">
              <div className="hover:cursor-pointer relative rounded-md overflow-hidden">
                <div className="image-container">
                  <img
                    src={solutions[0].image}
                    alt={solutions[0].title}
                    className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </td>
            
            <td className="w-1/2 p-2">
              <div className="hover:cursor-pointer relative rounded-md overflow-hidden">
                <div className="image-container">
                  <img
                    src={solutions[1].image}
                    alt={solutions[1].title}
                    className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </td>
          </tr>
            
          <tr>
            <td className="w-1/2 p-2">  
              <div className="image-text">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solutions[0].title}
                </h3>
                <p className="text-white">
                  {solutions[0].description}
                </p>
              </div>
            </td>
            
            <td className="w-1/2 p-2">  
              <div className="image-text">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solutions[1].title}
                </h3>
                <p className="text-white">
                  {solutions[1].description}
                </p>
              </div>
            </td>
          </tr>
          
          <tr>
            <td className="w-1/2 p-2">
              <div className="hover:cursor-pointer relative rounded-md overflow-hidden">
                <div className="image-container">
                  <img
                    src={solutions[2].image}
                    alt={solutions[2].title}
                    className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </td>
            
            <td className="w-1/2 p-2">
              <div className="hover:cursor-pointer relative rounded-md overflow-hidden">
                <div className="image-container">
                  <img
                    src={solutions[3].image}
                    alt={solutions[3].title}
                    className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </td>
          </tr>
            
          <tr>
            <td className="w-1/2 p-2">  
              <div className="image-text">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solutions[2].title}
                </h3>
                <p className="text-white">
                  {solutions[2].description}
                </p>
              </div>
            </td>
            
            <td className="w-1/2 p-2">  
              <div className="image-text">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solutions[3].title}
                </h3>
                <p className="text-white">
                  {solutions[3].description}
                </p>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default SolutionGrid;
