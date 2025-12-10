// components/JobCard.jsx

import React from 'react';

const JobCard = ({ job, type }) => {
    // Common styles for the job card
    const baseCardStyle = "p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition duration-200 ease-in-out";

    const renderAvailableActions = () => (
        <div className="flex justify-end space-x-3 mt-4">
            <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                View Details
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Accept Request
            </button>
        </div>
    );

    const renderAcceptedActions = () => (
        <div className="flex justify-between items-center mt-4 pt-4 gap-3 border-gray-100">
            <button className="px-6 py-2 w-full mt-20 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Message Customer
            </button>
            <button className="px-6 py-2 w-full mt-20 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Mark as Completed
            </button>
        </div>
    );

    const renderHistoryDetails = () => (
        <div className="mt-2 text-sm text-gray-600 grid grid-cols-1 gap-y-1 ">
            <p>Completed: <span className="font-medium text-gray-900">{job.completed}</span></p>
            <p>Documents: <span className="font-medium text-gray-900">{job.documents}</span></p>
            <p>Fee Earned: <span className="font-medium text-green-600">${job.fee}</span></p>
            <p>Customer Rating: <span className="font-medium text-yellow-500">{job.rating} stars</span></p>
        </div>
    );


    const renderCommonDetails = () => (
        <div className="mt-2 text-sm text-gray-600 grid grid-cols-1 gap-y-1">
            <p>Documents: <span className="font-medium text-gray-900">{job.documents}</span></p>
            <p>Signers: <span className="font-medium text-gray-900">{job.signers}</span></p>
            <p>State: <span className="font-medium text-gray-900">{job.state}</span></p>
            {type === 'available' && (
                <p>Posted: <span className="font-medium text-gray-900">{job.timeAgo}</span></p>
            )}
        </div>
    );


    switch (type) {
        case 'available':
            return (
                <div className={`${baseCardStyle} flex justify-between items-start`}>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">{job.name}</h2>
                        {renderCommonDetails()}
                    </div>
                    <button className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                        Accept Request
                    </button>
                </div>
            );

        case 'accepted':
            return (
                <div className={baseCardStyle}>
                    <div className="flex justify-between items-start">
                        <h2 className="text-xl font-semibold text-gray-900">{job.name}</h2>
                        <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                            {job.status}
                        </span>
                    </div>
                    {renderCommonDetails()}
                    {renderAcceptedActions()}
                </div>
            );

        case 'history':
            return (
                <div className={baseCardStyle}>
                    <h2 className="text-xl font-semibold text-gray-900">{job.name}</h2>
                    {renderHistoryDetails()}
                </div>
            );

        default:
            return null;
    }
};

export default JobCard;