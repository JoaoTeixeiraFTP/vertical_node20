import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table.jsx';
import { useEffect, useState } from 'react';
import Loading from '@/Components/Loading.jsx';
import { DataTable } from '@/Components/data-display/data-table.jsx';
import { columns } from '@/data/CurrentAccount.ts';

export default function CurrentAccount({currentAccount}) {

    return (
        <AuthenticatedLayout header={<span className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Conta Corrente</span>}>
            <Head title="Conta Corrente" />

            <div className="">
                <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100">
                            {currentAccount === undefined
                                ? <Loading />
                                : <DataTable columns={columns} data={currentAccount.data} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
