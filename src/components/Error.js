import { useRouteError } from "react-router-dom"

export const Error = ()=> {
    const err = useRouteError();
   
    return (
        <div>
            <h1>Opss!!</h1>
            <h1>Something Went Wrong!!!!</h1>
            <h3>{err.status}-{err.statusText}</h3>
        </div>
    )
}