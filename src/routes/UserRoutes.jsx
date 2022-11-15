import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerAppBar from "../components/drawerNew/NewDrawer";
import Text from "../components/Text";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DrawerAppBar />} />
                <Route element={<DrawerAppBar />}>
                    <Route path="/about" element={<Text />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
