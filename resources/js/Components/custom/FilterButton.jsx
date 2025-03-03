import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover.jsx';
import { useEffect, useRef, useState } from 'react';

function FilterButton({ align }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <Popover className="relative inline-flex">
            <PopoverTrigger asChild>
                <button
                    ref={trigger}
                    className="btn sm:h-15 h-10 rounded-lg border-gray-200 bg-white px-2.5 text-gray-400 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600"
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                >
                    <span className="sr-only">Filtro</span>
                    <wbr />
                    <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM3 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM7 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z" />
                    </svg>
                </button>
            </PopoverTrigger>
            <PopoverContent className={'m-0 p-0'}>
                <div className="grid gap-4">
                    <div className="px-3 pb-2 pt-1.5 text-xs font-semibold uppercase text-gray-400 dark:text-gray-500">Filtros</div>
                    <form className={'m-0 p-0'}>
                        <ul>
                            <li className="px-3 py-1">
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm font-medium">Ultimas Faturas</span>
                                </label>
                            </li>
                            <li className="px-3 py-1">
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm font-medium">Total Gasto</span>
                                </label>
                            </li>
                        </ul>
                        <div className="border-t border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-700/60 dark:bg-gray-700/20">
                            <ul className="flex items-center justify-between">
                                <li>
                                    <button className="btn-xs border-gray-200 bg-white text-red-500 hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
                                        Limpar
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="btn-xs bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                                        onClick={() => setDropdownOpen(false)}
                                        onBlur={() => setDropdownOpen(false)}
                                    >
                                        Aplicar
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default FilterButton;
