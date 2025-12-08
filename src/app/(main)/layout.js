

import Navbar from "@/components/utility/NavBar/NavBar"; 
import Footer from "@/components/utility/Footer/Footer"; 

export default function MainLayout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <main className="pt-[85px] min-h-screen"> 
                {children}
            </main>
            
       
        </>
    );
}