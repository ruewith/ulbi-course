import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
