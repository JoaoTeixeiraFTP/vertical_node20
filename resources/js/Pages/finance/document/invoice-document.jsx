import Loading from '@/Components/Loading.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';

export default function InvoiceDocument({ document }) {
    const formatEuro = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });
    return (
        <>
            <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Faturas</span>}>
                <Head title="Faturas" />

                <div className="">
                    <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                            <div className="p-2 text-gray-900 dark:text-gray-100">
                                <div className="mx-auto max-w-5xl grow rounded-md bg-[#fffff7] p-6 shadow-lg shadow-gray-300/50 dark:bg-gray-700 dark:shadow-gray-900/50">
                                    <div className="space-y-8 p-6">
                                        {document === undefined ? (
                                            <Loading />
                                        ) : (
                                            <section>
                                                <div className="flex items-center">
                                                    <div className="flex w-1/2 flex-col">
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">Nome</div>
                                                        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                            {document.data[0]['ft']['nome'] ?? 'Não disponível'}
                                                        </div>
                                                    </div>
                                                    <div className="flex w-1/2 flex-col pl-4">
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">Tipo de Documento</div>
                                                        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                            {document.data[0].ft.nmdoc ?? 'Não disponível'}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex items-center">
                                                    <div className="flex w-1/2 flex-col">
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">Endereço</div>
                                                        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                            {document.data[0]['ft']['morada'] ?? 'Não disponível'}
                                                        </div>
                                                    </div>
                                                    <div className="flex w-1/2 flex-col pl-4">
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">NIF</div>
                                                        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                            {document.data[0]['ft']['no'] ?? 'Não disponível'}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex items-center">
                                                    <div className="flex w-1/2 flex-col">
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">Código</div>
                                                        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                            {document.data[0]['ft']['fno'] ?? 'Não disponível'}
                                                        </div>
                                                    </div>
                                                    <div className="flex w-1/2 flex-col pl-4">
                                                        <div className="text-sm text-gray-600 dark:text-gray-400">Data</div>
                                                        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                                            {document.data[0]['ft']['fdata'] ?? 'Não disponível'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )}

                                        {document === undefined ? (
                                            <Loading />
                                        ) : (
                                            <section>
                                                <h3 className="mb-6 border-b border-gray-300 pb-3 text-xl font-extrabold leading-snug text-gray-800 dark:border-gray-300 dark:text-gray-100">
                                                    Linhas
                                                </h3>
                                                <div className="mt-6 overflow-hidden rounded-md">
                                                    <table className="w-full border-collapse text-left">
                                                        <thead className="bg-gray-400 text-xs uppercase text-gray-400 dark:text-gray-600">
                                                            <tr>
                                                                <th className="p-2 text-left first:rounded-l-md">Referência</th>
                                                                <th className="p-2 text-left first:rounded-l-md">Descrição</th>
                                                                <th className="p-2 text-left">Quantidade</th>
                                                                <th className="p-2 text-left">Pr.Unit</th>
                                                                <th className="p-2 text-left">Dsc 1</th>
                                                                <th className="p-2 text-left">Dsc2</th>
                                                                <th className="p-2 text-left">Total</th>
                                                                {/* <th className="p-2 text-left first:rounded-l-md">Descrição</th>
                                                                <th className="p-2 text-left">Quantidade</th>
                                                                <th className="p-2 text-left">Preço por Unidade</th>
                                                                <th className="p-2 text-left">Desconto</th>
                                                                <th className="p-2 text-left">Total</th>
                                                                <th className="p-2 text-left last:rounded-r-md">IVA</th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {document.data[0].fi.map((line) => (
                                                                <tr className="border-b border-gray-200 dark:border-gray-300">
                                                                    <td className="py-3 font-medium">{line.ref}</td>
                                                                    <td className="py-3 font-medium">{line.design}</td>
                                                                    <td className="py-3 font-medium">{line.qtt}</td>
                                                                    <td className="py-3 font-medium">{formatEuro.format(line.epv)}</td>
                                                                    <td className="py-3 font-medium">{formatEuro.format(line.desconto)}</td>
                                                                    <td className="py-3 font-medium">{formatEuro.format(line.desc2)}</td>
                                                                    <td className="py-3 font-medium">{formatEuro.format(line.etiliquido)}</td>
                                                                    {/* <td className="py-3 font-medium">{line.design}</td>
                                                                    <td className="py-3 font-medium">{line.qtt}</td>
                                                                    <td className="py-3 font-medium">{formatEuro.format(line.epv)}</td>
                                                                    <td className="py-3 font-medium">{formatEuro.format(line.desconto)}</td>
                                                                    <td className="py-3 font-medium">{formatEuro.format(line.etiliquido)}</td>
                                                                    <td className="py-3 font-medium">{line.iva}%</td> */}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <div className="flex w-full justify-end">
                                                        <div className="w-1/4">
                                                            <div className="flex justify-between">
                                                                <span className="me-2 w-1/2 py-3 text-right text-sm font-bold">Subtotal:</span>
                                                                <span className="w-1/2 py-3 text-right text-sm dark:text-white">
                                                                    {formatEuro.format(
                                                                        document.data[0].fi.reduce((n, { etiliquido }) => n + etiliquido, 0),
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="w-1/2 py-3 text-right text-sm font-bold">IVA:</span>
                                                                <span className="w-1/2 py-3 text-right text-sm dark:text-white">
                                                                    {formatEuro.format(document.data[0].fi.reduce((n, { iva }) => n + iva, 0))}
                                                                </span>
                                                            </div>
                                                            <div className="mt-2 flex justify-between font-bold">
                                                                <span className="w-1/2 py-3 text-right font-bold">Total:</span>
                                                                <span className="w-1/2 py-3 text-right text-sm dark:text-white">
                                                                    {formatEuro.format(
                                                                        document.data[0].fi.reduce(
                                                                            (n, { etiliquido, desconto }) => n + (etiliquido - desconto),
                                                                            0,
                                                                        ),
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )}
                                    </div>

                                    <footer className="mt-6">
                                        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-300">
                                            <button
                                                className="btn bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-300 dark:hover:bg-gray-600"
                                                onClick="history.back()"
                                            >
                                                Voltar
                                            </button>
                                            <button className="btn ml-3 bg-gray-400 text-white hover:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-600">
                                                Imprimir
                                            </button>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
