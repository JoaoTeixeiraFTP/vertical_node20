import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/form/InputError.jsx';
import InputLabel from '@/Components/form/InputLabel.jsx';
import Modal from '@/Components/modal/Modal.jsx';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Eliminar Conta</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Depois que a conta for excluída, todos os recursos e dados serão excluídos permanentemente. Antes de excluir a conta, por favor
                    faça o download de qualquer dado ou informação que deseja reter.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Eliminar Conta</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Tem a certeza que pretende eliminar a conta?</h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Depois que a conta for excluída, todos os recursos e dados serão excluídos permanentemente. Insira a palavra-passe para confirmar
                        que gostaria de excluir a conta permanentemente.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Palavra-Passe"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Eliminar Conta
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
