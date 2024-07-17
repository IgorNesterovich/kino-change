import { useParams } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { films } from "../../helpers/films";

export default function Film()
{
    const { id } = useParams();
    const currentFilm = films.find(film => film.id === Number(id));

    console.log(currentFilm);

    return (
        <div className="film">
            <div className="film__wrap">
                <img className="film__img" src={currentFilm.poster} alt="Film" />
            </div>
            <div className="film__block">
                <h3 className="film__title">{currentFilm.name}</h3>
                <div className="film__about">
                    <h3 className="film__about-title">О фильме</h3>
                    <span><span className="title--strong">Год производства</span> {currentFilm.dateRelease}</span>
                    <span><span className="title--strong">Страна</span> {currentFilm.country}</span>
                    <span><span className="title--strong">Жанр</span> {currentFilm.genre}</span>
                    <span><span className="title--strong">Режиссёр</span> {currentFilm.director}</span>
                    <span><span className="title--strong">Сценарий</span> {currentFilm.writer}</span>
                    <span><span className="title--strong">Продюсер</span> {currentFilm.producer}</span>
                    <span><span className="title--strong">Оператор</span> {currentFilm.operator}</span>
                    <span><span className="title--strong">Композитор</span> {currentFilm.composer}</span>
                    <span><span className="title--strong">Художник</span> {currentFilm.artist}</span>
                    <span><span className="title--strong">Монтаж</span> {currentFilm.montage}</span>
                    <span><span className="title--strong">Бюджет</span> ${currentFilm.budget}</span>
                    <span><span className="title--strong">Маркетинг</span> ${currentFilm.marketing}</span>
                    <span><span className="title--strong">Сборы в мире</span> ${currentFilm.feesInTheWorld}</span>
                    <span><span className="title--strong">Время</span> {currentFilm.duration} мин</span>
                </div>
            </div>
            <div className="film__info">
                <span className="film__rating">{currentFilm.rating}</span>
                <span className="film__views">{currentFilm.views}</span>
                <button className="film__btn">
                    <MdOutlineBookmarkAdd className="film__icon" /> 
                    <span className="film__btn-text">Буду смотреть</span>
                </button>
            </div>
        </div>
    );
}