
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignerForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); 4
            router.push('/dashboard'); 
        } catch (error) {
            console.error('Sign up failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {/* ... (Form inputs: Full Name, Email, etc.) ... */}
            <input type="text" placeholder="Full Name" required className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            <input type="email" placeholder="Email" required className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            <input type="tel" placeholder="Phone" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            <input type="number" placeholder="Number of Documents" defaultValue={1} min={1} required className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            
            <div className="pt-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Signer 1 Details</p>
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" required className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="email" placeholder="Email" required className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>

            <button
                type="submit"
                className={`w-full py-3 text-white font-semibold rounded-lg transition duration-200 mt-6 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                disabled={loading}
            >
                {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            <div className="mt-4 text-sm text-center">
                <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">Already have an account? Sign In</Link>
            </div>
        </form>
    );
};

export default SignerForm;