

import React from 'react';

/**

 * @param {Object} props
 * @param {string[]} props.tabs 
 * @param {string} props.activeTab
 * @param {Function} props.setActiveTab 
 */
const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200 mt-6">
      <nav className="-mb-px grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-0 space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              whitespace-nowrap py-3 px-1 border-b-2 font-medium text-lg transition duration-150 ease-in-out
              ${activeTab === tab
                ? 'border-blue-600 text-blue-700' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' 
              }
            `}
            aria-current={activeTab === tab ? 'page' : undefined}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;