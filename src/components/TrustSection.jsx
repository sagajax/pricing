import React from 'react';

const TrustSection = () => {
  const companyLogos = [
    "https://a.slack-edge.com/bv1-12/airbnb-logo-4bc1cc0.png",
    "https://a.slack-edge.com/bv1-12/target-logo-66d368d.png",
    "https://a.slack-edge.com/bv1-12/ameritrade-logo-fff7720.png",
    "https://a.slack-edge.com/bv1-12/oracle-logo-859edc3.png",
    "https://a.slack-edge.com/bv1-12/electronic-arts-logo-500c189.png",
    "https://a.slack-edge.com/bv1-12/autodesk-logo-5a91dae.png"
  ];

  return (
    <section className="py-16 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl max-w-2xl mx-auto mb-16 text-gray-800 leading-relaxed">
          Thousands of customers use Slack as their productivity platform
        </h1>
        
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {companyLogos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt="Trusted company" 
              className="h-8 object-contain"
            />
          ))}
        </div>
        
        <div className="text-green-700 hover:underline mb-16 inline-block cursor-pointer">
          Hear what our customers have to say
        </div>
        
        <a 
          href="#top" 
          className="bg-gray-200 px-12 py-4 mb-12 inline-block text-lg font-semibold rounded hover:bg-gray-300 transition"
        >
          Back to top
        </a>
        
        <p className="text-lg">
          More questions? Let us help. <a href="#" className="text-green-700 hover:underline">Contact us</a>
        </p>
      </div>
    </section>
  );
};

export default TrustSection;