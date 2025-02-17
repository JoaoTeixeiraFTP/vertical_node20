import { ColumnDef } from '@tanstack/react-table';

export type CurrentAccount = {
    cmdesc: string
    nrdoc: number
    edeb: number
    ecred: number
    usrdata: string
    usrhora: string
    saldo: number
}

export const columns: ColumnDef<Object>[] = [
    {
        accessorKey: "cmdesc",
        header: "Descrição",
    },
    {
        accessorKey: "nrdoc",
        header: "Número do Documento",
    },
    {
        accessorKey: "edeb",
        header: "Débito",
    },
    {
        accessorKey: "ecred",
        header: "Crédito",
    },
    {
        accessorKey: "usrdata",
        header: "Data do Utilizador",
    },
    {
        accessorKey: "usrhora",
        header: "Hora do Utilizador",
    },
    {
        accessorKey: "saldo",
        header: "Saldo",
    },
]
