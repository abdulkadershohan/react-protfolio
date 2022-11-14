import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardDrawer from "../components/drawer/DashboardDrawer";
import Text from "../components/Text";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <DashboardDrawer>
                <Routes>
                    <Route path="/test" element={<Text />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </DashboardDrawer>

        </BrowserRouter>
    );
}
