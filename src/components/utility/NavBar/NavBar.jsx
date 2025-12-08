// 'use client';

// import React, { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';


// const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Contact', href: '#contact-us' },
//     { name: 'About', href: '/about' },
//     { name: 'FAQs', href: '/faqs' },
//     { name: 'Dashboard', href: '/login' },
// ];

// const Navbar = () => {
//     const pathname = usePathname();
//     const [isOpen, setIsOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);


//     const isActive = (href) => {
//         if (href === '/') {
//             return pathname === href;
//         }
//         return pathname.startsWith(href);
//     };


//     return (
//         <header className={`
//       fixed top-0 left-0 w-full bg-white z-50 transition-all shadow-lg duration-300 
//       ${isScrolled ? 'shadow-lg bg-white backdrop-blur-sm' : 'bg-white'}
//     `}>
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
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 className={`
//                   text-gray-600 hover:text-blue-600 font-medium transition duration-300 
//                   relative group
//                   ${isActive(item.href) ? 'text-blue-600' : ''}
//                 `}
//                             >
//                                 {item.name}
//                                 <span className={`
//                   absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out
//                   ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}
//                 `}></span>
//                             </Link>
//                         ))}
//                     </div>

//                     {/* Get Started Button */}
//                     <div className="hidden md:block">
//                         <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
//                             Get Started
//                         </button>
//                     </div>

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

//             <div
//                 className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
//           ${isOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}
//         `}
//             >
//                 <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 bg-white/95 backdrop-blur-sm shadow-inner">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.name}
//                             href={item.href}
//                             onClick={() => setIsOpen(false)}
//                             className={`
//                 block px-3 py-2 rounded-md text-base font-medium transition duration-300
//                 ${isActive(item.href)
//                                     ? 'bg-blue-50 text-blue-700'
//                                     : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
//                                 }
//               `}
//                         >
//                             {item.name}
//                         </Link>
//                     ))}
//                     <button className={`mt-3 w-full px-5 py-2 bg-blue-600 text-white font-medium rounded-lg 
//             hover:bg-blue-700 transition duration-300 shadow-md`}>
//                         Get Started
//                     </button>
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
import { Menu, X } from 'lucide-react';


const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '#contact-us' },
    { name: 'About', href: '#about-section' },   // <-- CHANGED TO HASH LINK
    { name: 'FAQs', href: '#faqs-section' },     // <-- CHANGED TO HASH LINK
    { name: 'Dashboard', href: '/login' },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // State to track the active section based on scroll position
    const [activeSection, setActiveSection] = useState('/'); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Scroll effect for shadow/background change
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Intersection Observer for Active State (Scroll-based)
    useEffect(() => {
        // Only run observer logic on the root path where these sections exist
        if (pathname !== '/') return; 

        const sectionIds = ['contact-us', 'about-section', 'faqs-section'];
        const sectionElements = sectionIds
            .map(id => document.getElementById(id))
            .filter(el => el != null);

        // Options: Target the element when it is in the center 50% of the viewport
        const observerOptions = {
            root: null, 
            rootMargin: '-50% 0px -50% 0px', 
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            let foundActive = null;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Map the section ID to a recognizable string for state
                    if (entry.target.id === 'contact-us') foundActive = 'contact';
                    if (entry.target.id === 'about-section') foundActive = 'about';
                    if (entry.target.id === 'faqs-section') foundActive = 'faqs';
                }
            });
            
            // If a section is found active, set the state.
            if (foundActive) {
                setActiveSection(foundActive);
            } 
            // If we are near the top, default to Home ('/')
            else if (window.scrollY < 150) { 
                setActiveSection('/');
            }


        }, observerOptions);

        sectionElements.forEach(el => observer.observe(el));

        return () => {
            sectionElements.forEach(el => observer.unobserve(el));
        };
    }, [pathname]);


    // Active status logic checks both path and scroll state
    const isActive = (itemHref) => {
        // 1. Handle Home link
        if (itemHref === '/') {
            // Active if on root path AND no scroll-section is active
            return pathname === '/' && activeSection === '/'; 
        }
        
        // 2. Handle scroll-to links (Contact, About, FAQs)
        if (itemHref.startsWith('#')) {
             // Map hash link to state value
            const sectionKey = itemHref.replace('#', '').replace('-section', '');
            return activeSection === sectionKey;
        }

        // 3. Handle regular page links (Dashboard)
        if (itemHref.startsWith('/')) {
            return pathname.startsWith(itemHref);
        }
        
        return false;
    };


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

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
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
                        ))}
                    </div>

                    {/* Get Started Button */}
                    <div className="hidden md:block">
                        <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
                            Get Started
                        </button>
                    </div>

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

            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
          ${isOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}
        `}
            >
                <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 bg-white/95 backdrop-blur-sm shadow-inner">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
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
                    ))}
                    <button className={`mt-3 w-full px-5 py-2 bg-blue-600 text-white font-medium rounded-lg 
            hover:bg-blue-700 transition duration-300 shadow-md`}>
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;


