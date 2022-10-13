import NavMenu from "components/NavMenu/NavMenu";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function SharedLayout() {
    return (
        <>
            <NavMenu />
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
        </>
    )
}