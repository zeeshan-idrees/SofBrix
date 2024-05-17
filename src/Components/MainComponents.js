
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import HomePage from '../Screens/HomePage';


const MainComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/HomePage' element={<HomePage />} />
                    <Route path='/' element={<Navigate to="/HomePage" />} />
                </Routes>
            </BrowserRouter> 
  </>
    );
}



export default MainComponents;

