import Loading from '@/Components/Loading.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';

export default function AccountDocument({ document }) {
    return (
        <>
            <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Detalhe Recibos</span>}>
                <Head title="Recibos" />

                <div className="">
                    <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                {document === undefined ? (
                                    <Loading />
                                ) : (
                                    <div className="mx-auto max-w-5xl grow rounded-md bg-[#fffff7] p-6 shadow-lg shadow-gray-300/50 dark:bg-gray-700 dark:shadow-gray-900/50">
                                        <div className="space-y-8 p-6">
                                            <div className="flex items-center">
                                                <div className="flex w-1/2 flex-col">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Nome</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['nome'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                                <div className="flex w-1/2 flex-col pl-4">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Número</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['no'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex items-center">
                                                <div className="flex w-1/2 flex-col">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Série</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">Recibo de Cliente</div>
                                                </div>
                                                <div className="flex w-1/2 flex-col pl-4">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Número do documento</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['rno'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 overflow-hidden rounded-md">
                                                <table className="w-full border-collapse text-left">
                                                    <thead className="bg-gray-400 text-xs uppercase text-gray-400 text-white dark:text-white">
                                                        <tr>
                                                            <th className="p-2 first:rounded-l-md last:rounded-r-md">Documento</th>
                                                            <th className="p-2">Nº do Documento</th>
                                                            <th className="p-2">Por Reg.</th>
                                                            <th className="p-2">Regularizado</th>
                                                            <th className="p-2">Desconto</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b">
                                                            <td className="p-2">{document.data[0]['desc1'] ?? 'Não disponível'}</td>
                                                            <td className="p-2">{document.data[0]['nrdoc'] ?? 'Não disponível'}</td>
                                                            <td className="p-2">{document.data[0]['eval'] ?? 'Não disponível'}</td>
                                                            <td className="p-2">{document.data[0]['erec'] ?? 'Não disponível'}</td>
                                                            <td className="p-2">{document.data[0]['desconto'] ?? 'Não disponível'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="mt-6 flex items-center">
                                                <div className="flex w-1/2 flex-col">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Data do documento</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['rdata'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                                <div className="flex w-1/2 flex-col pl-4 text-right">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Total do documento</div>
                                                    <div className="p-2">{document.data[0]['etotal'] ?? 'Não disponível'}</div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
