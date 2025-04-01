import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Orders({ auth, document }) {
    const page = usePage();
    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Chat</span>}
        >
            <Head title="chat" />

            <div className="relative">
                <div className="mx-auto">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-[#4B535E] p-6 rounded-lg relative">
                        {/* Mensagem principal */}
                        <div className="text-gray-900 dark:text-gray-100 text-xl">
                            Boa Tarde, eu gostaria de reportar um problema que tive de não entrar as Faturas
                        </div>

                        {/* Informações do Suporte - Alinhadas com imagem à esquerda */}
                        <div className="absolute top-4 right-4 flex items-center gap-3 bg-gray-200 dark:bg-gray-700 p-2 rounded-lg shadow text-xs">
                            {/* Foto */}
                            <img
                                src={auth.user.avatar || "/images/avatar-01.jpg"} // Caminho correto
                                alt="Suporte"
                                className="w-10 h-10 rounded-full border border-white"
                            />

                            {/* Dados do Usuário */}
                            <div className="text-gray-900 dark:text-white leading-tight">
                                <p className="font-semibold">{auth.user.name}</p>
                                <p className="text-xs">{auth.user.email}</p>
                                <p className="text-xs">{auth.user.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
