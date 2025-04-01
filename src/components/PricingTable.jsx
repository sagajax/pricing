import React from "react";

const PricingTable = () => {
  const tableData = [
    {
      section: "Start learning",
      features: [
        { name: "First chapter of every course", basic: "Included", premium: "Included", teams: "Included", enterprise: "Included" },
        { name: "Access to the full course library (470+)", basic: "Not included", premium: "Unlimited", teams: "Unlimited", enterprise: "Unlimited and bespoke" },
        { name: "All cheat sheets", basic: "Included", premium: "Included", teams: "Included", enterprise: "Included" },
        { name: "All tutorials", basic: "Included", premium: "Included", teams: "Included", enterprise: "Included" },
        { name: "Personalized and adaptive learning paths", basic: "Not included", premium: "Coming soon", teams: "Coming soon", enterprise: "Included" },
        { name: "Learn on mobile", basic: "Included", premium: "Unlimited", teams: "Unlimited", enterprise: "Unlimited" },
      ]
    },
    {
      section: "Demonstrate your skills",
      features: [
        { name: "Skill assessments to discover your level", basic: "Included", premium: "Included", teams: "Included", enterprise: "Included" },
        { name: "Earn certificates", basic: "Not included", premium: "Included", teams: "Included", enterprise: "Included" },
        { name: "Employment-ready programs", basic: "Not included", premium: "Included", teams: "Included", enterprise: "Included" },
      ]
    },
    // Add more sections as needed from the original HTML
  ];

  const Checkmark = () => (
    <svg viewBox="0 0 18 18" aria-hidden="true" height="16" role="img" width="16" className="ml-1 inline">
      <path fill="currentColor" d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z" fillRule="evenodd"></path>
    </svg>
  );

  return (
    <section id="pricing-table" className="bg-[#fffbf3] relative hidden lg:block">
      <div className="w-full max-w-6xl mx-auto py-24 px-5">
        <table className="w-full">
          <thead className="sticky top-0 z-20 bg-[#fffbf3] shadow-xs ">
            <tr>
              <th className="text-left align-bottom w-[290px]">Start learning</th>
              <th className="border-l-2 border-t-2 border-[#848c92] border-t-[#848c92] rounded-tl">
                <div className="flex flex-col justify-center min-h-[84px] mb-2">
                  Basic <strong className="font-normal block">Free</strong>
                </div>
                <div className="px-5">
                  <a href="#" className="inline-flex items-center justify-center h-9 min-w-9 w-full border-2 border-transparent rounded text-[#05192d] font-extrabold border-[rgba(48,57,105,0.6)]">
                    <span className="flex items-center h-full gap-2">Get Started</span>
                  </a>
                </div>
              </th>
              <th className="bg-[#f7f3eb] border-t-2 border-[#848c92] relative">
                <div className="flex justify-center absolute left-0 right-0 top-[-24px] z-10">
                  <strong className="text-xs font-bold uppercase tracking-wider bg-[#03ef62] rounded px-2 py-1 relative z-20">Most Popular</strong>
                </div>
                <div className="flex flex-col justify-center min-h-[84px] mb-2">
                  Premium
                  <strong className="font-normal flex items-end flex-wrap justify-center">
                    <span>$29 /month</span>
                  </strong>
                </div>
                <div className="px-5">
                  <a href="#" className="inline-flex items-center justify-center h-9 min-w-9 w-full border-2 border-transparent rounded bg-[#03ef62] text-[#05192d] font-extrabold">
                    <span className="flex items-center h-full gap-2">Subscribe Now</span>
                  </a>
                </div>
              </th>
              <th className="border-t-2 border-[#848c92] relative">
                <div className="flex justify-center absolute left-0 right-0 top-[-12px] z-10">
                  <strong className="text-xs font-bold uppercase tracking-wider bg-[#d9d9e2] rounded px-2 py-1 relative z-20">Special Price</strong>
                </div>
                <div className="flex flex-col justify-center min-h-[84px] mb-2">
                  Teams
                  <strong className="font-normal flex items-end flex-wrap justify-center">
                    <span>$12.42 per user /month <br />billed annually</span>
                  </strong>
                </div>
                <div className="px-5">
                  <a href="#" className="inline-flex items-center justify-center h-9 min-w-9 w-full border-2 border-transparent rounded text-[#05192d] font-extrabold border-[rgba(48,57,105,0.6)]">
                    <span className="flex items-center h-full gap-2">Set Up a Team</span>
                  </a>
                </div>
              </th>
              <th className="border-l-2 border-r-2 border-t-2 border-[#848c92] rounded-tr">
                <div className="flex flex-col justify-center min-h-[84px] mb-2">
                  Enterprise<strong className="font-normal block">Contact sales for pricing</strong>
                </div>
                <div className="px-5">
                  <a href="#" className="inline-flex items-center justify-center h-9 min-w-9 w-full border-2 border-transparent rounded text-[#05192d] font-extrabold border-[rgba(48,57,105,0.6)]">
                    <span className="flex items-center h-full gap-2">Request a Demo</span>
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                <tr className="section-divider">
                  <td className="section-title font-semibold relative pt-6 pb-3">
                    {section.section}
                    <div className="absolute bottom-0 left-0 w-[266px] border-b-2 border-[#2c2c2c]"></div>
                  </td>
                  <td className="border-b-2 border-dashed border-[#848c92]"></td>
                  <td className="border-b-2 border-dashed border-[#848c92]"></td>
                  <td className="border-b-2 border-dashed border-[#848c92]"></td>
                  <td className="border-b-2 border-dashed border-[#848c92]"></td>
                </tr>
                
                {section.features.map((feature, featureIndex) => (
                  <tr key={featureIndex}>
                    <td className="py-1.5 pl-0 pr-6">{feature.name}</td>
                    <td className="text-center py-1.5 border-l-2 border-[#848c92]">
                      {feature.basic === "Included" ? (
                        <span>Included <Checkmark /></span>
                      ) : feature.basic}
                    </td>
                    <td className="text-center py-1.5 bg-[#f7f3eb]">
                      {feature.premium === "Included" ? (
                        <span>Included <Checkmark /></span>
                      ) : feature.premium}
                    </td>
                    <td className="text-center py-1.5">
                      {feature.teams === "Included" ? (
                        <span>Included <Checkmark /></span>
                      ) : feature.teams}
                    </td>
                    <td className="text-center py-1.5 border-l-2 border-r-2 border-[#848c92]">
                      {feature.enterprise === "Included" ? (
                        <span>Included <Checkmark /></span>
                      ) : feature.enterprise}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="absolute left-0 right-0 bottom-[-83px] flex justify-center overflow-hidden pointer-events-none">
        <svg height="164" width="110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="translate-x-[-600px]">
          <g fill="none" fillRule="evenodd" transform="rotate(90 55 55)">
            <circle cx="109.03" cy="54.59" fill="#974dff" r="54.59"></circle>
            <circle cx="54.59" cy="54.59" fill="#ff6ea9" r="54.59"></circle>
            <path d="M81.81 7.26a54.59 54.59 0 0 1 0 94.67 54.57 54.57 0 0 1-27.38-47.34A54.57 54.57 0 0 1 81.71 7.31z" fill="#05172c"></path>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default PricingTable;