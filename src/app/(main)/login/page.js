// app/(main)/login/page.js

import ModalContainer from '@/components/Modals/ModalContainer';
import LoginModal from '@/components/Modals/LoginModal'; 

export default function LoginPage() {

    return (
        <ModalContainer title="Sign In">
            <LoginModal />
        </ModalContainer>
    );
}