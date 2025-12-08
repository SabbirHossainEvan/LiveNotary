// // app/(main)/layout.js
// import { Inter } from 'next/font/google';
// import '../../globals.css'; 
// import Navbar from '@/components/Navbar'; 

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//     title: 'Your App Title',
//     description: 'Main application layout.',
// };

// export default function MainLayout({ children }) {
//     return (
//         <html lang="en">
//             <body className={inter.className}>
//                 <Navbar /> 
                
//                 <main className="pt-[85px]">
//                     {children}
//                 </main>
//             </body>
//         </html>
//     );
// }

// app/(main)/layout.js



// app/(main)/layout.js

import Navbar from "@/components/utility/NavBar/NavBar"; 
import Footer from "@/components/utility/Footer/Footer"; 

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="pt-[85px] min-h-screen"> 
                {children}
            </main>
            
       
        </>
    );
}