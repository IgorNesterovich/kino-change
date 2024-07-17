import { MdOutlineBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FilmCard({id, poster, name, dateRelease, duration, country, genre, director, cast, rating, views})
{
    return (
        <li className="film-card">
            <Link className="film-link" to={`/films/${id}`}>
                <span className="film-card__num">{id}</span>
                <img className="film-card__img" src={poster} alt="Film" />
                <div className="film-card__info">
                    <h3 className="film-card__title">{name}</h3>
                    <span className="film-card__time">{dateRelease}, {duration} мин.</span>
                    <span className="film-card__data">{country}, {genre}, Режиссёр: {director}</span>
                    <span className="film-card__cast">{cast}</span>
                </div>
                <div className="film-card__action">
                    <span className="film-card__rating">{rating}</span>
                    <span className="film-card__views">{views}</span>
                    <button className="film-card__btn">
                        <MdOutlineBookmarkAdd className="film-card__icon" /> 
                        <span className="film-card__btn-text">Буду смотреть</span>
                    </button>
                </div>
            </Link>
        </li>
    );  
}