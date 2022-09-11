import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import App from "./App";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
