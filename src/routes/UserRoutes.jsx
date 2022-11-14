import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardDrawer from "../components/customDrawer/DashboardDrawer";
import Text from "../components/Text";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <DashboardDrawer>
                <Routes>
                    <Route path="/about" element={<Text />} />
                    {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
                </Routes>
            </DashboardDrawer>

        </BrowserRouter>
    );
}
