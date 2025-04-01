import appDevelopmentIcon from '../assets/app-development.png';
import nextIcon from '../assets/next.png';

const PlanSection = ({ isYearly }) => {
  const scrollToPricingTable = () => {
    const element = document.getElementById('pricing-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const monthlyPrices = ["$23", "$28", "$32", "$35"];
  const yearlyPrices = ["$18", "$23", "$27", "$30"];

  const plans = [
    {
      title: "Personal",
      description: "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*"
      ]
    },
    {
      title: "Business",
      description: "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*"
      ]
    },
    {
      title: "Commerce Basic",
      description: "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*"
      ]
    },
    {
      title: "Commerce Advanced",
      description: "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*"
      ]
    }
  ];

  return (
    <section className="py-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {plans.map((plan, index) => (
            <div key={index} className="shadow-lg p-8 min-w-[22%] flex-1">
              <h5 className="text-base font-semibold pt-2 pb-4">{plan.title}</h5>
              <h2 className="text-base font-semibold">
                <span className="text-3xl">
                  {isYearly ? yearlyPrices[index] : monthlyPrices[index]}
                </span>/mo
              </h2>
              <p className="text-blue-600 mt-[-0.5rem] mb-8">Save 30% annually</p>
              <p className="text-sm mb-2 leading-6">{plan.description}</p>
              <div className="bg-black text-white h-12 mt-2 flex items-center justify-center mb-6 cursor-pointer">
                START FREE TRIAL
              </div>
              <p className="text-xs font-semibold text-gray-500 mb-1">PRODUCTS</p>
              <div className="flex flex-col">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-gray-300">
                    <div className="flex gap-8 items-center">
                      <img src={appDevelopmentIcon} alt="" className="w-5 h-5" />
                      <h4 className="text-gray-800 font-medium">{feature}</h4>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" title="Info icon">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="#A2A2A2"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z" fill="#A2A2A2"></path>
                      <path d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z" fill="#A2A2A2"></path>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={scrollToPricingTable}
          className="hidden lg:flex gap-5 items-center justify-center mt-6 cursor-pointer mx-auto"
        >
          <p className="font-medium text-black hover:underline">Compare features</p>
          <img src={nextIcon} alt="" className="w-4 h-4 rotate-90" />
        </button>
      </div>
    </section>
  );
};

export default PlanSection;