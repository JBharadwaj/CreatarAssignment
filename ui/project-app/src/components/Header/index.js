import {Link} from 'react-router-dom';
import './index.css';
import logo from './logo.png';

const Header=() => (
    <nav className="header-container">
        <div>
            <img alt="company" src={logo} className="logo"/>
        </div>
        <div>
            <Link className="route-link" to="/">
                Home 
            </Link>
            <Link  className="route-link" to="/books">
                Books
            </Link>
            <Link className="route-link" to="/submit">
                Create
            </Link>
        </div>   
    </nav>
)

export default Header