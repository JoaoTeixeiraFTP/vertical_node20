import { ColumnDef } from '@tanstack/react-table';

export type Invoice = {
    ndoc: number
    nome: string
    morada: string
    local: string
    mndoc: string
}

export const columns: ColumnDef<Object>[] = [
    {
        accessorKey: "nome",
        header: "Nome do Cliente",
    },
    {
        accessorKey: "morada",
        header: "Endereço",
    },
    {
        accessorKey: "local",
        header: "Localização",
    },
    {
        accessorKey: "ndoc",
        header: "Número do Documento",
    },
    {
        accessorKey: "nmdoc",
        header: "Tipo de Documento",
    },
]
