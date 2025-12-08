
import ModalContainer from '@/components/Modals/ModalContainer.jsx';
import SignupModal from '@/components/Modals/SignupModal.jsx';

export default function SignupRolePage({ params }) {
    const currentRole = params.role; 

    return (
        <ModalContainer title="Sign Up">
            <SignupModal currentRole={currentRole} />
        </ModalContainer>
    );
}