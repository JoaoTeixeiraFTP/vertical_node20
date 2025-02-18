export const hexToRGB = (h) => {
    let r = 0;
    let g = 0;
    let b = 0;
    if (h.length === 4) {
        r = `0x${h[1]}${h[1]}`;
        g = `0x${h[2]}${h[2]}`;
        b = `0x${h[3]}${h[3]}`;
    } else if (h.length === 7) {
        r = `0x${h[1]}${h[2]}`;
        g = `0x${h[3]}${h[4]}`;
        b = `0x${h[5]}${h[6]}`;
    }
    return `${+r},${+g},${+b}`;
};

export const formatValue = (value) =>
    Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 3,
        notation: 'compact',
    }).format(value);

export const formatThousands = (value) =>
    Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 3,
        notation: 'compact',
    }).format(value);

const BadgeColors = {
    COLORS: {
        test: {
            test: { style: 'style-violet-600 bg-violet-500/20' },
            test2: { style: 'style-sky-700 bg-sky-500/20' },
            test3: { style: 'style-green-700 bg-green-500/20' },
            test4: { style: 'style-yellow-700 bg-yellow-500/20' },
            test5: { style: 'style-red-700 bg-red-500/20' },
            test6: { style: 'style-blue-600 bg-blue-500/20' },
            test7: { style: 'style-gray-500 dark:style-gray-400 bg-gray-400/20' },
            test8: { style: 'style-gray-100 dark:style-gray-600 bg-gray-700 dark:bg-gray-200' },
        },
        invoices: [
            { name: 'Fatura', style: 'text-violet-700 bg-violet-400' },
            { name: 'Fatura Ecovalor', style: 'text-sky-700 bg-sky-500' },
            { name: 'Fatura Eletrónica', style: 'text-green-700 bg-green-500/20' },
            { name: 'Fatura Equipamento', style: 'text-yellow-700 bg-yellow-500/20' },
            { name: 'Fatura eSPap', style: 'text-red-700 bg-red-500/20' },
            { name: 'Fatura Europeia', style: 'text-blue-600 bg-blue-500/20' },
            { name: 'Fatura Instalações', style: 'text-gray-500 dark:text-gray-400 bg-gray-400/20' },
            {
                name: 'Fatura Manual',
                style: 'text-gray-100 dark:text-gray-600 bg-gray-700 dark:bg-gray-200',
            },
            { name: 'Fatura MS01', style: 'text-violet-600 bg-violet-500/20' },
            { name: 'Fatura MS02', style: 'text-sky-700 bg-sky-500/20' },
            { name: 'Fatura Pos Lisboa', style: 'text-green-700 bg-green-500/20' },
            { name: 'Fatura Pos Porto', style: 'text-yellow-700 bg-yellow-500/20' },
            { name: 'Fatura Proforma', style: 'text-red-700 bg-red-500/20' },
            { name: 'Fatura R&S01', style: 'text-blue-600 bg-blue-500/20' },
            { name: 'Fatura R&S02', style: 'text-gray-500 dark:text-gray-400 bg-gray-400/20' },
            {
                name: 'Fatura Recibo',
                style: 'text-gray-100 dark:text-gray-600 bg-gray-700 dark:bg-gray-200',
            },
            { name: 'Fatura RIC', style: 'text-violet-600 bg-violet-500' },
            { name: 'Fatura Serviços', style: 'text-sky-700 bg-sky-500' },
            { name: 'Fatura Simplificada', style: 'text-green-700 bg-green-500' },
            { name: 'Fatura UE', style: 'text-yellow-700 bg-yellow-500' },
            { name: 'Fatura Vila de rei', style: 'text-red-700 bg-red-500' },
            { name: 'Fatura_MR', style: 'text-blue-600 bg-[#0481BF]' },
            { name: 'Guia de Remessa', style: 'text-gray-500 dark:text-gray-400 bg-gray-400' },
            {
                name: 'Guia de Transporte',
                style: 'text-gray-100 dark:text-gray-600 bg-gray-700 dark:bg-gray-200',
            },
            { name: 'N/C Adiantamento', style: 'text-violet-600 bg-violet-500' },
            { name: 'Nota Crédito 78º,nº2', style: 'text-sky-700 bg-sky-500' },
            { name: 'Nota Crédito 78º,nº3', style: 'text-green-700 bg-green-500' },
            { name: 'Nota Crédito POS', style: 'text-yellow-700 bg-yellow-500' },
            { name: 'Nota de Devolução', style: 'text-red-700 bg-red-500' },
            { name: 'Nota Débito 78º, nº3', style: 'text-blue-600 bg-blue-500' },
            { name: 'Nota Débito 78º, nº4', style: 'text-gray-500 dark:text-gray-400 bg-gray-400' },
            { name: 'Orçamento', style: 'text-gray-100 dark:text-gray-600 bg-gray-700 dark:bg-gray-200' },
        ],
        currentAccount: [],
        receipts: [],
        orders: [
            { name: 'Pendente', style: 'style-sky-700 bg-sky-500/20' },
            { name: 'Concluída', style: 'style-green-700 bg-green-500/20' },
            { name: 'Em andamento', style: 'style-yellow-700 bg-yellow-500/20' },
        ],
    },
};

export const getBadgeColors = (tipo) => {
    return BadgeColors.COLORS.invoices.find(({ name }) => name === tipo).style;
};
