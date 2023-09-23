import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex justify-center items-center h-screen text-center">
            <div>
            <h1 className="text-4xl">Oops!!</h1>
            <p className="text-2xl">An unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.massage}</i>
            </p>
            <Link to={'/'}><button className="btn btn-success">Go back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;