import { ColumnDef } from '@tanstack/react-table';

// export type Invoice = {
//     ndoc: number
//     nome: string
//     morada: string
//     local: string
//     mndoc: string
// }

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
