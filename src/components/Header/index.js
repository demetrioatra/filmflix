import { Link } from 'react-router-dom'
import './index.css'

function Header () {
    return (
        <header>
            <Link className = 'logo' to = '/'>Film Flix</Link>
            <Link className = 'favorites' to = '/favorites'>my favorites</Link>
        </header>
    )
}

export default Header