import Loading from '@/Components/custom/Loading';
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

            <div className="">
                <div className="mx-auto py-2">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Chat</div>
                    </div>
                </div>
            </div>
            
            

                                            {document === undefined ? (
                                    <Loading />
                                ) : (
                                    <div className="mx-auto max-w-5xl grow rounded-md bg-[#fffff7] p-6 shadow-lg shadow-gray-300/50 dark:bg-gray-700 dark:shadow-gray-900/50">
                                        <div className="space-y-8 p-6">
                                            <div className="flex items-center">
                                                <div className="flex w-1/2 flex-col">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Ptipo</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['ptipo'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                                <div className="flex w-1/2 flex-col pl-4">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Nopat</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['nopat'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <footer className="mt-6">
                                            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-300">
                                                <button
                                                    className="btn ml-3 bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-600"
                                                    onClick={() => history.back()}
                                                >
                                                    Voltar
                                                </button>
                                                <button className="btn ml-3 bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-600">
                                                    Download Recibo
                                                </button>
                                            </div>
                                        </footer>
                                    </div>
                                )}
        </AuthenticatedLayout>
    );
}
