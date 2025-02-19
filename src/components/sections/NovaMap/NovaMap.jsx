import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import './NovaMap.css';

const NovaMap = () => {
  // Define the counties we want to show
  const highlightedCounties = [
    "Fauquier",
    "Prince William",
    "Fairfax",
    "Arlington",
    "Loudoun",
    "Clarke",
    "Warren",
    "Rappahannock",
    "Culpeper",
    "Stafford"
  ];

  // DC Marker position
  const dcPosition = { coordinates: [-77.0369, 38.9072], label: "Washington D.C." };

  return (
    <div className="map-container w-full h-96 p-4">
      <h3 className="map-title">Northern Virginia Region</h3>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-77.8, 38.8], // Centered roughly on Fauquier
          scale: 12000
        }}
      >
        <ZoomableGroup>
          <Geographies geography="/va-counties.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = highlightedCounties.includes(geo.properties.NAME);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isHighlighted ? "#495A58" : "#E5E3DC",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none"
                      },
                      hover: {
                        fill: isHighlighted ? "#D4967D" : "#E5E3DC",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
          
          <Marker coordinates={dcPosition.coordinates}>
            <circle r={4} fill="#D4967D" />
            <text
              textAnchor="middle"
              y={-10}
              className="text-xs fill-current text-gray-700"
            >
              {dcPosition.label}
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
      
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "var(--color-sage)" }}></div>
          <span className="legend-label">Selected Counties</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "var(--color-cream)" }}></div>
          <span className="legend-label">Other Counties</span>
        </div>
      </div>
    </div>
  );
};

export default NovaMap;
