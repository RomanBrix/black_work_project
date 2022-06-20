import { Outlet } from "react-router-dom"
import { MainHeader } from "./header"


export function MainLayout(props) {
    return(
        <>
            <MainHeader/>
            <Outlet/>
        </>
    )
}