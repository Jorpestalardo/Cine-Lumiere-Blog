import { Link, useNavigate  } from "react-router-dom"
import * as authService from "../services/auth.services.js"

function NavBar() {
  const navigate = useNavigate()

      function onLogout(){
        authService.logout()
        setIsAuthenticated(false)
        localStorage.removeItem('token')
        navigate('/iniciar-sesion')
      }

    return (

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
   <Link className="navbar-brand text-danger" to="/"><img src="../img/icono/carrete.png" alt="" /></Link>
    <button className="navbar-toggler text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-danger"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link text-white" to="/films">Movies</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link text-white" to="/novedades">Novedades</Link>
        </li>        
        <li className="nav-item">
         <Link className="nav-link text-white" to="/top100">Top 100</Link>
        </li>
        <>
        if(!isAutehnticated){
        <li className="nav-item">
         <Link className="nav-link text-white" to="/iniciar-sesion">Iniciar Sesion</Link>
        </li>
        }
        </>
        <li className="nav-item">
         <Link className="nav-link text-white" to="/register">Registrarse</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link text-white" onClick={onLogout}>Cerrar Sesión</Link>
        </li>
        {/* <li className="nav-item">
         <Link className="nav-link text-white" to="/mi-perfil">Mi Perfil</Link>
        </li> */}
      </ul>
    </div>
  </div>
    </nav>

    )
}


export default NavBar