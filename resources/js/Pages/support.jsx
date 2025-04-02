import Loading from '@/Components/custom/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/Components/ui/pagination.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { columns } from '@/data/Support.ts';  
import { Head, usePage } from '@inertiajs/react';
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Support({ auth }) {
    const { support } = usePage().props;

    const [status, setStatus] = useState("Filtrar por Status");
    const [tecnico, setTecnico] = useState("Técnico");
    const [data, setData] = useState("Data");
    const [prioridade, setPrioridade] = useState("Prioridade");
    const [openDropdown, setOpenDropdown] = useState(null);
    const handleApplyFilters = () => setOpenDropdown(null);

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

    return (
        <AuthenticatedLayout
            url={page.url}
            auth={auth}
            header={<span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">Suporte</span>}
        >
            <Head title="Suporte" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 px-4 w-full mx-auto">
                {["Tempo Resposta", "Pedidos Pendentes", "Pedidos Fechados", "Abertos no último mês"].map((title, i) => (
                    <div key={i} className="relative dark:bg-[#1F2937] bg-[#DCDCDC] text-white p-4 sm:p-6 rounded-xl shadow-md text-center">
                        <h3 className="text-sm sm:text-lg text-[#0A0A0A] dark:text-[#FFFFFF] font-semibold">{title}:</h3>
                        <p className="text-xl sm:text-3xl dark:text-white text-black font-light mt-2">{["1.30h", 13, 9, 5][i]}</p>
                    </div>
                ))}
            </div>

            <div className='px-4 py-2'>
                <div className="bg-[#1F2937] text-white px-4 py-2 w-full sm:w-20 text-center sm:text-left">Filtros</div>
                <div className="flex flex-col sm:flex-row items-center bg-[#111827] w-full relative z-50 space-y-2 sm:space-y-0">
                    {[{
                        label: status, options: ["A Decorrer", "Aguardar Resposta", "Fechado", "Em Análise"], setter: setStatus, id: "status"
                    }, {
                        label: tecnico, options: ["Técnico 1", "Técnico 2", "Técnico 3"], setter: setTecnico, id: "tecnico"
                    }, {
                        label: data, options: ["Últimos 7 Dias", "Últimos 30 Dias", "Últimos 60 Dias"], setter: setData, id: "data"
                    }, {
                        label: prioridade, options: ["Alta", "Média", "Baixa"], setter: setPrioridade, id: "prioridade"
                    }].map((filter, index) => (
                        <div key={index} className="relative w-full sm:w-1/5">
                            <button className="flex items-center justify-between bg-[#1F2937] text-white px-6 py-2 sm:py-3 w-full border border-gray-600"
                                onClick={() => setOpenDropdown(openDropdown === filter.id ? null : filter.id)}>
                                <span>{filter.label}</span>
                                <ChevronDown size={18} />
                            </button>
                            {openDropdown === filter.id && (
                                <div className="absolute mt-1 w-full bg-[#1F2937] text-white shadow-lg z-50">
                                    {filter.options.map((option, i) => (
                                        <div key={i} className="p-2 hover:bg-gray-700 cursor-pointer"
                                            onClick={() => {
                                                filter.setter(option);
                                                setOpenDropdown(null);
                                            }}>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto px-4 py-2">
                <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                    <div className="p-2 text-gray-900 dark:text-gray-100">
                        {support === undefined || !support.data ? <Loading /> : <DataTable columns={updatedColumns} data={support.data} searchField={'pastamp'} typeDocument={'support'}/>}
                    </div>
                </div>
                <Pagination>
                    {support !== undefined && support.data && (
                        <PaginationContent className='mt-4 w-full justify-between flex flex-col sm:flex-row items-center'>
                            <div className="text-center text-sm text-gray-500 sm:text-left">
                                Mostra de <span className="font-medium text-gray-600 dark:text-gray-300">{support.from}</span> a
                                <span className="font-medium text-gray-600 dark:text-gray-300"> {support.to} </span>
                                de <span className="font-medium text-gray-600 dark:text-gray-300"> {support.total} </span>
                                resultados
                            </div>
                            <div className='flex gap-2 flex-wrap justify-center'>
                                {support.links.map((link, index) => (
                                    index > 0 && index < support.last_page + 1 && (
                                        <PaginationItem key={index}>
                                            <PaginationLink isActive={support.current_page === index} href={link.url}>{link.label}</PaginationLink>
                                        </PaginationItem>
                                    )
                                ))}
                            </div>
                            <div className='flex gap-1'>
                                <PaginationItem><PaginationPrevious href={support.prev_page_url} /></PaginationItem>
                                <PaginationItem><PaginationNext href={support.next_page_url} /></PaginationItem>
                            </div>
                        </PaginationContent>
                    )}
                </Pagination>
            </div>
        </AuthenticatedLayout>
    );
}
