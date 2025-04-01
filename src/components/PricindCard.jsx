const PricingCard = ({ title, bgColor, description, price, priceDescription }) => {
    return (
      <div className="max-w-[31%] rounded-xl overflow-hidden flex-1 min-w-[300px] my-5">
        <div className={`${bgColor} text-white p-8 flex justify-between gap-5 min-h-[220px]`}>
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm mt-2">{description}</p>
          </div>
          <img 
            src="https://img.freepik.com/free-vector/business-man-dealing-multi-task-new-idea-working-laptop-concept-business-goals-success-satisfying-achievement_1150-39765.jpg?w=740&t=st=1710862050~exp=1710862650~hmac=5379ecc44469b46971e78ef6c11c62d107cf7ebf9b38501b93ed2fc9e7367b92" 
            alt={title}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
        <div className="bg-white p-8">
          <h2 className="text-green-600 text-2xl font-semibold">{price}</h2>
          <p className="text-xs text-gray-600 mb-16">{priceDescription}</p>
          
          <h4 className="font-semibold mb-2">All the benefits of Free, and:</h4>
          <ul className="mb-16">
            {[
              "Unlimited message history",
              "Unlimited lightweight voice hurdles",
              "Secure work with other companies using Slack Connect channels",
              "Unlimited canvases with 30 days of version history and advanced user roles",
              "Unlimited apps and workflows"
            ].map((feature, index) => (
              <li key={index} className="flex gap-2 mb-1 items-start">
                <img src="/assets/checkmark.png" alt="" className="w-4 h-4 mt-0.5" />
                <p className="text-sm">{feature}</p>
              </li>
            ))}
          </ul>
          
          <div className="bg-green-700 text-white text-center py-4 rounded text-lg font-semibold cursor-pointer hover:bg-green-800 transition">
            Upgrade Now
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingCard;