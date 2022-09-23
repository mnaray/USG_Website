import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PageNotFound from "./PageNotFound";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<App />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
