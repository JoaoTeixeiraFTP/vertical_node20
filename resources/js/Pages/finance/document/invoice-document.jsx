import Loading from '@/Components/Loading.jsx';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

export default function InvoiceDocument({ document }) {
    return <>
        <AuthenticatedLayout
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Faturas</span>}>
            <Head title="Faturas" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            <div
                                className="grow max-w-5xl mx-auto bg-[#fffff7] dark:bg-gray-700 shadow-lg shadow-gray-300/50 dark:shadow-gray-900/50 rounded-md p-6">

                                <div className="p-6 space-y-8">

                                    {document === undefined
                                        ? <Loading />
                                        : <section>
                                            <div className="flex items-center">
                                                <div className="flex flex-col w-1/2">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Nome</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['ft']['nome'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col w-1/2 pl-4">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Tipo de
                                                        Documento
                                                    </div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0].ft.nmdoc ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center mt-4">
                                                <div className="flex flex-col w-1/2">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Endereço
                                                    </div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['ft']['morada'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col w-1/2 pl-4">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">NIF</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['ft']['no'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center mt-4">
                                                <div className="flex flex-col w-1/2">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Código
                                                    </div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['ft']['fno'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col w-1/2 pl-4">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Data</div>
                                                    <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                        {document.data[0]['ft']['fdata'] ?? 'Não disponível'}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>}

                                    {document === undefined
                                        ? <Loading />
                                        : <section>
                                            <h3 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-extrabold border-b border-gray-300 dark:border-gray-300 pb-3 mb-6">
                                                Linhas
                                            </h3>
                                            <div className="mt-6 overflow-hidden rounded-md">
                                                <table className="w-full text-left border-collapse">
                                                    <thead className="text-xs uppercase text-gray-400 bg-gray-400">
                                                    <tr>
                                                        <th className="p-2 text-left first:rounded-l-md">Descrição</th>
                                                        <th className="p-2 text-left">Quantidade</th>
                                                        <th className="p-2 text-left">Preço por Unidade</th>
                                                        <th className="p-2 text-left">Desconto</th>
                                                        <th className="p-2 text-left">Total</th>
                                                        <th className="p-2 text-left last:rounded-r-md">IVA</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {document.data[0].fi.map((line) => (
                                                        <tr className="border-b border-gray-200 dark:border-gray-300">
                                                            <td className="py-3 font-medium">{line.design}</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                    <tfoot>
                                                    {/*<tr className="border-t border-gray-200 dark:border-gray-300">*/}
                                                    {/*    <td colSpan="5" className="py-3 text-right font-bold text-sm">Subtotal</td>*/}
                                                    {/*    <td className="py-3 text-sm dark:text-white">{ number_format(array_sum(array_column(document.data[0]['fi'], 'etiliquido')) ?? 0, 2, ',', '.') } €</td>*/}
                                                    {/*</tr>*/}
                                                    {/*<tr className="dark:border-gray-300">*/}
                                                    {/*    <td colSpan="5" className="py-3 text-right font-bold text-sm">IVA</td>*/}
                                                    {/*    <td className="py-3 text-sm dark:text-white">{ number_format(array_sum(array_column(document.data[0]['fi'], 'iva')) ?? 0, 2, ',', '.') } €</td>*/}
                                                    {/*</tr>*/}
                                                    {/*<tr className="dark:border-gray-300">*/}
                                                    {/*    <td colSpan="5" className="py-3 text-right font-bold text-sm">Desconto</td>*/}
                                                    {/*    <td className="py-3 text-sm dark:text-white">{ number_format(array_sum(array_column(document.data[0]['fi'], 'desconto')) ?? 0, 2, ',', '.') } €</td>*/}
                                                    {/*</tr>*/}
                                                    <tr>
                                                        <td colSpan="5" className="py-3 text-right font-bold">Total</td>
                                                        {/*<td className="py-3 dark:text-white">{ number_format(array_sum(array_map(function($linha) {*/}
                                                        {/*    return ($linha['etiliquido'] ?? 0) - ($linha['desconto'] ?? 0);*/}
                                                        {/*}, document.data[0]['fi'])) ?? 0, 2, ',', '.') } €</td>*/}
                                                    </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </section>}
                                </div>

                                <footer className="mt-6">
                                    <div
                                        className="flex justify-between items-center border-t border-gray-200 dark:border-gray-300 pt-4">
                                        <button
                                            className="btn bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-300 dark:hover:bg-gray-600"
                                            onClick="history.back()">Voltar
                                        </button>
                                        <button
                                            className="btn bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-600 ml-3">Imprimir
                                        </button>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </>;
}
