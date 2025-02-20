function CustomersTableItem(props) {
    return (
        <tr>
            <td className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="flex items-center">
                    <label className="inline-flex">
                        <span className="sr-only">Select</span>
                        <input id={props.id} className="form-checkbox" type="checkbox" onChange={props.handleClick} checked={props.isChecked} />
                    </label>
                </div>
            </td>
            <td className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="relative flex items-center">
                    <button>
                        <svg
                            className={`shrink-0 fill-current ${props.fav ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="flex items-center">
                    <div className="mr-2 h-10 w-10 shrink-0 sm:mr-3">
                        <img className="rounded-full" src={props.image} width="40" height="40" alt={props.name} />
                    </div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">{props.name}</div>
                </div>
            </td>
            <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-left">{props.email}</div>
            </td>
            <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-left">{props.location}</div>
            </td>
            <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center">{props.orders}</div>
            </td>
            <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-left font-medium text-sky-600">{props.lastOrder}</div>
            </td>
            <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-left font-medium text-green-600">{props.spent}</div>
            </td>
            <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center">{props.refunds}</div>
            </td>
            <td className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                {/* Menu button */}
                <button className="rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                    <span className="sr-only">Menu</span>
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="2" />
                        <circle cx="10" cy="16" r="2" />
                        <circle cx="22" cy="16" r="2" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default CustomersTableItem;
