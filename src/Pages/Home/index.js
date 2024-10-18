import { useEffect, useState } from "react"
import api from "../../Services/api"
import { Link } from "react-router-dom"
import "./home.css"

function Home(){
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "5b2d39e0954c645642b9a9488a57f14f",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(filmes)
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)

        }

        loadFilmes()

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }


    return(
        <div className="container">
            <div className="lista-filmes">

            {filmes.map((item) => {
                return(
                    <article key={item.id}>
                        <strong>{item.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                        <Link to={`/filmes/${item.id}`}>Acessar</Link>
                    </article>
                )
            })}

                
            </div>
        </div>
    )
}

export default Home