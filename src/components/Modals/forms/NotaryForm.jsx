// // components/Modals/forms/NotaryForm.js
// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const states = ["Select your state", "California", "Texas", "Florida", "New York"];

// const NotaryForm = () => {
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
        
//         try {
//             await new Promise(resolve => setTimeout(resolve, 1500)); 
            
//             router.push('/signup/submitted'); 
            
//         } catch (error) {
//             console.error('Sign up failed:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form className="space-y-4" onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     placeholder="John Doe"
//                     required
//                     className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 />
//             </div>

//             {/* Email */}
//             <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="you@example.com"
//                     required
//                     className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 />
//             </div>

//             {/* Phone */}
//             <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//                 <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     placeholder="(555) 123-4567"
//                     className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 />
//             </div>

//             {/* Notary License Number */}
//             <div>
//                 <label htmlFor="license" className="block text-sm font-medium text-gray-700">License Number</label>
//                 <input
//                     type="text"
//                     id="license"
//                     name="license"
//                     placeholder="Enter your notary license number"
//                     required
//                     className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 />
//             </div>

//             {/* State Selection (Dropdown) */}
//             <div>
//                 <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
//                 <select
//                     id="state"
//                     name="state"
//                     required
//                     defaultValue={states[0]}
//                     className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-blue-500 focus:border-blue-500"
//                 >
//                     {states.map(state => (
//                         <option key={state} value={state}>{state}</option>
//                     ))}
//                 </select>
//             </div>


//             <button
//                 type="submit"
//                 className={`w-full py-3 text-white font-semibold rounded-lg transition duration-200 mt-6 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
//                 disabled={loading}
//             >
//                 {loading ? 'Creating Account...' : 'Create Account'}
//             </button>
//         </form>
//     );
// };

// export default NotaryForm;


// components/Modals/forms/NotaryForm.js
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // ⬅️ Link Component Added

const states = ["Select your state", "California", "Texas", "Florida", "New York"];

const NotaryForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); 

            router.push('/signup/submitted'); 
            
        } catch (error) {
            console.error('Sign up failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    required
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Notary License Number */}
            <div>
                <label htmlFor="license" className="block text-sm font-medium text-gray-700">License Number</label>
                <input
                    type="text"
                    id="license"
                    name="license"
                    placeholder="Enter your notary license number"
                    required
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* State Selection (Dropdown) */}
            <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <select
                    id="state"
                    name="state"
                    required
                    defaultValue={states[0]}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-blue-500 focus:border-blue-500"
                >
                    {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>


            <button
                type="submit"
                className={`w-full py-3 text-white font-semibold rounded-lg transition duration-200 mt-6 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                disabled={loading}
            >
                {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            {/* Already have an account? Sign In */}
            <div className="mt-4 text-sm text-center">
                <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">Already have an account? Sign In</Link>
            </div>
        </form>
    );
};

export default NotaryForm;