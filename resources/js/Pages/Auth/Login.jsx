import {
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter, Dialog
} from '@/Components/ui/dialog.jsx';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Button } from '@/Components/ui/button.jsx';
import Loading from '@/Components/Loading.jsx';
import LoginForm from '@/Components/LoginForm.jsx';

export default function Login({ status, authImage, subscriber }) {

    const [isLoading, setIsLoading] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const checkUserStatus = () => {
        const url = '/'+ subscriber + '/vertical?subscriber='+subscriber
        axios.get(url)
            .then(function (response) {
                // handle success
                if(response.data.data.access_token){
                    setIsLoading(false);
                    setIsActive(true);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
            <main className="bg-white dark:bg-gray-900">
                <div className="relative md:flex">
                    <div className="md:w-1/2">
                        <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">
                            {/* Header */}
                            <div className="flex-1">
                                <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                                    {/* Logo */}
                                    <Link className="block" to="/">
                                        <svg className="fill-violet-500" xmlns="http://www.w3.org/2000/svg"
                                             width={32} height={32}>
                                            <path
                                                d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            {isLoading
                                ? <Loading /> // Enquanto o dado não chegou, mostra o loading
                                : isActive
                                    ? <LoginForm subscriber={subscriber} />
                                    : <p className="text-center">Acesso negado.</p>}
                        </div>
                        <div className="absolute bottom-0 right-0 top-0 m-0 hidden p-0 md:block md:w-1/2"
                             aria-hidden="true">
                            <img className="h-full w-full object-cover object-center" src={authImage} width="760"
                                 height="1024" alt="Authentication" />
                        </div>
                    </div>
                </div>
            </main>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Acesso Negado</DialogTitle>
                        <DialogDescription>
                            Desculpe, você não tem permissão para acessar esta página. Por favor, entre em contato com o
                            administrador
                            do sistema.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => setShowModal(false)}>Fechar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </GuestLayout>
    );
}
