import { useState } from 'react';
import HeroSection from './components/HeroSection';
import PlanSection from './components/PlanSection';
import RateSection from './components/RateSection';
import PricingTable from './components/PricingTable';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import PricingHeader from './components/PricingHeader';
import PricePlans from './components/PricePlans';
import RecapSection from './components/RecapSection';
import CompareTable from './components/CompareTable';
import FAQSection from './components/FAQSections';
import SecuritySection from './components/SecuritySection';
import TrustSection from './components/TrustSection';

function App() {
  const [isYearly, setIsYearly] = useState(true);
  const [priceType, setPriceType] = useState("");

  const handlePriceTypeChange = (e) => {
    setPriceType(e.target.value);
  };

  return (
    <div className="font-sans">
      {priceType === "" && (
        <>
          <h1 className="text-center mt-20">Select which pricing to show</h1>
          <div className="w-full bg-amber-50 p-8 flex justify-center mt-10">
            <select 
              value={priceType} 
              onChange={handlePriceTypeChange}
              className="p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="price1">Price 1</option>
              <option value="price2">Price 2</option>
            </select>
          </div>
        </>
      )}
      {priceType === "price1" && (
        <>
          <HeroSection isYearly={isYearly} setIsYearly={setIsYearly} />
          <PlanSection isYearly={isYearly} />
          <RateSection />
          <PricingTable />
          <CtaSection />
          <FaqSection />
        </>
      )}
      {priceType === "price2" && (
        <>
          <PricingHeader />
          <PricePlans />
          <RecapSection />
          <CompareTable />
          <FAQSection />
          <SecuritySection />
          <TrustSection />
        </>
      )}
    </div>
  );
}

export default App;