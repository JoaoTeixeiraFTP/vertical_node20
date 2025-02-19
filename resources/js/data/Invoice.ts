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
        accessorKey: 'fdata',
        header: 'Data',
    },
    {
        accessorKey: 'pdata',
        header: 'Vencimente',
    },
    {
        accessorKey: 'nmdoc',
        header: 'Documento',
    },
    {
        accessorKey: 'etotal',
        header: 'Valor',
    },
];
