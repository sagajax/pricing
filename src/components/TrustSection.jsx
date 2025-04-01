import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';

const TrustSection = () => {
  const logos = [
    "https://a.slack-edge.com/bv1-12/airbnb-logo-4bc1cc0.png",
    "https://a.slack-edge.com/bv1-12/target-logo-66d368d.png",
    "https://a.slack-edge.com/bv1-12/ameritrade-logo-fff7720.png",
    "https://a.slack-edge.com/bv1-12/oracle-logo-859edc3.png",
    "https://a.slack-edge.com/bv1-12/electronic-arts-logo-500c189.png",
    "https://a.slack-edge.com/bv1-12/autodesk-logo-5a91dae.png",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12 sm:space-y-16">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center max-w-3xl mx-auto">
            Thousands of customers use Slack as their productivity platform
          </h2>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 items-center justify-items-center">
            {logos.map((logo, index) => (
              <img 
                key={index}
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="w-32 h-12 object-contain"
              />
            ))}
          </div>

          {/* Testimonial Link */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 text-base sm:text-lg font-medium transition-colors"
            >
              Hear what our customers have to say
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold text-base sm:text-lg transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </button>

            {/* Help Text */}
            <p className="text-base sm:text-lg text-gray-600">
              More questions? Let us help.{' '}
              <a 
                href="#" 
                className="text-blue-800 hover:text-blue-700 transition-colors underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
