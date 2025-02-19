import { ColumnDef } from '@tanstack/react-table';

// export type Receipt = {
//     no: number
//     nome: string
//     etotal: string
// }

export const columns: ColumnDef<Object>[] = [
    {
        accessorKey: 'rdata',
        header: 'Data',
    },
    {
        id: 'reciboCliente',
        accessorKey: 'no',
        header: 'Recibo',
        cell: ({ row }) => `Recibo de cliente ${row.original.no}`,
    },
    {
        accessorKey: 'etotal',
        header: 'Valor Total',
    },
    {
        accessorKey: 'desc1',
        header: 'Observações',
    },
];
