import { ColumnDef } from '@tanstack/react-table';
interface RowData {
    rdata: string;
    no: string;
    etotal: number;
    desc1: string;
    ecred?: number;
    ecredf?: number;
    edef?: number;
    edebf?: number;
    datalc: string;
    dataven: string;
}
export const columns: ColumnDef<RowData>[] = [
    {
        accessorKey: "datalc",
        header: "Data",
    },
    {
        accessorKey: "dataven",
        header: "Vencimento",
    },
    {
        id: "diferencaDatas",
        header: "Idade vc",
        cell: ({ row }) => {
            const dataLc = new Date(row.original.datalc);
            const dataVen = new Date(row.original.dataven);
            const diferenca = Math.ceil((dataVen.getTime() - dataLc.getTime()) / (1000 * 60 * 60 * 24));
            return diferenca;
        }
    },
    {
        accessorKey: "cmdesc",
        header: "Documento",
    },
    {
        accessorKey: "saldo",
        header: "Saldo",
    },
    {
        id: "naoRegularizado",
        accessorKey: "ecred",
        header: "Regularizado",
        cell: ({ row }) => {
            const ecred = row.original.ecred || 0;
            const ecredf = row.original.ecredf || 0;
            const edef = row.original.edef || 0;
            const edebf = row.original.edebf || 0;
            const naoRegularizado = (ecred - ecredf > 0 || edef - edebf > 0);
            return naoRegularizado ? 'Sim' : 'Não';
        }
    }
];
console.log(columns);