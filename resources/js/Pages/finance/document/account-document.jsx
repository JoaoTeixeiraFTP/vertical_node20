import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import Loading from '@/Components/Loading.jsx';

export default function AccountDocument({ document }){
    return <>
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Conta Corrente</span>}>
            <Head title="Conta Corrente" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {document === undefined
                                ? <Loading />
                            :<div
                                className="grow max-w-5xl mx-auto bg-[#fffff7] dark:bg-gray-700 shadow-lg shadow-gray-300/50 dark:shadow-gray-900/50 rounded-md p-6">
                                <div className="p-6 space-y-8">

                                    <div className="flex items-center">
                                        <div className="flex flex-col w-1/2">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Nome</div>
                                            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                { document.data[0]['nome'] ?? 'Não disponível'}
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-1/2 pl-4">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Número</div>
                                            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                { document.data[0]['nrdoc'] ?? 'Não disponível'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-4">
                                        <div className="flex flex-col w-1/2">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Série</div>
                                            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">Recibo
                                                de Cliente
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-1/2 pl-4">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Número do
                                                documento
                                            </div>
                                            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                { document.data[0]['nrdoc'] ?? 'Não disponível'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 overflow-hidden rounded-md">
                                        <table className="w-full text-left border-collapse">
                                            <thead
                                                className="text-xs uppercase text-gray-400 dark:text-white bg-gray-400 text-white">
                                            <tr>
                                                <th className="p-2 first:rounded-l-md last:rounded-r-md">Documento</th>
                                                <th className="p-2">Nº</th>
                                                <th className="p-2">Por Reg.</th>
                                                <th className="p-2">Regularizado</th>
                                                <th className="p-2 first:rounded-l-md last:rounded-r-md">Desconto</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="border-b">
                                                <td className="p-2">N/Fatura</td>
                                                <td className="p-2">{ document.data[0]['nrdoc'] ?? 'Não disponível'}</td>
                                                <td className="p-2">6.092,87</td>
                                                <td className="p-2">6.092,87</td>
                                                <td className="p-2">0,00</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex items-center mt-6">
                                        <div className="flex flex-col w-1/2">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Data do
                                                documento
                                            </div>
                                            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                { document.data[0]['datalc'] ?? 'Não disponível'}
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-1/2 pl-4 text-right">
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Total do
                                                documento
                                            </div>
                                            <div
                                                className="text-lg font-bold text-gray-800 dark:text-gray-100">6.092,87
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <footer className="mt-6">
                                    <div
                                        className="flex justify-between items-center border-t border-gray-200 dark:border-gray-300 pt-4">
                                        <button
                                            className="btn bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-300 dark:hover:bg-gray-600"
                                            onClick={(() =>history.back())}>Voltar
                                        </button>
                                        <button
                                            className="btn bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-600 ml-3">Download
                                            Recibo
                                        </button>
                                    </div>
                                </footer>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </>
}
