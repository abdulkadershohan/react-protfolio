import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerAppBar from "../components/drawerNew/NewDrawer";
import Hero from "../components/hero/Hero";
import Text from "../components/Text";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DrawerAppBar />
                    }
                >
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<Text />} />

                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
