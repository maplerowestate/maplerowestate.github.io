import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Define microregions data outside component to avoid recreation
const microregionsData = {
  'Gard': 'Cévennes: Nestled between the Cévennes mountains and the Mediterranean.',
  'Loire': 'Côte Roannaise: Located in the northern Loire Valley, specializes in Gamay.',
  'Jura': 'Famous for unique wines, including Vin Jaune and Vin de Paille.',
  'Hérault': 'Part of Occitanie, producing Syrah and Grenache wines.',
  'Savoie': 'Known for crisp whites like Apremont from Jacquère grape.',
  'Haute-Savoie': 'Known for crisp white wines like Chasselas and Altesse.',
  'Friuli-Venezia Giulia': 'Colli Orientali del Friuli: Known for exceptional Friulano.',
  'Livorno': 'Val di Cornia: Renowned for Suvereto DOCG wines.',
  'Lazio': 'Produces Frascati and Cesanese with indigenous varieties.',
  'Molise': 'Offers Montepulciano d\'Abruzzo and Trebbiano.',
  'León': 'Cigales: Known for Tempranillo-based wines.',
  'Tarragona': 'Montsant: Produces Grenache and Carignan-based wines.',
  'Galicia': 'Rías Baixas: Known for Albariño wines.'
};

const WineMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [mapData, setMapData] = useState({ france: null, italy: null, spain: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load GeoJSON data on component mount
  useEffect(() => {
    const loadMapData = async () => {
      try {
        // Fetch GeoJSON files for the countries
        const franceResponse = await fetch('/france_microregions.geojson');
        const italyResponse = await fetch('/italy_microregions.geojson');
        const spainResponse = await fetch('/spain_microregions.geojson');

        // Check for successful response
        if (!franceResponse.ok || !italyResponse.ok || !spainResponse.ok) {
          throw new Error('Failed to load GeoJSON files');
        }

        // Parse JSON responses
        const franceData = await franceResponse.json();
        const italyData = await italyResponse.json();
        const spainData = await spainResponse.json();

        setMapData({
          france: franceData,
          italy: italyData,
          spain: spainData
        });
        setLoading(false);
      } catch (err) {
        console.error('Failed to load map data:', err);
        setError('Failed to load wine regions. Please try again later.');
        setLoading(false);
      }
    };

    loadMapData();
  }, []);

  const handleRegionHover = (geo) => {
    const regionName = geo.properties.name;
    if (microregionsData[regionName]) {
      setHoveredRegion(regionName);
    }
  };

  if (loading) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600">Loading wine regions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex items-center justify-center h-64">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="p-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">European Wine Regions</h2>
          
          <div className="relative">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 1000,
                center: [10, 46]
              }}
            >
              {Object.entries(mapData).map(([country, geoData]) => (
                geoData && geoData.features && (
                  <Geographies key={country} geography={geoData}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => handleRegionHover(geo)}
                          onMouseLeave={() => setHoveredRegion(null)}
                          style={{
                            default: {
                              fill: hoveredRegion === geo.properties.name 
                                ? '#F9A825' 
                                : country === 'france' 
                                  ? '#E1BEE7'
                                  : country === 'italy'
                                    ? '#81C784'
                                    : '#FF7043',
                              stroke: '#4A4A4A',
                              strokeWidth: 0.5,
                              outline: 'none'
                            },
                            hover: {
                              fill: '#F9A825',
                              stroke: '#4A4A4A',
                              strokeWidth: 0.75,
                              outline: 'none'
                            }
                          }}
                        />
                      ))
                    }
                  </Geographies>
                )
              ))}
            </ComposableMap>
          </div>

          {hoveredRegion && microregionsData[hoveredRegion] && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">{hoveredRegion}</h3>
              <p className="text-gray-600">{microregionsData[hoveredRegion]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WineMap;

