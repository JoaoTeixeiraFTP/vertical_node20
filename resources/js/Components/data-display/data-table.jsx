'use client';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { router } from '@inertiajs/react';

export function DataTable({ columns, data, typeDocument, searchField }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleRowClick = (typeDocument, id) => {
        router.get(`/finance/document/${typeDocument}/${id}`);
    };

    return (
        <div className="rounded-md">
            <Table>
                <TableHeader className={'bg-gray-100 dark:bg-gray-700'}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => (
                                <TableHead key={index} className={'bg-violet-300/20 text-[1.2em] dark:bg-gray-700'}>
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className={'hover:border-l-2 hover:border-violet-500'}
                                onClick={() => handleRowClick(typeDocument, row.original[searchField])}
                                key={row.original[searchField]}
                                data-state={row.getIsSelected() && 'selected'}
                            >
                                {row.getVisibleCells().map((cell, index) => (
                                    <TableCell key={index}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow key={'no-key-no-result-0000'}>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
