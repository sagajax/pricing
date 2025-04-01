import React from 'react';
import { Check } from 'lucide-react';
import checklist from '../assets/checklist.png';
const RecapSection = () => {
  const features = [
    {
      title: "Channel recaps",
      description: "get key highlights in any channel and cut straight to what's most important"
    },
    {
      title: "Summarize long threads",
      description: "quickly catch up on long conversations in one click"
    },
    {
      title: "AI-powered search",
      description: "ask a question and get clear, concise answers in real-time"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4  sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl bg-[#EEE4D5] p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            {/* Content Column */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Work smarter with Slack AI
                </h2>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">
                  Empower everyone with trusted AI, where work already happens.
                </p>
              </div>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <img
                      src={checklist}
                      alt="Check"
                      className="w-6 h-6 text-green-600"
                      style={{
                        mixBlendMode: 'multiply',
                      }}
                    />
                    
                    <p className="text-sm sm:text-base">
                      <span className="font-semibold">{feature.title}:</span>{' '}
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>

              <button className="inline-flex px-6 py-3 bg-green-800 hover:bg-green-700 text-white text-sm sm:text-base font-semibold rounded-md transition-colors">
                Contact Sales
              </button>
            </div>

            {/* Image Column */}
            <div className="flex-1 lg:max-w-sm">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full rounded-lg overflow-hidden">
                <img
                  src="https://img.freepik.com/free-vector/financial-insurance-guarantees-protection-your-money-gold_1150-52744.jpg" 
                  alt=""
                  style={{
                    width: '100%',
                    mixBlendMode: 'multiply',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecapSection;
