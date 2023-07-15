import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err.data);
    return (
        <div>
            <h1>{err.data}</h1>
        </div>
    )
}

export default Error