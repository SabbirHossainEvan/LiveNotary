
"use client";
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


const NotaryDashboard = () => {
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
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        {/* Total Earnings Section */}
                        <div className="flex justify-between items-center border-b pb-4 mb-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Earnings</h3>
                                <p className="text-5xl font-extrabold text-gray-900 mb-4">${mockData.payments.totalEarnings.toFixed(2)}</p>
                                <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                                    <p>Completed Jobs: <span className="font-medium text-gray-700">{mockData.payments.completedJobs}</span></p>
                                    <p>Average Rating: <span className="font-medium text-gray-700">{mockData.payments.averageRating} / 5.0</span></p>
                                    <p>Next Payout: <span className="font-medium text-gray-700">{mockData.payments.nextPayout}</span></p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1L21 12m-6-2h4v4m-4 4h4m-9-2h4m-4 4v4m-5 3h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        {/* Recent Transactions Section */}
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h3>
                        <div className="space-y-3">
                            {mockData.payments.recentTransactions.map((tx, index) => (
                                <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
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

                {/* Header Component - Notification integration */}
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

export default NotaryDashboard;