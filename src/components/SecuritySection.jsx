import React from 'react';
import { ExternalLink } from 'lucide-react';

const SecuritySection = () => {
  const logos = [
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    "https://a.slack-edge.com/bv1-12/logo_iso-27001-48c5cfb.png",
    "https://a.slack-edge.com/bv1-12/logo_iso-27001-48c5cfb.png",
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Techsnap leads the way in Enterprise security
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto">
            In addition to data encryption in transit and at rest, we operate
            comprehensive compliance and assurance
          </p>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 underline text-blue-800 hover:text-blue-700 text-base sm:text-lg transition-colors"
          >
            Learn how Slack keeps data secure
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-28 justify-items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Certification logo ${index + 1}`}
                className="w-16 h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
