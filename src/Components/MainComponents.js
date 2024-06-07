
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import HomePage from '../Screens/HomePage';
import Contact from '../Screens/Contact';
import Alhayyat from "../Screens/pages/Alhayyat";

import Fastpage from "../Screens/pages/Fastpage";

import Groundpage from "../Screens/pages/Groundpage";
import Hairpage from "../Screens/pages/Hairpage";
import Nativepage from "../Screens/pages/Nativepage";
import Playpage from "../Screens/pages/Playpage";
import Quickpage from "../Screens/pages/Quickpage";
import Soobzpage from "../Screens/pages/Soobzpage";
import Tradepage from "../Screens/pages/Tradepage";

import Custompage from  '../Screens/pages/Custompage';
import Portfolio from '../Screens/Portfolio';
import Project from '../Screens/Project';
import Aboutpage from '../Screens/Aboutpage';




const MainComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/HomePage' element={<HomePage />} />
                    <Route path='/Contact' element={<Contact />} />

                    <Route path='/Alhayat' element={<Alhayyat />} />
                    <Route path='/Custompage' element={<Custompage />} />
                    <Route path='/Fastpage' element={<Fastpage />} />
             
                    <Route path='/Groundpage' element={<Groundpage />} />
                    <Route path='/Hairpage' element={<Hairpage />} />
                    <Route path='/Nativepage' element={<Nativepage />} />
                    <Route path='/Playpage' element={<Playpage />} />
                    <Route path='/Quickpage' element={<Quickpage />} />
                    <Route path='/Soobzpage' element={<Soobzpage />} />
                    <Route path='/Tradepage' element={<Tradepage />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                    <Route path='/Project' element={<Project />} />
                    <Route path='/AboutUs' element={<Aboutpage/>}/>

                    <Route path='/' element={<Navigate to="/HomePage" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}



export default MainComponents;

