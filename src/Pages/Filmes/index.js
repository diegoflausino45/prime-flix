import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../Services/api"
import './filme-info.css'
import { toast } from "react-toastify"
function Filmes(){
    const {id} = useParams()
    const [filmes, setFilmes] = useState({})
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "5b2d39e0954c645642b9a9488a57f14f",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilmes(response.data)
                setLoading(false)
            })
            .catch(() =>{
                navigate("/", {replace: true})
                return
            })
        }

        loadFilme()

        return() => {
            console.log("Componente foi desmontado")
        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix")

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filmes.id)

        if(hasFilme){
            toast.warn("ESSE FILME JÁ ESTA NA LISTA")
            return
        }

        filmesSalvos.push(filmes)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("FILME SALVO COM SUCESSO")
    }


    if(loading){
        return(
            <div className="filme-info">
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filmes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.title}/>

            <h3>Sinopse</h3>
            <span>{filmes.overview}</span>

            <strong>Avaliação: {filmes.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query= ${filmes.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filmes