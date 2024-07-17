import FilmCard from './FilmCard';
import { films } from '../../helpers/films'; 

export default function FilmsAll()
{
    return (
        <section className="films-all">
            <ul className="films-all__list">
                {films.map((film) => {
                    return <FilmCard
                                key={film.id}
                                id={film.id}
                                poster={film.poster}
                                name={film.name} 
                                dateRelease={film.dateRelease} 
                                duration={film.duration} 
                                country={film.country} 
                                genre={film.genre} 
                                director={film.director} 
                                cast={film.cast} 
                                rating={film.rating} 
                                views={film.views}
                            />
                })}
            </ul>
        </section>
    );
}