import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Film from './pages/Film'
import Error from './pages/Error'

function RoutesApp () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path = "/" element = { <Home /> } />
                <Route path = "/film/:film_id" element = { <Film /> } />
                <Route path = "*" element = { <Error /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp