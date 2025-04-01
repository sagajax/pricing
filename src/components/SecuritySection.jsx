import React from 'react';

const SecuritySection = () => {
  const logos = [
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    "https://a.slack-edge.com/bv1-12/logo_iso-27001-48c5cfb.png",
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    "https://a.slack-edge.com/bv1-12/logo_iso-27001-48c5cfb.png",
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png"
  ];

  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
          Techsnap leads the way in Enterprise security
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-4">
          In addition to data encryption in transit and at rest, we operate comprehensive compliance and assurance
        </p>
        <a href="#" className="text-green-700 hover:underline mb-16 inline-block">
          Learn how Slack keeps data secure
        </a>
        
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt="Security certification" 
              className="w-12 h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;