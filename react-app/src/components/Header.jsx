import '../css/components/header.css';
import { Link } from "react-router-dom";
import { PiFilmReelFill } from "react-icons/pi";

export default function Header()
{
    return (
        <header className="header">
            <div className='container'>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className='header__logo' to='/'>
                                <PiFilmReelFill className='header__icon' />
                                <span>КИНОВЫБОР</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}