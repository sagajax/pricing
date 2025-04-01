const CtaSection = () => {
    return (
      <section className="bg-black text-white py-16 px-5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 justify-between">
          <div className="lg:order-1 lg:max-w-[45%]">
            <img 
              src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="" 
              className="w-full object-cover aspect-square"
            />
          </div>
          <div className="py-12 px-5">
            <h5 className="text-lg font-semibold pb-12">Enterprise</h5>
            <h1 className="text-4xl font-semibold max-w-md leading-[3.6rem] mb-5">Custom plans for larger teams</h1>
            <p className="max-w-[380px] mb-10">
              Our premier website solution made for the unique needs of big business.
            </p>
            <div className="w-max bg-white px-6 py-4 text-black font-medium cursor-pointer">
              Learn more
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CtaSection;