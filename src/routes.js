import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/index'
import Filme from './pages/Filme/index'
import Header from "./components/Header";
import Favoritos from "./pages/Favoritos";

import Error from "./pages/Error";
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filmes/:id" element={ <Filme/> }/>
                <Route path="/favoritos" element={<Favoritos/>}/>
                
                <Route path="*" element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp