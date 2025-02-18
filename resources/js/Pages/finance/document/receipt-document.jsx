import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import Loading from '@/Components/Loading.jsx';

export default function ReceiptDocument({ document }) {
    return <>
        <AuthenticatedLayout
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Recibo</span>}>
            <Head title="Recibo" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grow">

                                <div className="p-6 space-y-6">
                                    {document === undefined
                                        ? <Loading />
                                        : <section>
                                            <h2 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1">Informação
                                                do Cabeçalho</h2>
                                            <ul>
                                                <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                    <div
                                                        className="text-sm text-gray-800 dark:text-gray-100 font-medium">Número
                                                        do Recibo
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600 dark:text-gray-400">{document.data[0]['no'] ?? 'Não disponível'}</div>
                                                </li>
                                                <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                    <div
                                                        className="text-sm text-gray-800 dark:text-gray-100 font-medium">Nome
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600 dark:text-gray-400">{document.data[0]['nome'] ?? 'Não disponível'}</div>
                                                </li>
                                                <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                    <div
                                                        className="text-sm text-gray-800 dark:text-gray-100 font-medium">Total
                                                    </div>
                                                    {/*<div*/}
                                                    {/*    className="text-sm text-gray-600 dark:text-gray-400">{ number_format(document.data[0]['etotal'] ?? 0, 2, ',', '.')}</div>*/}
                                                </li>
                                                <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                    <div
                                                        className="text-sm text-gray-800 dark:text-gray-100 font-medium">Morada
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600 dark:text-gray-400">{document.data[0]['morada'] ?? 'Não disponível'}</div>
                                                </li>
                                                <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                    <div
                                                        className="text-sm text-gray-800 dark:text-gray-100 font-medium">Código
                                                        Postal
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600 dark:text-gray-400">{document.data[0]['codpost'] ?? 'Não disponível'}</div>
                                                </li>
                                            </ul>
                                        </section>}

                                    {document === undefined
                                        ? <Loading />
                                        : <section>
                                            <h2 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1">Linhas
                                                do Recibo</h2>
                                            {document.data.map((line) => (
                                                <ul>
                                                    <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                        <div
                                                            className="text-sm text-gray-800 dark:text-gray-100 font-medium">Número
                                                            do Documento
                                                        </div>
                                                        <div
                                                            className="text-sm text-gray-600 dark:text-gray-400">{line['ndoc'] ?? 'Não disponível'}</div>
                                                    </li>
                                                    <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                        <div
                                                            className="text-sm text-gray-800 dark:text-gray-100 font-medium">Número
                                                            do Recibo
                                                        </div>
                                                        <div
                                                            className="text-sm text-gray-600 dark:text-gray-400">{line['rno'] ?? 'Não disponível'}</div>
                                                    </li>
                                                    <li className="py-3 border-b border-gray-200 dark:border-gray-700/60 flex justify-between">
                                                        <div
                                                            className="text-sm text-gray-800 dark:text-gray-100 font-medium">Número
                                                            do Documento Relacionado
                                                        </div>
                                                        <div
                                                            className="text-sm text-gray-600 dark:text-gray-400">{line['nrdoc'] ?? 'Não disponível'}</div>
                                                    </li>
                                                </ul>
                                            ))}
                                        </section>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </>;
}
