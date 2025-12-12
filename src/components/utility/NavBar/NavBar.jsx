


'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Bell, UserCircleIcon } from 'lucide-react';

import { NotificationOverlay } from '@/components/Modals/NotificationOverlay';


const initialNotifications = [
    { id: 1, title: 'New Message', description: 'John commented on your profile.', time: '5m ago', type: 'message', read: false },
    { id: 2, title: 'Meeting Scheduled', description: 'Project review meeting is set for tomorrow.', time: '2h ago', type: 'calendar', read: false },
    { id: 3, title: 'System Alert', description: 'Your storage usage is 90% full.', time: '1 day ago', type: 'alert', read: true },
];

// FIX 2: All confirmed dashboard base paths
const DASHBOARD_BASE_PATHS = [
    '/dashboard',       // User Dashboard (e.g., /dashboard route)
    '/notary-dashboard',    // Notary Dashboard route
    '/affiliate-dashboard' // Affiliate Dashboard route
];

// Check if user is "logged in" based on being on any dashboard page
const isUserLoggedIn = (currentPathname) =>
    DASHBOARD_BASE_PATHS.some(path => currentPathname.startsWith(path));

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about-section' },
    { name: 'FAQs', href: '/#faqs-section' },
    { name: 'Contact', href: '/#contact-us' },
    { name: 'Dashboard', href: '/login' },
];


const UserProfileDisplay = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState(initialNotifications);
    const notificationRef = useRef(null);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleMarkRead = (id) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };



    // --- Body Overflow and Scrollbar Gutter Fix ---
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (showNotifications) {
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            } else {
                document.body.style.overflow = 'unset';
                document.body.style.paddingRight = '0';
            }
        }

        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = 'unset';
                document.body.style.paddingRight = '0';
            }
        };
    }, [showNotifications]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [notificationRef]);


    return (

        <div className="flex items-center space-x-4 relative" ref={notificationRef}>

            {/* 🔔 Notification Icon */}
            <button
                onClick={() => setShowNotifications(prev => !prev)}
                className="relative p-1 text-gray-600 hover:text-blue-600 transition-colors focus:outline-none"
                aria-label="Toggle notifications"
            >
                <Bell size={20} />
                {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border border-white flex items-center justify-center text-xs text-white font-bold leading-none">
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                )}
            </button>

            {/* 👤 User Profile Link */}
            <Link href={DASHBOARD_BASE_PATHS[0] || '/dashboard'} className="flex items-center space-x-2 cursor-pointer group">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold text-gray-800">John Smith</p>
                    <p className="text-xs text-blue-600 group-hover:underline">User Profile</p>
                </div>

                <UserCircleIcon className="h-9 w-9 text-[#3B82F6] flex-shrink-0" />
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


    // --- Scroll Shadow Effect & Home Active State ---
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // 1. Shadow effect
            setIsScrolled(scrollY > 10);

            // 2. Force "Home" active at very top
            if (scrollY < 150) {
                setActiveSection('/');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Intersection Observer (Anchors) ---
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



            // If any section intersected → set active
            if (foundActive) {
                setActiveSection(foundActive);
            }


        }, observerOptions);

        sectionElements.forEach(el => observer.observe(el));

        return () => {
            sectionElements.forEach(el => observer.unobserve(el));
        };
    }, [pathname]);


    // --- Active Link Checker (FIXED LOGIC) ---
    const isActive = (itemHref) => {
        // 1. Home Link Check
        if (itemHref === '/') {
            return pathname === '/' && activeSection === '/';
        }

        // 2. Anchor Link Check
        if (itemHref.startsWith('/#')) {
            return pathname === '/' && activeSection === itemHref.replace('/#', '');
        }


        // 3. Dashboard Link Check 
        if (itemHref === '/login' || itemHref === '/dashboard') {

            // Current path login/signup or any of the dashboard base paths 
            const isAnyDashboardOrAuthPage = (
                pathname === '/login' ||
                pathname === '/signup' ||
                DASHBOARD_BASE_PATHS.some(path => pathname.startsWith(path))
            );

            return isAnyDashboardOrAuthPage;
        }

        // 4. General Sub-route check (if needed)
        if (itemHref.startsWith('/')) {
            return pathname.startsWith(itemHref);
        }

        return false;
    };


    return (
        <header className={`
            fixed top-0 left-0 w-full bg-white z-50 transition-all py-3 shadow-lg duration-300 
            ${isScrolled ? 'shadow-lg bg-white backdrop-blur-sm' : 'bg-white'}
        `}>
            <nav className="px-6 md:px-18 lg:px-20">
                <div className="flex justify-between items-center h-16">

                    <Link href="/" className="flex items-center ">
                        <Image
                            src="/navLogo.svg"
                            alt="UseHistory Logo"
                            width={82}
                            height={82}
                            className="mt-1 mb-1"
                        />
                    </Link>


                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {

                            let linkHref = item.href;

                            // 1. Dashboard Link Path (logged in user)
                            if (item.name === 'Dashboard' && isLoggedIn) {
                                linkHref = DASHBOARD_BASE_PATHS[0] || '/dashboard';
                            }

                            else if (isLoggedIn && item.href.startsWith('#')) {
                                linkHref = '/' + item.href;
                            }
                            // --- FIX END ---

                            return (
                                <Link
                                    key={item.name}
                                    href={linkHref}
                                    onClick={() => handleNavItemClick(item.href)}
                                    className={`
                                        text-gray-600 hover:text-blue-600 font-medium transition duration-300 
                                        relative group py-2
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


                    {/* --- RIGHT SIDE CONTENT (Desktop: md:block) --- */}
                    <div className="hidden md:block">
                        {isLoggedIn ? (
                            <UserProfileDisplay />
                        ) : (
                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
                                    Get Started
                                </button>
                            </Link>
                        )}
                    </div>
                    {/* --- END RIGHT SIDE CONTENT --- */}


                    {/* Mobile Menu Button (md:hidden) */}
                    <div className="md:hidden flex items-center">
                        {isLoggedIn && (
                            // Mobile: Bell icon
                            <button
                                onClick={() => alert('Mobile Notification Overlay Triggered')}
                                className="relative p-1 text-gray-600 hover:text-blue-600 transition-colors mr-3"
                                aria-label="Notifications"
                            >
                                <Bell size={24} />

                            </button>
                        )}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Mobile Menu Content --- */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
                ${isOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0 pointer-events-none'}
                bg-white/95 backdrop-blur-sm shadow-inner
                `}
            >
                <div className="flex flex-col space-y-1 px-4 pt-2 pb-3">

                    {/* Logged in User Info for Mobile */}
                    {isLoggedIn && (
                        <div className="flex items-center space-x-3 mb-4 p-2 bg-gray-50 rounded-lg">
                            <UserCircleIcon className="h-8 w-8 text-[#3B82F6] flex-shrink-0" />
                            <div>
                                <p className="text-sm font-semibold text-gray-800">John Smith</p>
                                <p className="text-xs text-blue-600">Logged in</p>
                            </div>
                        </div>
                    )}

                    {/* Nav Items */}
                    {navItems.map((item) => {
                        let linkHref = item.href;

                        if (item.name === 'Dashboard' && isLoggedIn) {
                            linkHref = DASHBOARD_BASE_PATHS[0] || '/dashboard';
                        } else if (isUserLoggedIn(pathname) && item.href.startsWith('#')) {
                            // Fix for mobile menu as well
                            linkHref = '/' + item.href;
                        }

                        return (
                            <Link
                                key={item.name}
                                href={linkHref}
                                onClick={() => handleNavItemClick(item.href)}
                                className={`
                                    block px-3 py-2 rounded-md text-base font-medium transition duration-300
                                    ${isActive(item.href)
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    {isLoggedIn ? (
                        <Link href={DASHBOARD_BASE_PATHS[0] || '/dashboard'} onClick={() => setIsOpen(false)}>
                            <button className={`mt-4 w-full px-5 py-2 bg-blue-600 text-white font-medium rounded-lg 
                                hover:bg-blue-700 transition duration-300 shadow-md`}>
                                View Dashboard
                            </button>
                        </Link>
                    ) : (
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                            <button className={`mt-4 w-full px-5 py-2 bg-blue-600 text-white font-medium rounded-lg 
                                hover:bg-blue-700 transition duration-300 shadow-md`}>
                                Get Started
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;


