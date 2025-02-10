import './index.css';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import TopBar from './components/TopBar';

const Section: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, title, children }) => (
  <section id={id} className="min-h-screen pt-24 pb-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-pinyon text-copper mb-8">{title}</h2>
      <div className="prose prose-lg max-w-none text-charcoal">
        {children}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <TopBar />
      
      <Section id="executive-summary" title="Executive Summary">
        <p>
          Maple Row Estate presents a distinctive investment opportunity in Northern Virginia's luxury agricultural 
          and hospitality market. Located in affluent Fauquier County, VA, near Washington D.C.'s high-net-worth 
          population, the estate combines premium alcohol production, high-end equestrian services, and exclusive 
          member experiences into a cohesive, profitable enterprise.
        </p>
        {/* Rest of executive summary content... */}
      </Section>

      <Section id="introduction" title="Overview">
        <p>Maple Row Estate is a luxury agricultural and hospitality enterprise...</p>
      </Section>

      <Section id="problem" title="Problem">
        <p>The luxury market lacks integrated agricultural experiences...</p>
      </Section>

      <Section id="solution" title="Solution">
        <p>Our estate offers a unique combination of services and experiences...</p>
      </Section>

      <Section id="market" title="Market Opportunity">
        <p>The Northern Virginia luxury market presents significant opportunities...</p>
      </Section>

      <Section id="business" title="Business Model">
        <p>Our revenue streams include premium alcohol production, equestrian services...</p>
      </Section>

      <Section id="traction" title="Traction">
        <p>Current progress and achievements demonstrate our market potential...</p>
      </Section>

      <Section id="strategy" title="Go-to-Market Strategy">
        <p>Our comprehensive marketing and growth strategy includes...</p>
      </Section>

      <Section id="competition" title="Competitive Landscape">
        <p>Analysis of current market players and our unique positioning...</p>
      </Section>

      <Section id="financials" title="Financial Projections">
        <p>Detailed financial forecasts and key metrics...</p>
      </Section>

      <Section id="team" title="Team">
        <p>Our experienced leadership team brings together expertise in...</p>
      </Section>

      <Section id="funding" title="Funding Ask">
        <p>Investment requirements and use of funds...</p>
      </Section>

      <Section id="vision" title="Vision">
        <p>Our long-term vision for Maple Row Estate...</p>
      </Section>
    </div>
  );
};

// Hydrate the app
const root = document.getElementById('root');
if (root) {
  hydrateRoot(root, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
