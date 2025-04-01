const RateSection = () => {
    const stats = [
      {
        value: "180+",
        description: "Countries using the DataCamp platform"
      },
      {
        value: "4.0+ ⭐⭐⭐⭐",
        description: "Trusted by more than 13 million learners"
      },
      {
        value: "80%",
        description: "of the Fortune 1000 use DataCamp"
      }
    ];
  
    return (
      <section className="py-20 px-5 bg-[#05192d] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around gap-5">
          {stats.map((stat, index) => (
            <div key={index} className="max-w-xs">
              <h2 className="text-3xl font-semibold">{stat.value}</h2>
              <h4 className="text-xl font-medium">{stat.description}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default RateSection;