import { ColumnDef } from '@tanstack/react-table';

// export type Receipt = {
//     no: number
//     nome: string
//     etotal: string
// }

export const columns: ColumnDef<Object>[] = [
    {
        accessorKey: "rdata",
        header: "Data",
    },
    {
        accessorKey: "etotal",
        header: "Valor Total",
    },
    {
        accessorKey: "nome",
        header: "Nome do Cliente",
    },
]
