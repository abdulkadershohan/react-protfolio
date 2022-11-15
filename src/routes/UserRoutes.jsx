import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardDrawer from "../components/customDrawer/DashboardDrawer";
import Text from "../components/Text";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardDrawer />} />
                <Route element={<DashboardDrawer />}>
                    <Route path="/about" element={<Text />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
