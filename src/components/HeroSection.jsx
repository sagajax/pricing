const HeroSection = ({ isYearly, setIsYearly }) => {
    return (
      <section className="py-40 px-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold text-center text-black">Beautiful websites</h1>
          <h1 className="text-4xl font-semibold text-center text-gray-400">Free for 14 days</h1>
          <div 
            className="flex gap-6 justify-center mt-12 cursor-pointer"
            onClick={() => setIsYearly(!isYearly)}
          >
            <p className={`text-lg font-medium flex items-center ${isYearly ? 'font-bold' : ''}`}>Pay annually</p>
            <div className="w-16 bg-gray-500 h-10 rounded-full flex items-center p-1 relative">
              <div 
                className="w-8 h-8 bg-white rounded-full absolute transition-all duration-300" 
                style={{ left: isYearly ? '4px' : '34px' }}
              ></div>
            </div>
            <p className={`text-lg font-medium flex items-center ${!isYearly ? 'font-bold' : ''}`}>Pay monthly</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;