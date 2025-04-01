import { useState } from 'react';
import plusIcon from '../assets/plus.png';
import minusIcon from '../assets/minus.png';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long are your contracts?",
      answer: "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time."
    },
    {
      question: "How long are your contracts?",
      answer: "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time."
    },
    {
      question: "How long are your contracts?",
      answer: "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time."
    },
    {
      question: "How long are your contracts?",
      answer: "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time."
    },
    {
      question: "How long are your contracts?",
      answer: "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time."
    },
    {
      question: "How long are your contracts?",
      answer: "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 justify-between">
        <div className="lg:min-w-[48%]">
          <h1 className="text-[10rem] lg:text-[12rem] font-semibold leading-[13rem]">Q&A</h1>
        </div>
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5 border-t border-gray-500">
              <div 
                className="flex justify-between gap-5 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <img 
                  src={activeIndex === index ? minusIcon : plusIcon} 
                  alt={activeIndex === index ? "Collapse" : "Expand"} 
                  className="w-4 h-4 invert transition-transform duration-300"
                  style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              <div 
                className="mt-2 overflow-hidden transition-all duration-300"
                style={{ maxHeight: activeIndex === index ? '500px' : '0' }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;