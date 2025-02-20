import { Link } from 'react-router-dom';

function ApplicationsCard02(props) {
    return (
        <div className="col-span-full overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-3">
            <div className="flex h-full flex-col">
                {/* Image */}
                <img className="w-full" src={props.image} width="286" height="160" alt={props.name} />
                {/* Card Content */}
                <div className="flex grow flex-col p-5">
                    {/* Card body */}
                    <div className="grow">
                        {/* Header */}
                        <header className="mb-2">
                            <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{props.title}</h3>
                            <div className="text-sm">{props.content}</div>
                        </header>
                        {/* Price */}
                        <div className="mb-4 flex items-center space-x-2">
                            <div className="inline-flex rounded-full bg-green-500/20 px-2.5 py-0.5 text-center text-sm font-medium text-green-700">
                                {props.deal}
                            </div>
                            <div className="inline-flex text-sm font-medium text-gray-400 line-through dark:text-gray-500">{props.price}</div>
                        </div>
                    </div>
                    {/* Card footer */}
                    <div>
                        <Link
                            className="btn-sm w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                            to={props.link}
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicationsCard02;
