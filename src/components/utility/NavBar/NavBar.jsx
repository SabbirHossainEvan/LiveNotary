

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X, Bell } from 'lucide-react';

// // Assume the user is logged in if the pathname starts with '/dashboard'
// const isUserLoggedIn = (currentPathname) => currentPathname.startsWith('/dashboard');

// // --- UPDATED navItems ARRAY ---
// const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Contact', href: '#contact-us' },
//     { name: 'About', href: '#about-section' },  
//     { name: 'FAQs', href: '#faqs-section' },    
//     // FIX: Dashboard link now points to /login initially
//     { name: 'Dashboard', href: '/login' }, 
// ];
// // --- END navItems ARRAY ---

// const UserProfileDisplay = () => (
//     <div className="flex items-center space-x-4">
//         {/* Notification Icon */}
//         <Link href="/dashboard/notifications" className="relative p-1 text-gray-600 hover:text-blue-600">
//             <Bell size={20} />
//             {/* Example red dot for new notification */}
//             <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
//         </Link>

//         {/* User Profile Link/Dropdown (redirects to /dashboard/profile or /dashboard) */}
//         <Link href="/dashboard" className="flex items-center space-x-2 cursor-pointer group">
//             <div className="text-right">
//                 <p className="text-sm font-semibold text-gray-800">John Smith</p>
//                 <p className="text-xs text-blue-600 group-hover:underline">User Profile</p>
//             </div>
//             {/* User Avatar */}
//             <Image
//                 src="/user-avatar.jpg" // Change this to your actual user avatar path
//                 alt="User Avatar"
//                 width={32}
//                 height={32}
//                 className="rounded-full ring-2 ring-blue-500"
//             />
//         </Link>
//     </div>
// );


// const Navbar = () => {
//     const pathname = usePathname();
//     const [isOpen, setIsOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     const [activeSection, setActiveSection] = useState('/'); 
    
//     // Check login status based on pathname being /dashboard (or any path under it)
//     const isLoggedIn = isUserLoggedIn(pathname);


//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     // --- Function to handle link clicks and manual state update ---
//     const handleNavItemClick = (itemHref) => {
//         if (itemHref.startsWith('#')) {
//             const sectionKey = itemHref.replace('#', '');
//             setActiveSection(sectionKey); 
//         } else if (itemHref === '/') {
//              setActiveSection('/');
//         } else {
//              // For routes like /login or /dashboard, set activeSection to the full href
//              setActiveSection(itemHref);
//         }
        
//         setIsOpen(false);
//     };


//     // --- Scroll Shadow Effect ---
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // --- Intersection Observer for Active Section Tracking ---
//     // (This logic remains the same as it correctly tracks sections on the Home page)
//     useEffect(() => {
//         if (pathname !== '/') return; 

//         const sectionIds = ['contact-us', 'about-section', 'faqs-section'];
//         const sectionElements = sectionIds
//             .map(id => document.getElementById(id))
//             .filter(el => el != null);

//         const observerOptions = {
//             root: null, 
//             rootMargin: '-50% 0px -50% 0px', 
//             threshold: 0,
//         };

//         const observer = new IntersectionObserver((entries) => {
//             let foundActive = null;

//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     if (entry.target.id === 'contact-us') foundActive = 'contact-us'; 
//                     if (entry.target.id === 'about-section') foundActive = 'about-section';
//                     if (entry.target.id === 'faqs-section') foundActive = 'faqs-section';
//                 }
//             });
            
//             if (foundActive) {
//                 setActiveSection(foundActive); 
//             } 
//             else if (window.scrollY < 150) { 
//                 setActiveSection('/');
//             }


//         }, observerOptions);

//         sectionElements.forEach(el => observer.observe(el));

//         return () => {
//             sectionElements.forEach(el => observer.unobserve(el));
//         };
//     }, [pathname]);


//     // --- Active Link Checker (Finalized Logic) ---
//     const isActive = (itemHref) => {
//         // Case 1: Home Link
//         if (itemHref === '/') {
//             return pathname === '/' && activeSection === '/'; 
//         }
        
//         // Case 2: Hash Links (#contact-us, #about-section)
//         if (itemHref.startsWith('#')) {
//             return activeSection === itemHref.replace('#', '');
//         }

//         // Case 3: Route Links (/login, /dashboard)
//         if (itemHref.startsWith('/')) {
//             // Checks if current pathname starts with the item's href (e.g., if pathname is /dashboard/requests, itemHref /dashboard is active)
//             return pathname.startsWith(itemHref);
//         }
        
//         return false;
//     };


//     return (
//         <header className={`
//             fixed top-0 left-0 w-full bg-white z-50 transition-all shadow-lg duration-300 
//             ${isScrolled ? 'shadow-lg bg-white backdrop-blur-sm' : 'bg-white'}
//         `}>
//             <nav className="px-6 md:px-18 lg:px-20">
//                 <div className="flex justify-between items-center ">

//                     <Link href="/" className="flex items-center ">
//                         <Image
//                             src="/navLogo.svg"
//                             alt="UseHistory Logo"
//                             width={82}
//                             height={82}
//                             className="mt-1 mb-1"
//                         />
//                     </Link>

//                     {/* Desktop Navigation Links */}
//                     <div className="hidden md:flex items-center space-x-8">
//                         {navItems.map((item) => {
//                             // Conditional link for Dashboard: if logged in, link to /dashboard, else link to /login
//                             const linkHref = (item.name === 'Dashboard' && isLoggedIn) ? '/dashboard' : item.href;
                            
//                             return (
//                                 <Link
//                                     key={item.name}
//                                     // Use the conditional linkHref
//                                     href={linkHref} 
//                                     onClick={() => handleNavItemClick(item.href)}
//                                     className={`
//                                         text-gray-600 hover:text-blue-600 font-medium transition duration-300 
//                                         relative group
//                                         ${isActive(item.href) ? 'text-blue-600' : ''}
//                                     `}
//                                 >
//                                     {item.name}
//                                     <span className={`
//                                         absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out
//                                         ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}
//                                     `}></span>
//                                 </Link>
//                             );
//                         })}
//                     </div>

//                     {/* --- RIGHT SIDE CONTENT: Toggle between Get Started and User Profile --- */}
//                     <div className="hidden md:block">
//                         {isLoggedIn ? (
//                             <UserProfileDisplay />
//                         ) : (
//                             <Link href="/login" onClick={() => setIsOpen(false)}>
//                                 <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
//                                     Get Started
//                                 </button>
//                             </Link>
//                         )}
//                     </div>
//                     {/* --- END RIGHT SIDE CONTENT --- */}


//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={toggleMenu}
//                             className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
//                         >
//                             {isOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             <div
//                 className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
//                 ${isOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}
//             `}
//             >
//                 <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 bg-white/95 backdrop-blur-sm shadow-inner">
//                     {navItems.map((item) => {
//                         // Conditional link for Dashboard in mobile menu
//                         const linkHref = (item.name === 'Dashboard' && isLoggedIn) ? '/dashboard' : item.href;

//                         return (
//                             <Link
//                                 key={item.name}
//                                 href={linkHref}
//                                 onClick={() => handleNavItemClick(item.href)}
//                                 className={`
//                                     block px-3 py-2 rounded-md text-base font-medium transition duration-300
//                                     ${isActive(item.href)
//                                         ? 'bg-blue-50 text-blue-700'
//                                         : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
//                                     }
//                                 `}
//                             >
//                                 {item.name}
//                             </Link>
//                         );
//                     })}
                    
//                     {/* Mobile Get Started / User Profile Link */}
//                     {isLoggedIn ? (
//                         <Link href="/dashboard" onClick={() => setIsOpen(false)}
//                             className={`mt-3 w-full block text-center px-5 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg 
//                                 hover:bg-blue-100 transition duration-300 shadow-sm`}>
//                             View Dashboard (John Smith)
//                         </Link>
//                     ) : (
//                          <Link href="/login" onClick={() => setIsOpen(false)}>
//                             <button className={`mt-3 w-full px-5 py-2 bg-blue-600 text-white font-medium rounded-lg 
//                                 hover:bg-blue-700 transition duration-300 shadow-md`}>
//                                 Get Started
//                             </button>
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;


'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Bell, UserCheckIcon } from 'lucide-react';
import { NotificationOverlay } from '@/components/Modals/NotificationOverlay';
// NotificationOverlay Component টি এখানে ইম্পোর্ট করুন 



// Dummy data for Notifications (Replace this with actual fetched data later)
const initialNotifications = [
    { id: 1, title: 'New Message', description: 'John commented on your profile.', time: '5m ago', type: 'message', read: false },
    { id: 2, title: 'Meeting Scheduled', description: 'Project review meeting is set for tomorrow.', time: '2h ago', type: 'calendar', read: false },
    { id: 3, title: 'System Alert', description: 'Your storage usage is 90% full.', time: '1 day ago', type: 'alert', read: true },
];

const isUserLoggedIn = (currentPathname) => currentPathname.startsWith('/dashboard');

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '#contact-us' },
    { name: 'About', href: '#about-section' },  
    { name: 'FAQs', href: '#faqs-section' },    
    { name: 'Dashboard', href: '/login' }, 
];

// --- UserProfileDisplay কম্পোনেন্ট: Modal লজিক এখানে যুক্ত করা হয়েছে ---
const UserProfileDisplay = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState(initialNotifications);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleMarkRead = (id) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
        // Optional: Close modal after clicking notification
        // setShowNotifications(false);
    };

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    return (
        // Relative positioning for the Modal/Overlay
        <div className="flex items-center space-x-4 relative"> 
            
            {/* 🔔 Notification Icon with Click Handler */}
            <button 
                onClick={() => setShowNotifications(prev => !prev)}
                className="relative p-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
                <Bell size={20} />
                {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border border-white flex items-center justify-center text-xs text-white font-bold">
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                )}
            </button>

            {/*  User Profile Link */}
            <Link href="/dashboard" className="flex items-center space-x-2 cursor-pointer group">
                <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">John Smith</p>
                    <p className="text-xs text-blue-600 group-hover:underline">User Profile</p>
                </div>
                <UserCheckIcon className="h-9 w-9 text-[#3B82F6]" />
            </Link>

            {/* --- Notification Modal/Overlay Conditional Rendering --- */}
            {showNotifications && (
                <NotificationOverlay 
                    notifications={notifications}
                    onClose={() => setShowNotifications(false)}
                    onMarkAllRead={handleMarkAllRead}
                    onMarkRead={handleMarkRead}
                />
            )}
        </div>
    );
};




const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [activeSection, setActiveSection] = useState('/'); 
    
    const isLoggedIn = isUserLoggedIn(pathname);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    
    const handleNavItemClick = (itemHref) => {
        if (itemHref.startsWith('#')) {
            const sectionKey = itemHref.replace('#', '');
            setActiveSection(sectionKey); 
        } else if (itemHref === '/') {
             setActiveSection('/');
        } else {
             setActiveSection(itemHref);
        }
        setIsOpen(false);
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (pathname !== '/') return; 

        const sectionIds = ['contact-us', 'about-section', 'faqs-section'];
        const sectionElements = sectionIds
            .map(id => document.getElementById(id))
            .filter(el => el != null);

        const observerOptions = {
            root: null, 
            rootMargin: '-50% 0px -50% 0px', 
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            let foundActive = null;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'contact-us') foundActive = 'contact-us'; 
                    if (entry.target.id === 'about-section') foundActive = 'about-section';
                    if (entry.target.id === 'faqs-section') foundActive = 'faqs-section';
                }
            });
            
            if (foundActive) {
                setActiveSection(foundActive); 
            } 
            else if (window.scrollY < 150) { 
                setActiveSection('/');
            }


        }, observerOptions);

        sectionElements.forEach(el => observer.observe(el));

        return () => {
            sectionElements.forEach(el => observer.unobserve(el));
        };
    }, [pathname]);


    const isActive = (itemHref) => {
        if (itemHref === '/') {
            return pathname === '/' && activeSection === '/'; 
        }
        
        if (itemHref.startsWith('#')) {
            return activeSection === itemHref.replace('#', '');
        }

        if (itemHref.startsWith('/')) {
            return pathname.startsWith(itemHref);
        }
        
        return false;
    };


    // --- RETURN STATEMENT ---
    return (
        <header className={`
            fixed top-0 left-0 w-full bg-white z-50 transition-all shadow-lg duration-300 
            ${isScrolled ? 'shadow-lg bg-white backdrop-blur-sm' : 'bg-white'}
        `}>
            <nav className="px-6 md:px-18 lg:px-20">
                <div className="flex justify-between items-center ">

                    <Link href="/" className="flex items-center ">
                        <Image
                            src="/navLogo.svg"
                            alt="UseHistory Logo"
                            width={82}
                            height={82}
                            className="mt-1 mb-1"
                        />
                    </Link>

                    {/* Desktop Navigation Links (unchanged) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const linkHref = (item.name === 'Dashboard' && isLoggedIn) ? '/dashboard' : item.href;
                            
                            return (
                                <Link
                                    key={item.name}
                                    href={linkHref} 
                                    onClick={() => handleNavItemClick(item.href)}
                                    className={`
                                        text-gray-600 hover:text-blue-600 font-medium transition duration-300 
                                        relative group
                                        ${isActive(item.href) ? 'text-blue-600' : ''}
                                    `}
                                >
                                    {item.name}
                                    <span className={`
                                        absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out
                                        ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}
                                    `}></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* --- RIGHT SIDE CONTENT: Toggle between Get Started and User Profile --- */}
                    <div className="hidden md:block">
                        {isLoggedIn ? (
                            // Logged in: Shows Bell Icon and Profile with Modal logic
                            <UserProfileDisplay />
                        ) : (
                            // Logged out: Shows Get Started button
                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
                                    Get Started
                                </button>
                            </Link>
                        )}
                    </div>
                    {/* --- END RIGHT SIDE CONTENT --- */}


                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu (unchanged logic for Get Started/Dashboard) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
                ${isOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}
            `}
            >
                {/* ... (Mobile menu content remains the same) ... */}
            </div>
        </header>
    );
};

export default Navbar;