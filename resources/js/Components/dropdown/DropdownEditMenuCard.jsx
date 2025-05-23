import { useEffect, useRef, useState } from 'react';
import Transition from '../../utils/Transition.jsx';

function DropdownEditMenuCard({ children, align, ...rest }) {
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
        <div {...rest}>
            <button
                ref={trigger}
                className={`rounded-full ${
                    dropdownOpen
                        ? 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300'
                        : 'bg-white text-gray-400 hover:text-gray-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                <span className="sr-only">Menu</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="2" />
                    <circle cx="10" cy="16" r="2" />
                    <circle cx="22" cy="16" r="2" />
                </svg>
            </button>
            <Transition
                show={dropdownOpen}
                tag="div"
                className={`absolute top-full z-10 mt-1 min-w-36 origin-top-right overflow-hidden rounded-lg border border-gray-200 bg-white py-1.5 shadow-lg dark:border-gray-700/60 dark:bg-gray-800 ${
                    align === 'right' ? 'right-0' : 'left-0'
                }`}
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <ul ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
                    {children}
                </ul>
            </Transition>
        </div>
    );
}

export default DropdownEditMenuCard;
