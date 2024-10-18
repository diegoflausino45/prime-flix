import { Link } from 'react-router-dom'
import './style.css'


function Header(){
    return(
        <header>
            <div className='logo'>
                <Link to="/">Prime Flix</Link>
            </div>

            <div className='favoritos'>
                <Link to="/favoritos">Meus Filmes</Link>
            </div>
        </header>
    )
}

export default Header