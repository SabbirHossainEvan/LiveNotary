// // // components/Modals/LoginModal.js
// // 'use client';
// // import React, { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Link from 'next/link';

// // const LoginModal = () => {
// //     const router = useRouter();
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setLoading(true);
// //         setError(null);
        
// //         try {
// //             await new Promise(resolve => setTimeout(resolve, 1000)); 
            
// //             router.push('/dashboard'); 
            
// //         } catch (err) {
// //             setError('Login failed. Please check your network.');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div>
// //             <form className="space-y-4" onSubmit={handleSubmit}>
                
// //                 {/* Email Input */}
// //                 <input 
// //                     type="email" 
// //                     placeholder="Email" 
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
// //                     required
// //                 />
                
// //                 {/* Password Input */}
// //                 <input 
// //                     type="password" 
// //                     placeholder="Password" 
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
// //                     required
// //                 />
                
// //                 <div className="flex justify-between text-sm">
// //                     {/* Remember Me Checkbox (Optional) */}
// //                     <label className="flex items-center text-gray-600">
// //                         <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
// //                         Remember me
// //                     </label>
                    
// //                     {/* Forgot Password Link */}
// //                     <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800">
// //                         Forgot password?
// //                     </Link>
// //                 </div>
                
// //                 {/* Error Message */}
// //                 {error && <p className="text-red-500 text-sm">{error}</p>}

// //                 {/* Submit Button */}
// //                 <button 
// //                     type="submit" 
// //                     className={`w-full py-3 text-white font-semibold rounded-lg transition duration-200 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
// //                     disabled={loading}
// //                 >
// //                     {loading ? 'Signing In...' : 'Sign In'}
// //                 </button>
// //             </form>
            
// //             <div className="mt-4 text-sm text-center">
// //                 <Link 
// //                     href="/signup/signer" 
// //                     className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
// //                 >
// //                     Don t have an account? Sign up
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginModal;

// // components/Modals/LoginModal.js
// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// const LoginModal = () => {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
        
 
//         try {

//             await new Promise(resolve => setTimeout(resolve, 1000)); 

//             router.push('/dashboard'); 
            
//         } catch (err) {
//             setError('Login failed. Please check your network or credentials.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>

            
//             <form className="space-y-4" onSubmit={handleSubmit}>
                
//                 {/* Email Input */}
//                 <div>
//                     <input 
//                         type="email" 
//                         placeholder="Email" 
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
//                         required
//                     />
//                 </div>
                
//                 {/* Password Input */}
//                 <div>
//                     <input 
//                         type="password" 
//                         placeholder="Password" 
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
//                         required
//                     />
//                 </div>
                
//                 <div className="flex justify-between text-sm">
//                     {/* Remember Me Checkbox */}
//                     <label className="flex items-center text-gray-600">
//                         <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500 border-gray-300" />
//                         Remember me
//                     </label>
                    
//                     {/* Forgot Password Link */}
//                     <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800 font-medium">
//                         Forgot password?
//                     </Link>
//                 </div>
                
//                 {/* Error Message */}
//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

//                 {/* Submit Button */}
//                 <button 
//                     type="submit" 
//                     className={`w-full py-3 text-white font-semibold rounded-lg transition duration-200 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
//                     disabled={loading}
//                 >
//                     {loading ? 'Signing In...' : 'Sign In'}
//                 </button>
//             </form>
            
//             {/* Sign Up Link */}
//             <div className="mt-4 pt-4 border-t text-sm text-center">
//                 <p className='text-gray-600 inline'>Don t have an account? </p>
//                 <Link 
//                     href="/signup/signer" 
//                     className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
//                 >
//                     Sign up
//                 </Link>
//             </div>
            
//         </div>
//     );
// };

// export default LoginModal;

// components/Modals/LoginModal.js
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const LoginModal = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            
            router.push('/dashboard'); 
            
        } catch (err) {
            setError('Login failed. Please check your network or credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
                <div className="flex justify-between text-sm">
                    <label className="flex items-center text-gray-600">
                        <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500 border-gray-300" />
                        Remember me
                    </label>
                    <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800 font-medium">Forgot password?</Link>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button type="submit" className={`w-full py-3 text-white font-semibold rounded-lg transition duration-200 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`} disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
            </form>
            
            {/* Sign Up Link */}
            <div className="mt-4 pt-4 border-t text-sm text-center">
                <p className='text-gray-600 inline'>Don t have an account? </p>

                <Link 
                    href="/signup" 
                    className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
                >
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default LoginModal;