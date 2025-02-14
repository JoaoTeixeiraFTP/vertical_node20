import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import Loading from '@/Components/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { columns } from '@/data/Invoice.tsx';
import { Badge } from '@/Components/ui/badge.jsx'
import { getBadgeColors } from '@/utils/Utils.js';

export default function Invoices({tableHeader, invoices }) {
    columns[4].cell = (props) => <Badge variant="simple" className={getBadgeColors(props.getValue())}>{props.getValue()}</Badge>
    // dd
    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Faturas</span>}>
            <Head title="Faturas" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {invoices === undefined
                                ? <Loading />
                                : <DataTable columns={columns} data={invoices.data} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
