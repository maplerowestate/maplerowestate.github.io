import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

// Import EB Garamond font
const loadFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const BusinessModel = () => {
  // Load the font when component mounts
  useEffect(() => {
    loadFont();
  }, []);

  const [selectedView, setSelectedView] = useState('Aggregate');
  const [selectedYear, setSelectedYear] = useState('All');

  // Revenue data from business plan
  const businessComponents = [
    {
      name: 'Honey Mead',
      description: 'Premium craft mead production with traditional methods, targeting luxury markets.',
      margins: '70%',
      cost_structure: 'Quality-based, per-unit',
      scalability: 'Moderate, limited by manufacturing and distribution',
      customer_acquisition: 'Reputation, direct',
      year1: 0,
      year2: 90000,
      year3: 208000,
      year3plus: 256000
    },
    {
      name: 'Honey Mead Brandy',
      description: 'Exclusive distillation and aging process creating unique, high-value spirits.',
      margins: '82%',
      cost_structure: 'Quality-based, per-unit',
      scalability: 'Moderate, limited by manufacturing and distribution',
      customer_acquisition: 'Reputation, direct',
      year1: 0,
      year2: 123000,
      year3: 292000,
      year3plus: 460000
    },
    {
      name: 'Premium Alfalfa Hay',
      description: 'High-quality cultivation for agricultural excellence and equestrian markets.',
      margins: '45%',
      cost_structure: 'Quality-based, per-unit',
      scalability: 'Moderate, limited by market saturation and weather',
      customer_acquisition: 'Reputation',
      year1: 144000,
      year2: 192000,
      year3: 268000,
      year3plus: 268000
    },
    {
      name: 'Private Club Membership',
      description: 'Exclusive access and personalized experiences for affluent clientele.',
      margins: '68%',
      cost_structure: 'Quality-based, per-unit',
      scalability: 'Moderate, self-imposed limitations',
      customer_acquisition: 'Reputation',
      year1: 57000,
      year2: 403000,
      year3: 787000,
      year3plus: 1171000
    },
    {
      name: 'Private Alcohol Sales',
      description: 'Curated selection for discerning clients through specialized channels.',
      margins: '55%',
      cost_structure: 'Quality-based, per-unit',
      scalability: 'High, limited by selection',
      customer_acquisition: 'Reputation, direct',
      year1: 30000,
      year2: 90000,
      year3: 100000,
      year3plus: 120000
    },
    {
      name: 'Horse Boarding Services',
      description: 'Comprehensive equestrian services and facilities for premium clients.',
      margins: '52%',
      cost_structure: 'Quality-based, per-unit',
      scalability: 'Moderate, limited by space',
      customer_acquisition: 'Reputation, online, direct',
      year1: 134000,
      year2: 296000,
      year3: 384000,
      year3plus: 400000
    },
    {
      name: 'Social Media',
      description: 'Engaging content and community building to support brand development.',
      margins: '74%',
      cost_structure: 'No cost to customer',
      scalability: 'Low, limited by followers',
      customer_acquisition: 'Social media mechanisms',
      year1: 18000,
      year2: 30000,
      year3: 87000,
      year3plus: 87000
    },
    {
      name: 'Franchise Contracts',
      description: 'Future expansion and growth potential through strategic partnerships.',
      margins: '80%',
      cost_structure: 'Per-contract',
      scalability: 'High, limited by establishments',
      customer_acquisition: 'Direct',
      year1: 0,
      year2: 0,
      year3: 0,
      year3plus: 100000
    }
  ];

  // Sort components by year3plus revenue (lowest to highest for stacking)
  const sortedComponentsByRevenue = [...businessComponents].sort((a, b) => a.year3plus - b.year3plus);

  // Calculate aggregate totals for each year
  const aggregate = {
    name: 'Aggregate',
    description: 'Combined revenue across all business components.',
    margins: '65%',
    cost_structure: 'Select a component',
    scalability: 'Select a component',
    customer_acquisition: 'Select a component',
    year1: businessComponents.reduce((sum, component) => sum + component.year1, 0),
    year2: businessComponents.reduce((sum, component) => sum + component.year2, 0),
    year3: businessComponents.reduce((sum, component) => sum + component.year3, 0),
    year3plus: businessComponents.reduce((sum, component) => sum + component.year3plus, 0),
  };

  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Define color mapping for components
  const colors = {
    'Honey Mead': '#FFA726',
    'Honey Mead Brandy': '#EF5350',
    'Premium Alfalfa Hay': '#66BB6A',
    'Private Club Membership': '#42A5F5',
    'Private Alcohol Sales': '#AB47BC',
    'Horse Boarding Services': '#8D6E63',
    'Social Media': '#26A69A',
    'Franchise Contracts': '#EC407A',
  };

  // Prepare dataset for charts
  const dataset = [
    { year: 'Year 1', ...businessComponents.reduce((acc, comp) => ({ ...acc, [comp.name]: comp.year1 }), {}) },
    { year: 'Year 2', ...businessComponents.reduce((acc, comp) => ({ ...acc, [comp.name]: comp.year2 }), {}) },
    { year: 'Year 3', ...businessComponents.reduce((acc, comp) => ({ ...acc, [comp.name]: comp.year3 }), {}) },
    { year: 'Year 3+', ...businessComponents.reduce((acc, comp) => ({ ...acc, [comp.name]: comp.year3plus }), {}) }
  ];

  // Define stacking strategy for area charts
  const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none',
    showMark: false,
  };

  // Chart customization
  const chartCustomize = {
    height: 500,
    margin: { top: 100, right: 40, bottom: 30, left: 80 },
    sx: {
      '& .MuiLineElement-root': {
        strokeWidth: 2,
      },
    },
    grid: { horizontal: true },
  };

  // Prepare data for single component view
  const getSingleComponentData = (componentName) => {
    const component = businessComponents.find(comp => comp.name === componentName);
    return [
      { year: 'Year 1', value: component.year1 },
      { year: 'Year 2', value: component.year2 },
      { year: 'Year 3', value: component.year3 },
      { year: 'Year 3+', value: component.year3plus }
    ];
  };

  // Prepare data for year-specific view
  const getYearSpecificData = () => {
    const yearKey = selectedYear === 'Year 1' ? 'year1' : 
                    selectedYear === 'Year 2' ? 'year2' : 
                    selectedYear === 'Year 3' ? 'year3' : 'year3plus';
    
    return businessComponents
      .map(comp => ({
        name: comp.name,
        value: comp[yearKey]
      }))
      .sort((a, b) => a.value - b.value); // Sort lowest to highest
  };

  // Get selected component details
  const getSelectedComponentDetails = () => {
    if (selectedView === 'Aggregate') {
      return aggregate;
    }
    return businessComponents.find(comp => comp.name === selectedView);
  };

  const selectedComponent = getSelectedComponentDetails();

  // RapidCounter component for animated number display
  const RapidCounter = ({ targetValue, speed = 50 }) => {
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
      <span>{formatCurrency(currentValue)}</span>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Revenue Metrics</h3>
        
        <div className="mb-6">
          <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} className="my-8" />
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setSelectedView('Aggregate')}
              className={`px-4 py-2 rounded-lg transition-colors font-serif ${
                selectedView === 'Aggregate'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              Aggregate
            </button>
            {businessComponents.map((component) => (
              <button
                key={component.name}
                onClick={() => setSelectedView(component.name)}
                className={`px-4 py-2 rounded-lg transition-colors font-serif ${
                  selectedView === component.name
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {component.name}
              </button>
            ))}
          </div>
          <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} className="my-8" />
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setSelectedYear('All')}
              className={`px-4 py-2 rounded-lg transition-colors font-serif ${
                selectedYear === 'All'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              All Years
            </button>
            {['Year 1', 'Year 2', 'Year 3', 'Year 3+'].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg transition-colors font-serif ${
                  selectedYear === year
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} className="my-8" />
        </div>

        {/* Left side: Charts */}
        <div className="bg-gray-50 p-6 rounded-lg m-10">
          <h4 className="text-lg font-semibold mb-4">Revenue Projection</h4>
          
          {selectedView === 'Aggregate' && selectedYear === 'All' ? (
            // Stacked area chart for aggregate view with all components
            <LineChart
              xAxis={[{
                dataKey: 'year',
                scaleType: 'band',
              }]}
              series={sortedComponentsByRevenue.map(component => ({
                dataKey: component.name,
                label: component.name,
                color: colors[component.name],
                ...stackStrategy,
              }))}
              dataset={dataset}
              slotProps={{
                legend: {
                  position: {
                    vertical: 'top',
                    horizontal: 'middle',
                  },
                }
              }}
              {...chartCustomize}
            />
          ) : selectedView !== 'Aggregate' && selectedYear === 'All' ? (
            // Single component view across all years
            <LineChart
              xAxis={[{
                dataKey: 'year',
                scaleType: 'band',
              }]}
              series={[{
                dataKey: 'value',
                label: selectedView,
                color: colors[selectedView] || '#4B5563',
                area: true,
                showMark: false,
              }]}
              dataset={getSingleComponentData(selectedView)}
              {...chartCustomize}
            />
          ) : selectedYear !== 'All' && selectedView === 'Aggregate' ? (
            // Year-specific view comparing all components
            <BarChart
              layout="horizontal"
              xAxis={[{ scaleType: 'linear' }]}
              yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
              series={[{ 
                dataKey: 'value',
                color: selectedYear === 'Year 1' ? '#4B5563' : 
                       selectedYear === 'Year 2' ? '#059669' : 
                       selectedYear === 'Year 3' ? '#2563EB' : '#7C3AED',
                label: `${selectedYear} Revenue`
              }]}
              dataset={getYearSpecificData()}
              height={400}
              margin={{ top: 10, right: 30, bottom: 30, left: 160 }}
              grid={{ vertical: true }}
            />
          ) : (
            // Individual component for specific year
            <div className="flex items-center justify-center h-64">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">{`${selectedYear} - ${selectedView}`}</p>
                <p className="text-2xl font-semibold text-center mt-4">
                  <RapidCounter 
                    targetValue={
                      selectedYear === 'Year 1' ? selectedComponent.year1 :
                      selectedYear === 'Year 2' ? selectedComponent.year2 :
                      selectedYear === 'Year 3' ? selectedComponent.year3 :
                      selectedComponent.year3plus
                    } 
                  />
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Right side: Component details and metrics */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">{selectedComponent.name}</h4>
            <p className="text-gray-600 mb-6">{selectedComponent.description}</p>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Year 1
                    </h3>
                  </th>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Year 2
                    </h3>
                  </th>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Year 3
                    </h3>
                  </th>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Year 3+
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <RapidCounter targetValue={selectedComponent.year1} />
                    </div>
                  </td>
                   <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <RapidCounter targetValue={selectedComponent.year2} />
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <RapidCounter targetValue={selectedComponent.year3} />
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <RapidCounter targetValue={selectedComponent.year3plus} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <table>
              <thead>
                <tr>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Profit Margins
                    </h3>
                  </th>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Cost Structure
                    </h3>
                  </th>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Scalability
                    </h3>
                  </th>
                  <th className="p-4 text-center font-normal" style={{ width: '400px' }}>
                    <h3 className="text-lg text-gray-600">
                      Customer Acquisition
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-xl font-semibold">{selectedComponent.margins}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <p className="text-xl font-semibold">{selectedComponent.cost_structure}</p>
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <p className="text-xl font-semibold">{selectedComponent.scalability}</p>
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle w-1/4">
                    <div className="flex flex-col items-center justify-center w-full">
                      <p className="text-xl font-semibold">{selectedComponent.customer_acquisition}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <hr style={{ marginTop: '4rem', marginBottom: '4rem' }} className="my-8" />
          
        </div>
        
      </div>

    </div>
  );
};

export default BusinessModel;
