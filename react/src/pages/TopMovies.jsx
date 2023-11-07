import { useEffect, useState } from "react"
import axios from 'axios'

    
function TopMovies() {

    const [movies, setMovies] = useState([])


    const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': '49ed4a2556mshe2bb1f5ec0c940dp1cbd97jsnfbd943f77a68',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };
      
    useEffect(() => {
        axios.request(options).then(function (response) {
            setMovies(response.data);
            console.log(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])




    let moviesList = movies.map(movie => (
        <div key={movie.id} id="movies" className="col mb-5">
            <p >{movie.rank}</p>
            <h2 className="titulo mb-5">{movie.title}</h2>
            <img src={`${movie.image}`} alt="" className="mx-auto d-block" />

                <div className="info mb-5 mt-3">
                <p>{movie.rating}</p>
                <p>{movie.year}</p>
                </div>

            <iframe src={`${movie.trailer}`} width={"100%"} ></iframe>


        </div>
    ))


    
    
    return (
        
        <div>
        
            <section className="encabezado">
                <h1 className="neon">Top 100 mejores películas</h1>
                
                <a href="#movies"><i className="bi bi-caret-down"></i></a>
            </section>

            <section>
                <div className="container">
                    <div className="row mb-5">
                        {moviesList}
                    </div>
                </div>
            </section>

        </div>
    )

}

export default  TopMovies