import { ColumnDef } from '@tanstack/react-table';

export type Receipt = {
    no: number
    nome: string
    etotal: string
}

export const columns: ColumnDef<Object>[] = [
    {
        accessorKey: "no",
        header: "Número do No",
    },
    {
        accessorKey: "nome",
        header: "Nome do Cliente",
    },
    {
        accessorKey: "etotal",
        header: "Valor Total",
    },
]
