import { useState } from 'react';

function AccordionTableRichItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <tbody className="text-sm">
            <tr>
                <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                    <div className="flex items-center text-gray-800">
                        <div className="mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 sm:mr-3">
                            <img
                                className="ml-1 rounded-full"
                                src={props.image}
                                width="40"
                                height="40"
                                alt={props.customer}
                            />
                        </div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">
                            {props.customer}
                        </div>
                    </div>
                </td>
                <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                    <div className="text-left">{props.email}</div>
                </td>
                <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                    <div className="text-left">{props.location}</div>
                </td>
                <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                    <div className="text-left">{props.date}</div>
                </td>
                <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                    <div className="text-left font-medium text-green-500">
                        {props.amount}
                    </div>
                </td>
                <td className="w-px whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                    <div className="flex items-center">
                        <button
                            className={`text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 ${open && 'rotate-180'}`}
                            aria-expanded={open}
                            onClick={() => setOpen(!open)}
                            aria-controls={`description-${props.id}`}
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-8 w-8 fill-current"
                                viewBox="0 0 32 32"
                            >
                                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            {/*
      Example of content revealing when clicking the button on the right side:
      Note that you must set a "colSpan" attribute on the <td> element,
      and it should match the number of columns in your table
      */}
            <tr
                id={`description-${props.id}`}
                role="region"
                className={`${!open && 'hidden'}`}
            >
                <td colSpan="10" className="px-2 py-3 first:pl-5 last:pr-5">
                    <div className="-mt-3 bg-gray-50 p-3 dark:bg-gray-950/[0.15] dark:text-gray-400">
                        <div className="mb-3 text-sm">
                            <div className="mb-1 font-medium text-gray-800 dark:text-gray-100">
                                {props.descriptionTitle}
                            </div>
                            <div>{props.descriptionBody}</div>
                        </div>
                        <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                            Approve
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    );
}

export default AccordionTableRichItem;
