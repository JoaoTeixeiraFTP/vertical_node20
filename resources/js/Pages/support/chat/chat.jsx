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
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-700 p-16 relative mx-4">
                        {/* Mensagem principal */}
                        <div className="text-gray-900 dark:text-gray-100 text-xl">
                            Boa Tarde, eu gostaria de reportar um problema que tive de não entrar as Faturas
                        </div>

                        {/* Informações do Suporte */}
                        <div className="absolute top-4 right-4 flex flex-col items-center bg-gray-200 dark:bg-gray-500 p-3 rounded-lg shadow text-xs mx-4">
                            {/* Foto */}
                            <img
                                src={auth.user.avatar || "/images/avatar-01.jpg"}
                                alt="Suporte"
                                className="w-10 h-10 rounded-full border border-white mb-1"
                            />

                            {/* Nome */}
                            <p className="font-semibold text-sm">{auth.user.name}</p>

                            {/* E-mail */}
                            <div className="flex items-center gap-1 text-xs text-gray-800 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                <span>{auth.user.email}</span>
                            </div>

                            {/* Telefone */}
                            <div className="flex items-center gap-1 text-xs text-gray-800 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>917392650</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-screen mx-4">
                        {/* Imagem de fundo cobrindo todo o ecrã */}
                        <img src="/images/image.png" className="absolute inset-0 w-full h-full object-cover" />

                        {/* Chat estilo WhatsApp sobreposto */}
                        <div className="absolute inset-0 p-10 flex flex-col gap-4 overflow-y-auto pb-20">
                            <div className="bg-green-500 text-white text-lg p-4 rounded-xl self-start max-w-[45%]">
                            Olá! Como posso ajudar?
                            </div>

                            <div className="bg-gray-200 text-black text-lg p-4 rounded-xl self-end max-w-[45%] text-right">
                            Preciso de suporte!
                            </div>

                            <div className="bg-green-500 text-white text-lg p-4 rounded-xl self-start max-w-[45%]">
                            Claro! Diga-me o problema.
                            </div>

                            <div className="bg-gray-200 text-black text-lg p-4 rounded-xl self-end max-w-[45%] text-right">
                            Estou com dificuldades em aceder o sistema.
                            </div>

                            <div className="bg-green-500 text-white text-lg p-4 rounded-xl self-start max-w-[45%]">
                            Você já tentou redefinir a senha?
                            </div>
                        </div>

                        {/* Barra de envio de mensagens */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-200 dark:bg-gray-800 flex items-center gap-4 backdrop-blur-md border-t">
                            <button className="text-gray-500 text-2xl">
                            😊
                            </button>
                            <input 
                            type="text" 
                            placeholder="Escreva uma mensagem..." 
                            className="flex-1 p-3 rounded-full border border-gray-300 dark:text-gray-500 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button className="bg-green-500 text-white px-4 py-2 rounded-full text-lg mx-4">
                            ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
