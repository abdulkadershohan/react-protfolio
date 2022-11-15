import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMeFull from "../components/about/AboutMeFull";
import ContactsAll from "../components/contacts/ContactsAll";
import DrawerAppBar from "../components/drawerNew/NewDrawer";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Hero from "../components/hero/Hero";
import Protfolio from "../components/protfolio/Protfolio";
import ProtfolioAll from "../components/protfolio/ProtfolioAll";

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
                    <Route path="/" element={<Protfolio />} />
                    <Route path="/contact" element={<ContactsAll />} />
                    <Route path="/protfolio" element={<ProtfolioAll />} />
                    <Route path="/about" element={<AboutMeFull />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />

                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
