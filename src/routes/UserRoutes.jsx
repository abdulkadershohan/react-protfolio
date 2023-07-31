import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMeFull from "../components/about/AboutMeFull";
import Certification from "../components/certification/Certification";
import ContactsAll from "../components/contacts/ContactsAll";
import DrawerAppBar from "../components/drawerNew/NewDrawer";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Hero from "../components/hero/Hero";
import ProtfolioAll from "../components/protfolio/ProtfolioAll";
import ScrollToTop from "./ScrollToTop";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={
                        <DrawerAppBar />
                    }
                >
                    <Route path="/" element={<Hero />} />
                    <Route path="/protfolio" element={<ProtfolioAll />} />
                    <Route path="/contact" element={<ContactsAll />} />
                    <Route path="/about" element={<AboutMeFull />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/certification" element={<Certification />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
