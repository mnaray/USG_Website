import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bewerben from './Bewerben';
import Feed from './Feed';
import Home from "./Home";
import Kontakt from './Kontakt';
import PageNotFound from "./PageNotFound";
import Scrims from './Scrims';
import Team from './Team';
import UeberUns from './UeberUns';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path="feed" element={<Feed />} />
                    <Route path="ueber-uns" element={<UeberUns />} />
                    <Route path="unser-team" element={<Team />} />
                    <Route path='*' element={<PageNotFound />} />
                    <Route path='kontakt'>
                        <Route index element={<Kontakt />} />
                        <Route path='bewerben' element={<Bewerben />} />
                        <Route path='scrim-us' element={<Scrims />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
