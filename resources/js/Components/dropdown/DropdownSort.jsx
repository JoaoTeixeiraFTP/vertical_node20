import { useEffect, useRef, useState } from 'react';
import Transition from '../../utils/Transition.jsx';

function DropdownSort({ align }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
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
        <div className="relative inline-flex">
            <button
                ref={trigger}
                className="group inline-flex items-center justify-center"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                <div className="flex items-center truncate">
                    <span className="truncate font-medium text-violet-500 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                        Newest
                    </span>
                    <svg
                        className="ml-1 h-3 w-3 shrink-0 fill-current text-gray-400 dark:text-gray-500"
                        viewBox="0 0 12 12"
                    >
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                </div>
            </button>

            <Transition
                className={`absolute top-full z-10 mt-1 origin-top-right overflow-hidden rounded-lg border border-gray-200 bg-white py-1.5 shadow-lg dark:border-gray-700/60 dark:bg-gray-800 ${
                    align === 'right' ? 'right-0' : 'left-0'
                }`}
                show={dropdownOpen}
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                >
                    <ul>
                        <li>
                            <a
                                className="flex items-center px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                                href="#0"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Oldest
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex items-center px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                                href="#0"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Popular
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    );
}

export default DropdownSort;
