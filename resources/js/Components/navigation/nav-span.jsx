export default function NavSpan({ active = false, className = '', children, ...props }) {
    return (
        <span
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 dark:border-indigo-600 dark:text-gray-100'
                    : '[&>span:first-child]dark:text-violet-500 [&>span:last-child]dark:text-white border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-white dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300 [&>span:first-child]:text-violet-500 [&>span:last-child]:text-gray-900') +
                className
            }
        >
            {children}
        </span>
    );
}
