

"use client"; 

import AffiliateHeader from '@/components/affiliate-dashboard-components/AffiliateHeader';
import CommissionRow from '@/components/affiliate-dashboard-components/CommissionRow';
import OverviewCard from '@/components/affiliate-dashboard-components/OverviewCard';
import PayoutHistoryRow from '@/components/affiliate-dashboard-components/PayoutHistoryRow';
import TabNavigation from '@/components/affiliate-dashboard-components/TabNavigation';
import React, { useState } from 'react';



// --- MOCK DATA ---
const mockData = {
  overview: {
    totalClicks: 1247,
    clicksChange: '+12% this month',
    conversions: 43,
    conversionsChange: '+8% this month',
    totalEarned: 645.00,
    earnedChange: '+15% this month',
  },
  referralLink: "https://livenotaryonline.com/ref/ABC123XYZ",
  commissionHistory: [
    { id: 1, name: 'John D.', date: '2024-01-20', amount: 15.00, status: 'Approved' },
    { id: 2, name: 'Sarah M.', date: '2024-01-18', amount: 15.00, status: 'Approved' },
    { id: 3, name: 'Mike W.', date: '2024-01-15', amount: 15.00, status: 'Pending' },
  ],
  payments: {
    availableBalance: 645.00,
    minimumThreshold: 50.00,
    payoutHistory: [
      { id: 101, date: '2024-01-01', method: 'PayPal', amount: 500.00, status: 'Paid' },
      { id: 102, date: '2023-12-01', method: 'Bank Transfer', amount: 450.00, status: 'Paid' },
    ]
  }
};

const TABS = ['Overview', 'My Referral Link', 'Commission History', 'Payments'];
// --- END MOCK DATA ---


const AffiliateDashboard = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        const { overview } = mockData;
        return (
          <div className="space-y-8">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OverviewCard title="Total Clicks" value={overview.totalClicks} change={overview.clicksChange} />
              <OverviewCard title="Conversions" value={overview.conversions} change={overview.conversionsChange} />
              <OverviewCard title="Total Earned" value={`$${overview.totalEarned.toFixed(2)}`} change={overview.earnedChange} />
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Chart</h3>
              <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed border-gray-200 rounded-lg">
                Chart visualization would go here
              </div>
            </div>
          </div>
        );

      case 'My Referral Link':
        return (
          <div className="space-y-8">
            {/* Referral Link Box */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Referral Link</h3>
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="text"
                  readOnly
                  value={mockData.referralLink}
                  className="flex-grow p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(mockData.referralLink)}
                  className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                >
                  {/* Copy Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" /><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" /></svg>
                  <span>Copy</span>
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-500">Share this link to earn commissions on every successful referral.</p>
            </div>

            {/* QR Code Section */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">QR Code</h3>
              {/* Placeholder for QR Code Image */}
              <div className="w-40 h-40 mb-4 flex items-center justify-center border border-gray-200 rounded-lg">
                              </div>
              <button className="px-6 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition flex items-center space-x-2">
                {/* Download Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span>Download QR Code</span>
              </button>
            </div>
          </div>
        );

      case 'Commission History':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-3">Commission History</h3>
            <div className="space-y-4">
              {mockData.commissionHistory.map(commission => (
                <CommissionRow key={commission.id} commission={commission} />
              ))}
            </div>
          </div>
        );

      case 'Payments':
        const { availableBalance, minimumThreshold, payoutHistory } = mockData.payments;
        return (
          <div className="space-y-8">
            {/* Available Balance Card */}
            <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">Available Balance</h3>
                <p className="text-4xl font-extrabold  text-[#2563EB] mb-1">${availableBalance.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Minimum payout threshold: ${minimumThreshold.toFixed(2)}</p>
              </div>
              <button 
                className={`px-6 py-3 text-base font-medium text-white rounded-lg transition ${
                  availableBalance >= minimumThreshold 
                    ? 'bg-[#2563EB] hover:bg-blue-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={availableBalance < minimumThreshold}
              >
                Request Payout
              </button>
            </div>

            {/* Payout History Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-3">Payout History</h3>
              <div className="space-y-4">
                {payoutHistory.map(payout => (
                  <PayoutHistoryRow key={payout.id} payout={payout} />
                ))}
              </div>
              {payoutHistory.length === 0 && (
                 <div className="p-4 text-center text-gray-500">No payout history found.</div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-6 max-w-7xl mx-auto pt-20 sm:px-6 lg:px-8">
        
        {/* Header Component */}
        <AffiliateHeader
          title="Affiliate Dashboard" 
          subtitle="Track your referrals and earnings" 
        />
        
        {/* Tab Navigation */}
        <TabNavigation 
          tabs={TABS} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
        
        {/* Main Content Area */}
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;