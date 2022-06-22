import { Outlet } from "react-router-dom"
import BalconyCallBack from "./callback"
import BalconyFooter from "./footer"
import { BalconyHeader } from "./header"
import BalconySideBar from "./sideBar"


export function BalconyLayout(props) {
    return(
        <>
            <BalconyHeader/>
            <BalconySideBar/>
            <BalconyCallBack/>
            <Outlet/>
            <BalconyFooter/>
        </>
    )
}