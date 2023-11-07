import { Link } from "react-router-dom"
import MoviesSection from "./../pages/MoviesSection"



function HomePage() {

    return (
        <div>

            <section className="encabezado">
                <h1 className="neon">Lumière</h1>
                
                <a href="#somos"><i className="bi bi-caret-down"></i></a>
            </section>

            <section className="container qs">
            <h2 id="somos">¿<span>Q</span>uienes somos?</h2>
            <p>
                Somos dos amigas amantes del cine. Decidimos crear Lumiére para compartir con todos los
                cinéfilos internautas las críticas, novedades, opiniones, y poder hacer crecer ésta comunidad.
                En nuestro sitio subimos contenido de películas clásicas todos los meses, recomendaciones, puntuaciones, trailers, etc.
                Además, podrás compartir con todos las novedades de películas que creés que deberíamos ver, ( mejor no verlas).
                Esperamos que disfrutes del contenido.
            </p>
            <p>
            Y recordemos que: </p>  
            <q>Lo bueno del cine, es que durante dos horas los problemas son de otros.</q>     
            
        </section>
            <section>
                <MoviesSection/>
            </section>

        </div>
    )

}

export default HomePage