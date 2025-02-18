import { useEffect, useState } from 'react';
import Invoices from './InvoicesTableItem.jsx';

function InvoicesTable({ selectedItems }) {
    const invoices = [
        {
            id: '0',
            invoice: '#123567',
            total: '$129.00',
            status: 'Overdue',
            customer: 'Dominik Lamakani',
            issueddate: '22/07/2024',
            paiddate: '-',
            type: 'Subscription',
        },
        {
            id: '1',
            invoice: '#779912',
            total: '$59.00',
            status: 'Paid',
            customer: 'Mark Cameron',
            issueddate: '19/07/2024',
            paiddate: '20/07/2024',
            type: 'Subscription',
        },
        {
            id: '2',
            invoice: '#889924',
            total: '$89.00',
            status: 'Paid',
            customer: 'Sergio Gonnelli',
            issueddate: '17/07/2024',
            paiddate: '19/07/2024',
            type: 'One-time',
        },
        {
            id: '3',
            invoice: '#897726',
            total: '$129.00',
            status: 'Due',
            customer: 'Manuel Garbaya',
            issueddate: '04/07/2024',
            paiddate: '-',
            type: 'Subscription',
        },
        {
            id: '4',
            invoice: '#123567',
            total: '$129.00',
            status: 'Due',
            customer: 'Cool Robot',
            issueddate: '04/07/2024',
            paiddate: '-',
            type: 'Subscription',
        },
        {
            id: '5',
            invoice: '#896644',
            total: '$129.00',
            status: 'Paid',
            customer: 'Mark Cameron',
            issueddate: '04/07/2024',
            paiddate: '09/07/2024',
            type: 'One-time',
        },
        {
            id: '6',
            invoice: '#136988',
            total: '$69.00',
            status: 'Paid',
            customer: 'Glenn Thomas',
            issueddate: '01/07/2024',
            paiddate: '01/07/2024',
            type: 'One-time',
        },
        {
            id: '7',
            invoice: '#442206',
            total: '$129.00',
            status: 'Overdue',
            customer: 'Dominik Lamakani',
            issueddate: '22/06/2024',
            paiddate: '-',
            type: 'Subscription',
        },
        {
            id: '8',
            invoice: '#764321',
            total: '$89.00',
            status: 'Paid',
            customer: 'Brian Halligan',
            issueddate: '21/06/2024',
            paiddate: '29/06/2024',
            type: 'One-time',
        },
        {
            id: '9',
            invoice: '#908764',
            total: '$129.00',
            status: 'Due',
            customer: 'Carolyn McNeail',
            issueddate: '17/06/2024',
            paiddate: '-',
            type: 'Subscription',
        },
    ];

    const [selectAll, setSelectAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(invoices);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setIsCheck(list.map((li) => li.id));
        if (selectAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setSelectAll(false);
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== id));
        }
    };

    useEffect(() => {
        selectedItems(isCheck);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCheck]);

    return (
        <div className="relative rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <header className="px-5 py-4">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    Invoices <span className="font-medium text-gray-400 dark:text-gray-500">67</span>
                </h2>
            </header>
            <div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto dark:text-gray-300">
                        {/* Table header */}
                        <thead className="border-b border-t border-gray-100 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-700/60 dark:bg-gray-900/20 dark:text-gray-400">
                            <tr>
                                <th className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="flex items-center">
                                        <label className="inline-flex">
                                            <span className="sr-only">Select all</span>
                                            <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                        </label>
                                    </div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Invoice</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Total</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Status</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Customer</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Issued on</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Paid on</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Type</div>
                                </th>
                                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                                    <div className="text-left font-semibold">Actions</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="divide-y divide-gray-100 text-sm dark:divide-gray-700/60">
                            {list.map((invoice) => {
                                return (
                                    <Invoices
                                        key={invoice.id}
                                        id={invoice.id}
                                        invoice={invoice.invoice}
                                        total={invoice.total}
                                        status={invoice.status}
                                        customer={invoice.customer}
                                        issueddate={invoice.issueddate}
                                        paiddate={invoice.paiddate}
                                        type={invoice.type}
                                        handleClick={handleClick}
                                        isChecked={isCheck.includes(invoice.id)}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default InvoicesTable;
