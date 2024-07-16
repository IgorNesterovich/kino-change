import '../css/components/sidebar.css';
import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { BiFilm } from "react-icons/bi";
import { FaPhotoFilm } from "react-icons/fa6";

const setActive = ({isActive}) => isActive ? 'sidebar__link sidebar--active' : 'sidebar__link';

export default function Sidebar()
{

    return (
        <nav className='sidebar'>
            <ul className='sidebar__list'>
                <li className='sidebar__item'>
                    <NavLink className={setActive} to='/'>
                        <IoHomeSharp className='sidebar__icon' />
                        <span>Главная</span>
                    </NavLink>
                </li>
                <li className='sidebar__item'>
                    <NavLink className={setActive} to='/films'>
                        <BiFilm  className='sidebar__icon' />
                        <span>Фильмы</span>
                    </NavLink>
                </li>
                <li className='sidebar__item'>
                    <NavLink className={setActive} to='/serials'>
                        <FaPhotoFilm className='sidebar__icon' />
                        <span>Сериалы</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}