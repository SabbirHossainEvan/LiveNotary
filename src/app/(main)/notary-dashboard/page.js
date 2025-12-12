
'use client';
// Assuming these components are located in '@/components/notary-dashboard-components/'
import Header from '@/components/notary-dashboard-components/Header';
import JobCard from '@/components/notary-dashboard-components/JobCard';
import TabNavigation from '@/components/notary-dashboard-components/TabNavigation';
import { useState } from 'react';

// --- MOCK DATA ---
const mockData = {
    availableJobs: [
        { id: 1, name: 'John Smith', documents: 2, signers: 1, state: 'CA', timeAgo: '5 min ago', status: 'Available' },
        { id: 2, name: 'Mary Johnson', documents: 1, signers: 2, state: 'NY', timeAgo: '12 min ago', status: 'Available' },
        { id: 3, name: 'Robert Brown', documents: 3, signers: 1, state: 'TX', timeAgo: '18 min ago', status: 'Available' },
    ],
    acceptedJobs: [
        { id: 4, name: 'Sarah Davis', documents: 1, signers: 1, state: 'FL', status: 'In Progress' },
    ],
    jobHistory: [
        { id: 5, name: 'Michael Wilson', completed: '2024-01-20', documents: 2, fee: 25, rating: 5, status: 'Completed' },
        { id: 6, name: 'Emily Taylor', completed: '2024-01-19', documents: 1, fee: 35, rating: 5, status: 'Completed' },
    ],
    payments: {
        totalEarnings: 450.00,
        completedJobs: 18,
        averageRating: 4.9,
        nextPayout: 'Jan 31, 2024',
        recentTransactions: [
            { name: 'Michael Wilson', amount: 25, date: '2024-01-20' },
            { name: 'Emily Taylor', amount: 35, date: '2024-01-19' },
        ]
    }
};

const initialNotifications = [
    { id: 1, title: 'New Job Available!', description: 'A new notarization request for John Smith (CA) is posted.', time: '5 minutes ago', type: 'alert', read: false },
    { id: 2, title: 'Message from Sarah Davis', description: 'Sarah Davis sent you a message regarding the FL job.', time: '1 hour ago', type: 'message', read: false },
    { id: 3, title: 'Payout Scheduled', description: 'Your next payout for $450.00 is scheduled for Jan 31.', time: '1 day ago', type: 'calendar', read: true },
    { id: 4, title: 'Job Accepted!', description: 'You have successfully accepted the job request from Mary Johnson (NY).', time: '2 days ago', type: 'alert', read: true },
];

const TABS = ['Available Jobs', 'Accepted Jobs', 'Job History', 'Payments'];
// --- END MOCK DATA ---


export default function NotaryDashboardPage() { // Renamed for clarity
    const [activeTab, setActiveTab] = useState(TABS[0]);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [notifications, setNotifications] = useState(initialNotifications);

    // --- HANDLERS FOR NOTIFICATIONS ---
    const handleBellClick = () => {
        setIsNotificationOpen(prev => !prev);
    };

    const handleCloseNotifications = () => {
        setIsNotificationOpen(false);
    };

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const handleMarkRead = (id) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));

    };
    // --- END HANDLERS ---

    const renderContent = () => {
        switch (activeTab) {
            case 'Available Jobs':
                return (
                    <div className="space-y-4">
                        {mockData.availableJobs.map(job => (
                            <JobCard key={job.id} job={job} type="available" />
                        ))}
                    </div>
                );
            case 'Accepted Jobs':
                return (
                    <div className="space-y-4">
                        {mockData.acceptedJobs.map(job => (
                            <JobCard key={job.id} job={job} type="accepted" />
                        ))}
                    </div>
                );
            case 'Job History':
                return (
                    <div className="space-y-4">
                        {mockData.jobHistory.map(job => (
                            <JobCard key={job.id} job={job} type="history" />
                        ))}
                    </div>
                );
            case 'Payments':
                return (
                    <div className="p-6  ">
                        {/* Total Earnings Section */}
                        <div className="flex justify-between items-center pb-4 mb-6 space-y-3 p-6 bg-white rounded-lg shadow-sm">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Earnings</h3>
                                <div className='grid grid-cols-2 justify-between items-center'>
                                    <p className="text-5xl font-bold text-[#2563EB] mb-4">${mockData.payments.totalEarnings.toFixed(2)}</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 text-sm text-gray-500">
                                    <p>Completed Jobs: <span className="font-medium text-gray-700">{mockData.payments.completedJobs}</span></p>
                                    <p>Average Rating: <span className="font-medium text-gray-700">{mockData.payments.averageRating} / 5.0</span></p>
                                    <p>Next Payout: <span className="font-medium text-gray-700">{mockData.payments.nextPayout}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Transactions Section */}
                        <div className="space-y-3 p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h3>
                            {mockData.payments.recentTransactions.map((tx, index) => (
                                <div key={index} className="flex justify-between items-center py-2  last:border-b-0">
                                    <p className="text-gray-900">{tx.name}</p>
                                    <p className="text-gray-500 text-sm">{tx.date}</p>
                                    <p className="text-lg font-semibold text-green-600">${tx.amount.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    // --- END RENDER CONTENT FUNCTION ---


    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-4 pt-20">

                <Header
                    title="Notary Dashboard"
                    subtitle="Manage your notarization jobs"
                    isOverlayOpen={isNotificationOpen}
                    onBellClick={handleBellClick}
                    notifications={notifications}
                    onClose={handleCloseNotifications}
                    onMarkAllRead={handleMarkAllRead}
                    onMarkRead={handleMarkRead}
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