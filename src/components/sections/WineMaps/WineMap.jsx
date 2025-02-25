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
  const [mapData, setMapData] = useState({ france: null, italy: null, spain: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

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

  // Style function for GeoJSON
  const getStyle = (feature, country) => {
    const regionName = feature.properties.name;
    const hasData = regionName && microregionsData[regionName];

    // Different base colors for each country
    const baseColor = country === 'france' 
      ? '#E1BEE7'  // Light purple for France
      : country === 'italy' 
        ? '#81C784'  // Light green for Italy
        : '#FF7043';  // Orange for Spain

    return {
      fillColor: hasData ? '#F9A825' : baseColor,  // Highlight regions with data
      weight: 1,
      opacity: 1,
      color: '#666',
      fillOpacity: 0.7
    };
  };

  // Event handlers for GeoJSON
  const onEachFeature = (feature, layer) => {
    const regionName = feature.properties.name;

    if (regionName && microregionsData[regionName]) {
      // Add popup content
      layer.bindTooltip(`<strong>${regionName}</strong>`, {
        permanent: false,
        direction: 'center',
        className: 'wine-region-tooltip'
      });

      // Add event handlers
      layer.on({
        mouseover: () => {
          layer.setStyle({
            fillOpacity: 0.9,
            fillColor: '#F9A825',
            weight: 2
          });
          setHoveredRegion(regionName);
        },
        mouseout: () => {
          layer.setStyle({
            fillOpacity: 0.7,
            weight: 1
          });
          setHoveredRegion(null);
        }
      });
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
    <div className="w-full h-96 bg-white rounded-lg shadow-md">
      {/* Map for each country */}

<ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000 }}>
  {Object.entries(mapData).map(([country, geoData]) => {
    console.log(`Loading map for country: ${country}`);

    // Check if geoData is loaded
    if (!geoData) {
      console.log(`No geoData found for country: ${country}`);
      return null;
    }

    // Log the structure of geoData to ensure it's in the expected format
    console.log(`GeoData for country: ${country}`, geoData);

    // Check if geoData has the expected 'features' property
    if (!geoData.features) {
      console.log(`GeoData for country ${country} does not have 'features' property`);
      return null;
    }

    console.log(`GeoJSON data loaded for country: ${country}, features count: ${geoData.features.length}`);

    return (
      <Geographies key={country} geography={geoData}>
        {({ geographies }) => {
          console.log(`Rendering ${geographies.length} geographies for country: ${country}`);
          
          // Check if geographies is an array and its elements have properties
          geographies.forEach((geo, index) => {
            console.log(`Geo #${index} structure:`, geo);
            if (!geo.properties) {
              console.log(`Warning: Missing properties for geo #${index}`, geo);
            }
          });

          return geographies.map((geo, index) => {
            const regionName = geo.properties ? geo.properties.name : undefined;
            console.log(`Rendering geography #${index} for region: ${regionName}`);

            // Check if regionName is defined
            if (!regionName) {
              console.log(`Warning: Region name is undefined for geo #${index}:`, geo);
            }

            const isHighlighted = regionName && hoveredRegion === regionName;

            return (
              <Geography
                key={`${country}-${geo.properties ? geo.properties.name : 'unknown'}`}  // Unique key for each region
                geography={geo}
                onMouseEnter={() => {
                  console.log(`Mouse entered region: ${regionName}`);
                  setHoveredRegion(regionName);
                }}
                onMouseLeave={() => {
                  console.log(`Mouse left region: ${regionName}`);
                  setHoveredRegion(null);
                }}
                style={{
                  default: {
                    fill: isHighlighted
                      ? '#F9A825'
                      : country === 'france'
                      ? '#E1BEE7'
                      : country === 'italy'
                      ? '#81C784'
                      : '#FF7043',
                    stroke: '#4A4A4A',
                    strokeWidth: 0.5,
                    outline: 'none',
                  },
                  hover: {
                    fill: isHighlighted
                      ? '#F9A825'
                      : country === 'france'
                      ? '#D1A1D7'
                      : country === 'italy'
                      ? '#71B774'
                      : '#EF6033',
                    stroke: '#4A4A4A',
                    strokeWidth: 0.75,
                    outline: 'none',
                  },
                }}
              />
            );
          });
        }}
      </Geographies>
    );
  })}
</ComposableMap>


    </div>
  );
};

export default WineMap;

