import Loading from '@/Components/custom/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/Components/ui/pagination.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { columns } from '@/data/Support.ts';  
import { Head, usePage } from '@inertiajs/react';

export default function Support({ auth }) {
    const { support } = usePage().props;

    const estadoColors = {
        'A Decorrer': 'bg-yellow-100',
        'Aguarda resposta': 'bg-red-100', 
        'Fechado': 'bg-green-100',
        'Em Análise': 'bg-gray-100', 
    };
    
    const updatedColumns = columns.map((col) => {
        if (col.accessorKey === 'status') { 
            return {
                ...col,
                cell: (props) => {
                    const status = props.getValue();
                    const bgColor = estadoColors[status] || 'bg-white'; 
                    return (
                        <div className="relative p-2 rounded">
                            <div className={`absolute inset-0 ${bgColor} bg-opacity-50 rounded-2xl`}></div> 
                            <div className="relative">{status}</div> 
                        </div>
                    );
                },
            };
        }
        return col;
    });

    const page = usePage();

    console.log(support);

    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Suporte</span>}
        >
            <Head title="Suporte" />

            <div className="grid grid-cols-4 gap-4 p-4">
                <div className="relative dark:bg-[#1F2937] bg-[#DCDCDC] text-white p-6 rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.6)]">
                    <h3 className="text-lg text-[#0A0A0A] dark:text-[#FFFFFF] font-semibold">Tempo Resposta:</h3>
                    <p className="text-3xl dark:text-white text-black font-light mt-2">1.30H</p>
                </div>
                <div className="relative dark:bg-[#1F2937] bg-[#DCDCDC] text-white p-6 rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.6)]">
                    <h3 className="text-lg text-[#0A0A0A] dark:text-[#FFFFFF] font-semibold">Pedidos Pendentes:</h3>
                    <p className="text-3xl dark:text-white text-black font-light mt-2">13</p>
                </div>
                <div className="relative dark:bg-[#1F2937] bg-[#DCDCDC] text-white p-6 rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.6)]">
                    <h3 className="text-lg text-[#0A0A0A] dark:text-[#FFFFFF] font-semibold">Pedidos Fechados:</h3>
                    <p className="text-3xl dark:text-white text-black font-light mt-2">9</p>
                </div>
                <div className="relative dark:bg-[#1F2937] bg-[#DCDCDC] text-white p-6 rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.6)]">
                    <h3 className="text-lg text-[#0A0A0A] dark:text-[#FFFFFF] font-semibold">Abertos no útimo mês:</h3>
                    <p className="text-3xl dark:text-white text-black font-light mt-2">5</p>
                </div>
            </div>

            <div className="mx-auto px-4 py-2">
                <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                    <div className="p-2 text-gray-900 dark:text-gray-100">
                        {support === undefined || !support.data ? (
                            <Loading />
                        ) : (
                            <DataTable columns={updatedColumns} data={support.data} searchField={'pastamp'} typeDocument={'support'}/>
                        )}
                    </div>
                </div>

                {/* Paginação */}
                <Pagination>
                    {support === undefined || !support.data ? (
                        <div></div>
                    ) : (
                        <PaginationContent className={'mt-4 w-full justify-between'}>
                            <div className="text-center text-sm text-gray-500 sm:text-left">
                                Mostra de <span className="font-medium text-gray-600 dark:text-gray-300">{support.from} </span>a
                                <span className="font-medium text-gray-600 dark:text-gray-300"> {support.to} </span>
                                de
                                <span className="font-medium text-gray-600 dark:text-gray-300"> {support.total} </span>
                                resultados
                            </div>

                            <div className={'flex gap-2'}>
                                {support.links.map((link, index) =>
                                    index > 0 && index < support.last_page + 1 ? (
                                        <PaginationItem key={index}>
                                            <PaginationLink
                                                isActive={support.current_page === index}
                                                className={
                                                    'dark:border-gray-700/60" border-gray-200 bg-white text-gray-800 active:bg-violet-500 active:text-white dark:bg-gray-800 dark:text-gray-300'
                                                }
                                                href={link.url}
                                            >
                                                {link.label}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ) : (
                                        <span key={index}></span>
                                    ),
                                )}
                            </div>

                            <div className={'flex gap-1'}>
                                <PaginationItem>
                                    <PaginationPrevious href={support.prev_page_url} />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href={support.next_page_url} />
                                </PaginationItem>
                            </div>
                        </PaginationContent>
                    )}
                </Pagination>
            </div>
        </AuthenticatedLayout>
    );
}