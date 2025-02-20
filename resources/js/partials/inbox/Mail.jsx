import { useState } from 'react';

function Mail(props) {
    const [open, setOpen] = useState(props.open);

    return (
        <div className="py-6">
            {/* Header */}
            <header className="flex items-start">
                {/* Avatar */}
                <img className="mr-3 shrink-0 rounded-full" src={props.image} width="40" height="40" alt={props.name} />
                {/* Meta */}
                <div className="grow">
                    <div className="mb-0.5 items-start justify-between sm:flex">
                        {/* Message author */}
                        <div className="mb-2 items-center sm:mb-0 xl:flex">
                            <button
                                className="truncate text-left text-sm font-semibold text-gray-800 dark:text-gray-100"
                                onClick={() => setOpen(!open)}
                            >
                                {props.name}
                            </button>
                            {open && (
                                <>
                                    <div className="mx-1 hidden text-sm text-gray-400 dark:text-gray-600 xl:block">·</div>
                                    <div className="text-xs dark:text-gray-500">{props.email}</div>
                                </>
                            )}
                        </div>
                        {/* Date */}
                        <div className="mb-2 whitespace-nowrap text-xs font-medium text-gray-500 sm:mb-0">{props.date}</div>
                    </div>
                    {/* To */}
                    {open && <div className="text-xs font-medium text-gray-500">To {props.recipients.join(', ')}</div>}
                    {/* Excerpt */}
                    {!open && <div className="text-sm">{props.excerpt}</div>}
                </div>
            </header>
            {/* Body */}
            {open && (
                <div className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-100" dangerouslySetInnerHTML={{ __html: props.message }}></div>
            )}
        </div>
    );
}

export default Mail;
