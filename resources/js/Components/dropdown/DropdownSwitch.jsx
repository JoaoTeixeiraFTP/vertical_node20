import { useEffect, useRef, useState } from 'react';
import Transition from '../../utils/Transition.jsx';

import DropdownImage01 from '../../../../../Documents/mosaicreact/mosaic-react/src/images/channel-01.png';
import DropdownImage02 from '../../../../../Documents/mosaicreact/mosaic-react/src/images/channel-02.png';
import DropdownImage03 from '../../../../../Documents/mosaicreact/mosaic-react/src/images/channel-03.png';
import DropdownImage from '../../../../../Documents/mosaicreact/mosaic-react/src/images/user-avatar-32.png';

function DropdownSwitch({ align }) {
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
        <div className="relative">
            <button
                ref={trigger}
                className="flex grow items-center truncate"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                <img className="mr-2 h-8 w-8 rounded-full" src={DropdownImage} width="32" height="32" alt="Group 01" />
                <div className="truncate">
                    <span className="text-sm font-medium group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-200">Acme Inc.</span>
                </div>
                <svg className="ml-1 h-3 w-3 shrink-0 fill-current text-gray-400 dark:text-gray-500" viewBox="0 0 12 12">
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                </svg>
            </button>
            <Transition
                className={`absolute top-full z-10 mt-1 min-w-60 origin-top-right overflow-hidden rounded-lg border border-gray-200 bg-white py-1.5 shadow-lg dark:border-gray-700/60 dark:bg-gray-800 ${align === 'right' ? 'right-0' : 'left-0'}`}
                show={dropdownOpen}
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <ul ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
                    <li>
                        <a
                            className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                            href="#0"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex grow items-center truncate">
                                    <img className="mr-2 h-7 w-7 rounded-full" src={DropdownImage01} width="28" height="28" alt="Channel 01" />
                                    <div className="truncate">Acme Inc.</div>
                                </div>
                                <svg className="ml-1 h-3 w-3 shrink-0 fill-current text-violet-500" viewBox="0 0 12 12">
                                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                            href="#0"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex grow items-center truncate">
                                    <img className="mr-2 h-7 w-7 rounded-full" src={DropdownImage02} width="28" height="28" alt="Channel 02" />
                                    <div className="truncate">Acme Limited</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                            href="#0"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex grow items-center truncate">
                                    <img className="mr-2 h-7 w-7 rounded-full" src={DropdownImage03} width="28" height="28" alt="Channel 03" />
                                    <div className="truncate">Acme Srl</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </Transition>
        </div>
    );
}

export default DropdownSwitch;
