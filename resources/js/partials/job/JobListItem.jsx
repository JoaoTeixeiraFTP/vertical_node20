import { Link } from 'react-router-dom';

function JobListItem(props) {
    return (
        <div
            className={`rounded-xl bg-white px-5 py-4 shadow-sm dark:bg-gray-800`}
        >
            <div className="items-center justify-between space-x-2 space-y-4 md:flex md:space-y-0">
                {/* Left side */}
                <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="mt-1 h-9 w-9 shrink-0">
                        <img
                            className="h-9 w-9 rounded-full"
                            src={props.image}
                            width="36"
                            height="36"
                            alt={props.company}
                        />
                    </div>
                    <div>
                        <Link
                            className="inline-flex font-semibold text-gray-800 dark:text-gray-100"
                            to={props.link}
                        >
                            {props.role}
                        </Link>
                        <div className="text-sm">{props.details}</div>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center space-x-4 pl-10 md:pl-0">
                    <div className="whitespace-nowrap text-sm italic text-gray-500 dark:text-gray-400">
                        {props.date}
                    </div>
                    {props.type && (
                        <div
                            className={`inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium ${
                                props.type === 'Featured'
                                    ? 'bg-yellow-500/20 text-yellow-700'
                                    : 'bg-green-500/20 text-green-700'
                            }`}
                        >
                            {props.type}
                        </div>
                    )}
                    <button
                        className={`${props.fav ? 'text-yellow-500' : 'text-gray-300 hover:text-gray-400 dark:text-gray-600 dark:hover:text-gray-500'}`}
                    >
                        <span className="sr-only">Bookmark</span>
                        <svg
                            className="h-4 w-3 fill-current"
                            width="12"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JobListItem;
