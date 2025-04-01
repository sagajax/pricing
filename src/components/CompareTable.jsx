import React from 'react';

const CompareTable = () => {
  const plans = [
    { name: 'Free', current: true, button: 'Current plan', buttonClass: 'bg-gray-200 text-gray-600' },
    { name: 'Pro', button: 'Upgrade Now', buttonClass: 'bg-green-800 text-white hover:bg-green-700' },
    { name: 'Business+', button: 'Upgrade Now', buttonClass: 'bg-green-800 text-white hover:bg-green-700' },
    { name: 'Enterprise Grid', button: 'Contact Sales', buttonClass: 'bg-white text-green-800 border border-green-800 hover:bg-green-50' },
  ];

  const features = [
    {
      category: 'Productivity & collaboration',
      items: [
        { name: 'Message and file history', free: '90-day access', pro: true, business: true, enterprise: true },
        { name: 'Slack huddles', free: 'One-on-one only', pro: true, business: true, enterprise: true },
        { name: 'Audio and video clips', free: true, pro: true, business: true, enterprise: true },
        { name: 'Work with external people', free: 'One-on-one only', pro: true, business: true, enterprise: true },
        { name: 'Slack canvases', free: 'Channels and DMs only', pro: true, business: true, enterprise: true },
        { name: 'Custom templates', free: false, pro: false, business: false, enterprise: true },
        { name: 'Customizable sections', free: false, pro: true, business: true, enterprise: true },
        { name: 'Slack Atlas', free: false, pro: false, business: 'Add-on', enterprise: true },
        { name: 'Slack AI', free: false, pro: false, business: false, enterprise: 'Add-on' },
      ]
    },
    {
      category: 'Automation tools',
      items: [
        { name: 'Integrations with other apps', free: '10', pro: true, business: true, enterprise: true },
        { name: 'Workflow Builder', free: false, pro: true, business: true, enterprise: true },
        { name: 'Custom workflow steps', free: false, pro: true, business: true, enterprise: true },
        { name: 'Deploy apps to Slack infrastructure', free: false, pro: true, business: true, enterprise: true },
      ]
    },
    {
      category: 'Automation usage',
      items: [
        { name: 'Total published workflows or integrations with other apps', free: false, pro: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Standard workflows', free: false, pro: true, business: true, enterprise: true },
        { name: 'Premium workflows', free: false, pro: '1000 runs/month', business: '2000 runs/month', enterprise: '5000 runs/month' },
      ]
    },
    {
      category: 'Security',
      items: [
        { name: 'Data encryption at rest and in transit', free: true, pro: true, business: true, enterprise: true },
        { name: 'Two-factor authentication', free: true, pro: true, business: true, enterprise: true },
        { name: 'OAuth with Google', free: false, pro: true, business: true, enterprise: true },
        { name: 'SAML-based single sign-on (SSO)', free: false, pro: false, business: true, enterprise: true },
        { name: 'Slack Enterprise Key Management', free: false, pro: false, business: false, enterprise: 'Add-on' },
        { name: 'Integration with Enterprise Mobility Management (EMM)', free: false, pro: false, business: false, enterprise: true },
      ]
    },
    {
      category: 'Compliance',
      items: [
        { name: 'Custom retention policies for messages and files', free: false, pro: true, business: true, enterprise: true },
        { name: 'Data exports for all messages', free: false, pro: false, business: true, enterprise: true },
        { name: 'Data residency', free: false, pro: false, business: true, enterprise: true },
        { name: 'Support for HIPAA compliance', free: false, pro: false, business: false, enterprise: true },
      ]
    },
    {
      category: 'Administration',
      items: [
        { name: 'Workspaces', free: '1', pro: '1', business: '1', enterprise: 'Unlimited' },
        { name: 'Manage channel posting permissions', free: 'Limited to #general channel only', pro: 'Limited to #general channel only', business: 'Unlimited number of channels', enterprise: 'Unlimited number of channels' },
        { name: 'Custom User Groups', free: false, pro: true, business: true, enterprise: true },
        { name: 'User management with SCIM provisioning', free: false, pro: false, business: true, enterprise: true },
        { name: 'Support for integrations with Data Loss Prevention (DLP), e-Discovery, and offline backup providers', free: false, pro: false, business: false, enterprise: true },
        { name: 'Domain claiming', free: false, pro: false, business: false, enterprise: true },
        { name: 'Custom Terms of Service', free: false, pro: false, business: false, enterprise: true },
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Access to customer support', free: 'Standard support', pro: '24/7 support', business: '24/7 support with four-hour first response time', enterprise: '24/7 priority with four-hour first response time' },
        { name: '99.99% guaranteed uptime SLA', free: false, pro: false, business: true, enterprise: true },
      ]
    }
  ];

  const renderCellContent = (value) => {
    if (value === true) {
      return (
        <span className="flex justify-center">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      );
    }
    if (value === false) {
      return <span className="sr-only">Not included</span>;
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="py-12 px-5 bg-white relative hidden sm:block">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12 font-bold">Compare features across plans</h2>
        
        <div className="overflow-x-auto">
          {/* Table with margin-top to prevent header overlap */}
          <table className="w-full text-center text-gray-900 table-fixed mt-[92px]">
            {/* Sticky header with proper z-index */}
            <thead className="sticky top-0 z-20 bg-white ">
              <tr>
                {/* First column header sticky on both axes */}
                <th className="w-[30%] sticky left-0 bg-white z-10 pt-[92px]"></th>
                {plans.map((plan, index) => (
                  <th 
                    key={index} 
                    className="w-[17.5%] py-4 px-4 bg-gray-50 border-l-[34px] border-white"
                  >
                    <div className="font-bold text-lg">{plan.name}</div>
                    <div className="mt-2">
                      <button 
                        className={`w-full h-10 px-3 rounded font-semibold text-sm ${plan.buttonClass} transition-colors`}
                      >
                        {plan.button}
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {features.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  {/* Category row with top padding for first category */}
                  <tr className={` ${sectionIndex === 0 ? 'pt-[92px]' : ''}`}>
                    <td className="py-4 px-0 text-left font-bold text-lg">{section.category}</td>
                    <td className="bg-gray-50 border-l-[34px] border-white"></td>
                    <td className="bg-gray-50 border-l-[34px] border-white"></td>
                    <td className="bg-gray-50 border-l-[34px] border-white"></td>
                    <td className="bg-gray-50 border-l-[34px] border-white"></td>
                  </tr>
                  
                  {/* Feature rows */}
                  {section.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="">
                      <td className="py-3 px-0 text-left ">
                        <span className="border-b-2 border-dotted border-gray-900 text-sm">{item.name}</span>
                      </td>
                      <td className="py-3 px-3 bg-gray-50 border-l-[34px] border-white ">
                        <div className="h-full flex items-center justify-center">
                          {renderCellContent(item.free)}
                        </div>
                      </td>
                      <td className="py-3 px-3 bg-gray-50 border-l-[34px] border-white  ">
                        <div className="h-full flex items-center justify-center">
                          {renderCellContent(item.pro)}
                        </div>
                      </td>
                      <td className="py-3 px-3 bg-gray-50 border-l-[34px] border-white  ">
                        <div className="h-full flex items-center justify-center">
                          {renderCellContent(item.business)}
                        </div>
                      </td>
                      <td className="py-3 px-3 bg-gray-50 border-l-[34px] border-white  ">
                        <div className="h-full flex items-center justify-center">
                          {renderCellContent(item.enterprise)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            
            <tfoot>
              <tr>
                <td></td>
                {plans.map((plan, index) => (
                  <td key={index} className="pt-8 pb-4 bg-gray-50 border-l-[34px] border-white">
                    <button 
                      className={`w-full h-10 px-3 rounded font-semibold text-sm ${plan.buttonClass} transition-colors`}
                    >
                      {plan.button}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareTable;