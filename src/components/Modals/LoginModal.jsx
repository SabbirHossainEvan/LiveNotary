
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define the roles for login tabs
const tabs = [
    { role: 'signer', label: 'Signer' },
    { role: 'notary', label: 'Notary' },
    { role: 'affiliate', label: 'Affiliate' },
];

const LoginModal = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentRole, setCurrentRole] = useState('signer'); 


    const getDashboardPath = (role) => {
        if (role === 'notary') return '/notary-dashboard'
        if (role === 'affiliate') return '/affiliate-dashboard'

        return `/dashboard`; 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        const targetPath = getDashboardPath(currentRole);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); 

            router.push(targetPath); 
            
        } catch (err) {
            setError('Login failed. Please check your network or credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-0 sm:p-4'>
            {/* 🚀 Role Selection Tabs */}
            <div className="flex justify-between gap-3 mb-6 p-1  rounded-xl">
                {tabs.map((tab) => (
                    <button
                        key={tab.role}
                        onClick={() => setCurrentRole(tab.role)}
                        type="button" 
                        className={`
                            flex-1 p-3 text-sm rounded-lg bg-gray-100 transition duration-300 text-center
                            ${currentRole === tab.role 
                                ? 'border-2 bg-white border-blue-200 text-blue-700 font-bold'
                                : 'text-gray-600 hover:text-gray-900 font-medium'
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                    required 
                />
                
                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center text-gray-600 cursor-pointer">
                        <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500 border-gray-300" />
                        Remember me
                    </label>
                    <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium transition duration-150">Forgot password?</Link>
                </div>
                
                {error && <p className="text-red-500 text-sm p-2 bg-red-50 rounded-lg border border-red-200 mt-2">{error}</p>}
                
                <button 
                    type="submit" 
                    className={`w-full py-3 text-white text-lg font-semibold rounded-xl transition duration-200 shadow-lg ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`} 
                    disabled={loading}
                >
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
            </form>
            
            {/* Sign Up Link */}
            <div className="mt-6 pt-4 text-sm text-center border-t border-gray-200">
                <p className='text-gray-600 inline'>Don t have an account? </p>
                <Link 
                    href="/signup" 
                    className="text-blue-600 hover:text-blue-700 font-bold transition duration-200"
                >
                    Sign up now
                </Link>
            </div>
        </div>
    );
};

export default LoginModal;