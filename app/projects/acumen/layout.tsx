"use client"

import { useEffect } from "react";
import { useUser } from "../UserContext";
import { FilterProvider } from "./context/FilterContext";

function Layout(
    { children }: { children: React.ReactNode },
) {
    const { dispatch } = useUser();
    useEffect(() => {
        dispatch({ type: "SETPROJECT", payload: { projectName: "Project Acumen" } })
    }, [])
    return (
        <>
            <FilterProvider>
                {children}
            </FilterProvider>
        </>
    );
}

export default Layout;
