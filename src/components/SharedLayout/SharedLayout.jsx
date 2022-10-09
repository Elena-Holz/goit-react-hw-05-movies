import NavMenu from "components/NavMenu/NavMenu";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <>
            <NavMenu />
            <Outlet />
        </>
    )
}