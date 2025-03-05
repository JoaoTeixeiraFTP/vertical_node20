import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Object>[] = [
    {
        accessorKey: 'problema',
        header: 'Resumo',
    },
    {
        accessorKey: 'status',
        header: 'Estado',
    },
    {
        accessorKey: 'pquem',
        header: 'Quem enviou?',
    },
    {
        accessorKey: 'pdata',
        header: 'Data',
    },
];
