// app/(main)/login/page.js

import ModalContainer from '@/components/Modals/ModalContainer';
import SignupModal from '@/components/Modals/SignupModal';

export default function SignupPage() {

    return (
        <ModalContainer title="Sign UP" >
            <SignupModal />
        </ModalContainer>
    );
}