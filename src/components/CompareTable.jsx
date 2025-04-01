import React from 'react';

const CompareTable = () => {
  const tableData = [
    {
      category: "Productivity & collaboration",
      features: [
        { name: "Message and file history", free: "90-day access", pro: true, business: true, enterprise: true },
        { name: "Slack huddles", free: "One-on-one only", pro: true, business: true, enterprise: true },
        { name: "Audio and video clips", free: true, pro: true, business: true, enterprise: true },
        { name: "Work with external people", free: "One-on-one only", pro: true, business: true, enterprise: true },
        { name: "Slack canvases", free: "Channels and DMs only", pro: true, business: true, enterprise: true },
        { name: "Custom templates", free: false, pro: false, business: false, enterprise: true },
        { name: "Customizable sections", free: false, pro: true, business: true, enterprise: true },
        { name: "Slack Atlas", free: false, pro: false, business: "Add-on", enterprise: true },
        { name: "Slack AI", free: false, pro: false, business: false, enterprise: "Add-on" }
      ]
    },
    {
      category: "Automation tools",
      features: [
        { name: "Integrations with other apps", free: "10", pro: true, business: true, enterprise: true },
        { name: "Workflow Builder", free: false, pro: true, business: true, enterprise: true },
        { name: "Custom workflow steps", free: false, pro: true, business: true, enterprise: true },
        { name: "Deploy apps to Slack infrastructure", free: false, pro: true, business: true, enterprise: true }
      ]
    },
    // ... (other categories would follow the same pattern)
  ];

  const renderCellContent = (value) => {
    if (value === true) {
      return <img src="/assets/checkmark.png" alt="Included" className="inline-block w-5 h-5" />;
    }
    if (value === false) {
      return null;
    }
    return value;
  };

  return (
    <div className="py-12 px-5 hidden lg:block">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12">Compare features across plans</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-center text-gray-800">
            <thead className="sticky top-0 bg-white shadow">
              <tr>
                <th className="p-4"></th>
                <th className="p-4 bg-gray-50 w-1/5 min-w-[170px]">
                  Free
                  <div className="mt-2">
                    <div className="bg-gray-200 text-gray-600 rounded px-3 py-2 inline-block text-sm font-semibold">
                      Current plan
                    </div>
                  </div>
                </th>
                <th className="p-4 bg-gray-50 w-1/5 min-w-[170px]">
                  Pro
                  <div className="mt-2">
                    <button className="bg-green-700 text-white rounded px-3 py-2 text-sm font-semibold hover:bg-green-800 transition">
                      Upgrade Now
                    </button>
                  </div>
                </th>
                <th className="p-4 bg-gray-50 w-1/5 min-w-[170px]">
                  Business+
                  <div className="mt-2">
                    <button className="bg-green-700 text-white rounded px-3 py-2 text-sm font-semibold hover:bg-green-800 transition">
                      Upgrade Now
                    </button>
                  </div>
                </th>
                <th className="p-4 bg-gray-50 w-1/5 min-w-[170px]">
                  Enterprise Grid
                  <div className="mt-2">
                    <a href="#" className="border border-green-700 text-green-700 rounded px-3 py-2 text-sm font-semibold hover:bg-green-50 transition inline-block">
                      Contact Sales
                    </a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((category, catIndex) => (
                <React.Fragment key={catIndex}>
                  <tr className="border-t border-b border-gray-200">
                    <td className="p-4 font-bold text-left">{category.category}</td>
                    <td className="p-4 bg-gray-50"></td>
                    <td className="p-4 bg-gray-50"></td>
                    <td className="p-4 bg-gray-50"></td>
                    <td className="p-4 bg-gray-50"></td>
                  </tr>
                  {category.features.map((feature, featIndex) => (
                    <tr key={featIndex} className="border-b border-gray-200">
                      <td className="p-3 text-left border-b-2 border-dotted border-gray-800">
                        {feature.name}
                      </td>
                      <td className="p-3 bg-gray-50">{renderCellContent(feature.free)}</td>
                      <td className="p-3 bg-gray-50">{renderCellContent(feature.pro)}</td>
                      <td className="p-3 bg-gray-50">{renderCellContent(feature.business)}</td>
                      <td className="p-3 bg-gray-50">{renderCellContent(feature.enterprise)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4"></td>
                <td className="p-4 bg-gray-50">
                  <div className="bg-gray-200 text-gray-600 rounded px-3 py-2 inline-block text-sm font-semibold">
                    Current plan
                  </div>
                </td>
                <td className="p-4 bg-gray-50">
                  <button className="bg-green-700 text-white rounded px-3 py-2 text-sm font-semibold hover:bg-green-800 transition">
                    Upgrade Now
                  </button>
                </td>
                <td className="p-4 bg-gray-50">
                  <button className="bg-green-700 text-white rounded px-3 py-2 text-sm font-semibold hover:bg-green-800 transition">
                    Upgrade Now
                  </button>
                </td>
                <td className="p-4 bg-gray-50">
                  <a href="#" className="border border-green-700 text-green-700 rounded px-3 py-2 text-sm font-semibold hover:bg-green-50 transition inline-block">
                    Contact Sales
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareTable;