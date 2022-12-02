import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Bewerben from './Bewerben';
import Feed from './Feed';
import Home from "./Home";
import Kontakt from './Kontakt';
import PageNotFound from "./PageNotFound";
import Scrims from './Scrims';
import Team from './Team';
import UeberUns from './UeberUns';
import Loginpage from "./Loginpage"
import Registerpage from './Registerpage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="feed" element={<Feed />} />
                    <Route path='kontakt'>
                        <Route index element={<Kontakt />} />
                        <Route path='bewerben' element={<Bewerben />} />
                        <Route path='scrim-us' element={<Scrims />} />
                    </Route>
                    <Route path="ueber-uns" element={<UeberUns />} />
                    <Route path="unser-team" element={<Team />} />
                    <Route path="login" element={<Loginpage />} />
                    <Route path="register" element={<Registerpage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
