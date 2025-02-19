import Loading from '@/Components/Loading.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';

export default function ReceiptDocument({ document }) {
    return (
        <>
            <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Recibo</span>}>
                <Head title="Recibo" />

                <div className="">
                    <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="grow">
                                    <div className="space-y-6 p-6">
                                        {document === undefined ? (
                                            <Loading />
                                        ) : (
                                            <section>
                                                <h2 className="mb-1 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                                                    Informação do Cabeçalho
                                                </h2>
                                                <ul>
                                                    <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">Número do Recibo</div>
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                                            {document.data[0]['no'] ?? 'Não disponível'}
                                                        </div>
                                                    </li>
                                                    <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">Nome</div>
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                                            {document.data[0]['nome'] ?? 'Não disponível'}
                                                        </div>
                                                    </li>
                                                    <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">Total</div>
                                                        {/*<div*/}
                                                        {/*    className="text-sm text-gray-600 dark:text-gray-400">{ number_format(document.data[0]['etotal'] ?? 0, 2, ',', '.')}</div>*/}
                                                    </li>
                                                    <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">Morada</div>
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                                            {document.data[0]['morada'] ?? 'Não disponível'}
                                                        </div>
                                                    </li>
                                                    <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">Código Postal</div>
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                                            {document.data[0]['codpost'] ?? 'Não disponível'}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </section>
                                        )}

                                        {document === undefined ? (
                                            <Loading />
                                        ) : (
                                            <section>
                                                <h2 className="mb-1 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                                                    Linhas do Recibo
                                                </h2>
                                                {document.data.map((line) => (
                                                    <ul>
                                                        <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                            <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                                                                Número do Documento
                                                            </div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                                {line['ndoc'] ?? 'Não disponível'}
                                                            </div>
                                                        </li>
                                                        <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                            <div className="text-sm font-medium text-gray-800 dark:text-gray-100">Total</div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                                {line['total'] ?? 'Não disponível'}
                                                            </div>
                                                        </li>
                                                        <li className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                                                            <div className="text-sm font-medium text-gray-800 dark:text-gray-100">ETotal</div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                                {line['etotal'] ?? 'Não disponível'}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ))}
                                            </section>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
