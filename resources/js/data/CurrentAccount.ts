import { ColumnDef } from '@tanstack/react-table';

// export type CurrentAccount = {
//     cmdesc: string
//     nrdoc: number
//     edeb: number
//     ecred: number
//     usrdata: string
//     usrhora: string
//     saldo: number
// }

export const columns: ColumnDef<Object>[] = [
    {
        accessorKey: 'datalc',
        header: 'Data',
    },
    {
        accessorKey: 'dataven',
        header: 'Vencimento',
    },
    {
        id: 'idadevc',
        header: 'Idade vc',
        accessorFn: (row) => {
            const datalc = row['datalc'] ?? '-';

            const hoje = new Date();
            const dataLancamento = new Date(datalc);
            const diffDays = Math.floor((hoje.getTime() - dataLancamento.getTime()) / (1000 * 60 * 60 * 24));

            return diffDays;
        },
    },
    {
        accessorKey: 'cmdesc',
        header: 'Documento',
    },
    {
        accessorKey: 'edeb',
        header: 'Débito',
    },
    {
        accessorKey: 'ecred',
        header: 'Crédito',
    },
    {
        accessorKey: 'saldo',
        header: 'Saldo',
    },
];
