import HomePage from "./pages/HomePage"
import './css/estilos.css'
// import "./node_modules/video-react/dist/video-react.css";

import {useState, useEffect} from 'react'
import {Route, Routes, useNavigate, Navigate } from "react-router-dom"
import MoviesSection from "./pages/MoviesSection"
import Detalles from "./pages/MoviesDetail"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ReviewsDelete from "./components/ReviewsDelete"
import ReviewsEdit from "./components/ReviewsEdit"
import Novedades from "./pages/NovedadesPage"
import NovedadesDetail from "./pages/NovedadesDetail"
import TopMovies from "./pages/TopMovies"
import Register from "./pages/Register"
import LoginPage from "./pages/LoginPage"
import * as authService from "./services/auth.services"
import UserProfile from "./pages/UserPerfil"
import Reviews from "./components/Reviews"

function RoutePrivate( {isAutenticate, children}){
    return (
        <>
            {isAutenticate? children : <Navigate to="/iniciar-sesion" />}
        </>
    )
}

function App() {

    const navigate = useNavigate()
    const [isAutehnticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
    }, [])


    useEffect(() => {
        if(!isAutehnticated){
            navigate('/iniciar-sesion')
        }   
        else
        {
            navigate('/')
        }

    }, [isAutehnticated])


    function onLogin(user, token){
        
        setIsAuthenticated(true)
        localStorage.setItem('token', token)
        navigate('/')
    }


    return (
        <div>

        <>
            
            <NavBar></NavBar>

            <Routes>

                <Route path="/iniciar-sesion" element={<LoginPage onLogin={onLogin} />} />
                <Route path="/" element={<HomePage/>}/>
                <Route path="/films" element={<MoviesSection/>}/>
                <Route path="/films/:id" element={<RoutePrivate isAutenticate={isAutehnticated}><Detalles/></RoutePrivate>}/>
                <Route path="/films/:id/reviews/" element={<Reviews/>}/>
                <Route path="/films/:id/reviews/:id_review/delete" element={<ReviewsDelete/>}/>
                <Route path="/films/:id/reviews/:id_review/edit" element={<ReviewsEdit/>}/>
                <Route path="/novedades" element={<RoutePrivate isAutenticate={isAutehnticated}><Novedades/></RoutePrivate>}/>
                <Route path="/novedades/:id" element={<RoutePrivate isAutenticate={isAutehnticated}><NovedadesDetail/></RoutePrivate>}/>
                <Route path="/top100" element={<TopMovies/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/mi-perfil" element={<RoutePrivate isAutenticate={isAutehnticated}><UserProfile/></RoutePrivate>}/>

                

            </Routes>
            
            <Footer></Footer>
            

            </>
            


        </div>
    )


}

export default App