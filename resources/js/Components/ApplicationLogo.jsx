export default function ApplicationLogo(props) {
    return (
        <>
            <a className="flex" href={route('home')}>
                <div className="flex items-center gap-2">
                    <div className="me-2 justify-center rounded-lg bg-blue-500 px-2 py-0 text-2xl font-bold">
                        V
                    </div>
                    <div className="font-medium dark:text-white">
                        <div>Vertical</div>
                    </div>
                </div>
            </a>
        </>
    );
}
