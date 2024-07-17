import { NavLink, Outlet } from 'react-router-dom';
import '../css/pages/films.css';

export default function Films()
{
    return (
        <div className="films">
            <ul className='films__nav'>
                <li className='films__nav-item'><NavLink to='/films/all'>Все фильмы</NavLink></li>
                <li className='films__nav-item'><NavLink to='/films/popular'>Популярные фильмы</NavLink></li>
                <li className='films__nav-item'><NavLink to='/films/top'>Топ 100</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}