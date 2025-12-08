// // app/request-submitted/page.js
// 'use client';

// import ModalContainer from '@/components/Modals/ModalContainer';
// import { CheckCircle } from 'lucide-react';
// import Link from 'next/link';


// const SuccessModalContent = () => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center p-6">
      
//       {/* Success Icon */}
//       <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
//         <CheckCircle size={32} className="text-green-600" />
//       </div>

//       {/* Main Heading */}
//       <h2 className="text-2xl font-bold text-gray-900 mb-2">
//         Request Submitted!
//       </h2>

//       {/* Description */}
//       <p className="text-gray-600 mb-6">
//         We re connecting you with a verified notary. You ll receive a notification shortly.
//       </p>

//       <Link 
//         href="/" 
//         className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
//       >
//         Got It
//       </Link>
      
//     </div>
//   );
// };

// export default function RequestSubmittedPage() {
//     return (

//         <ModalContainer title=""> 
//             <SuccessModalContent />
//         </ModalContainer>
//     );
// }


// app/signup/submitted/page.js
'use client';

import ModalContainer from '@/components/Modals/ModalContainer';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const SuccessModalContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      
      {/* Success Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
        <CheckCircle size={32} className="text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Request Submitted!
      </h2>

      <p className="text-gray-600 mb-6">
        We re connecting you with a verified notary. You ll receive a notification shortly.
      </p>

      <Link 
        href="/" 
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
      >
        Got It
      </Link>
      
    </div>
  );
};

export default function SignupSubmittedPage() {
    return (
        <ModalContainer title=""> 
            <SuccessModalContent />
        </ModalContainer>
    );
}