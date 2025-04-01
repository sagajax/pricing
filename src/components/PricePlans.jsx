import React from "react";
import { Check } from "lucide-react";

const PlanCard = ({ title, description, color, features, price, imageUrl }) => (
  <div className="w-full lg:flex-1 bg-white rounded-lg overflow-hidden shadow-lg">
    <div className={`${color} text-white p-6 sm:p-8`}>
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-center pb-8 sm:pb-12">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <img
          src={imageUrl}
          alt={`${title} illustration`}
          className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg"
        />
      </div>
    </div>
    
    <div className="p-6 sm:p-8 bg-white">
      <h2 className="text-green-800 text-xl sm:text-3xl  font-extrabold">₹245.25</h2>
      <p className="text-xs sm:text-xs text-gray-500 mb-8 sm:mb-16">
        per person/month, when billed yearly ₹655 ₹294.75 per person/month when billed monthly
      </p>
      
      <h4 className="font-semibold text-sm sm:text-base mb-2">
        All the benefits of Free, and:
      </h4>
      
      <ul className="mb-8 sm:mb-16 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm">{feature}</p>
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-green-800 text-white text-center py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors">
        Upgrade Now
      </button>
    </div>
  </div>
);

const Plan = () => {
  const plans = [
    {
      title: "Pro",
      description: "More power for small teams who want better collaboration",
      imageUrl:"https://img.freepik.com/free-vector/business-man-dealing-multi-task-new-idea-working-laptop-concept-business-goals-success-satisfying-achievement_1150-39765.jpg?w=740&t=st=1710862050~exp=1710862650~hmac=5379ecc44469b46971e78ef6c11c62d107cf7ebf9b38501b93ed2fc9e7367b92",
      color: "bg-fuchsia-950",
      features: [
        "Unlimited message history",
        "Unlimited lightweight voice hurdles",
        "Secure work with other companies using Slack Connect channels",
        "Unlimited canvases with 30 days of version history and advanced user roles",
        "Unlimited apps and workflows",
      ]
    },
    {
      title: "Business+",
      description: "More power for small teams who want better collaboration",
      imageUrl:"https://img.freepik.com/free-vector/flat-design-finance-leaders-concept_23-2149154574.jpg?t=st=1710862050~exp=1710862650~hmac=7b3b97d918de0526a5616e2e366fb22cde1420b0b3ff0248db9b7bd87cd9e49a",
      color: "bg-[#0b4c8c]",
      features: [
        "Unlimited message history",
        "Unlimited lightweight voice hurdles",
        "Secure work with other companies using Slack Connect channels",
        "Unlimited canvases with 30 days of version history and advanced user roles",
        "Unlimited apps and workflows",
      ]
    },
    {
      title: "Enterprise Grid",
      description: "More power for small teams who want better collaboration",
      imageUrl:"https://img.freepik.com/free-vector/steal-data-concept_23-2148540050.jpg?size=626&ext=jpg",
      color: "bg-[#072542]",
      features: [
        "Unlimited message history",
        "Unlimited lightweight voice hurdles",
        "Secure work with other companies using Slack Connect channels",
        "Unlimited canvases with 30 days of version history and advanced user roles",
        "Unlimited apps and workflows",
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;