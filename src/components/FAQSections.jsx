import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does the 55% discount for teams in India work?",
      answer: "This offer is for Slack teams that are based in India and have most of their users located there. Teams that upgrade to or are already on the Pro or Business+ plan will get the discounted rate for at least one year, and can add new members at the lower rate during that time. If teams are eligible for or already have other discounts, we'll apply only the largest single discount to their subscription. While we may offer discounted rates for longer than a year, Slack reserves the right to stop offering this promotion at any time after the initial one year subscription."
    },
    {
      question: "Can I upgrade Slack just for myself, instead of upgrading everyone in our workspace?",
      answer: "Unfortunately, no. Slack is built for teams, so you'll get the most out of paid slack when you all use it together. To upgrade Slack, you'll need to upgrade your entire workspace at once."
    },
    {
      question: "What are my payment options? Can I pay by credit card? Can you invoice me?",
      answer: "You can use your credit card for any plan, and can now pay in Indian rupees (as well as other local currencies around the globe). If you sign up for an annual subscription and plan to spend at least $5,000 (USD), we can invoice you annually in select currencies (GBP, EUR, JPY or USD). Visit the help center or contact us to start the process."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-center mb-16">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div 
                className="flex justify-between items-center cursor-pointer py-3"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-lg md:text-xl font-medium">{faq.question}</p>
                <img 
                  src={activeIndex === index ? "/assets/minus.png" : "/assets/plus.png"} 
                  alt={activeIndex === index ? "Collapse" : "Expand"} 
                  className="w-4 h-4 transition-transform"
                  style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              {activeIndex === index && (
                <div className="text-gray-600 pb-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;