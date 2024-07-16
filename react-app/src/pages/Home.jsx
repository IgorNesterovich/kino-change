import '../css/pages/home.css';
import Ad from '../components/Ad';
import { adBlock } from '../helpers/adBlock';
import Slider from '../components/Slider';
import { animationSlides } from '../helpers/animationSlides';
import { movieSlides } from '../helpers/movieSlides';
import { serialSlides } from '../helpers/serialSlides';
import News from '../components/news/News';
import UpcomingReleases from '../components/upcoming-releases/UpcomingReleases';
import Viewed from '../components/Viewed';

export default function Home()
{
    return (
        <section className="home">

            <Ad 
                name={adBlock.name}
                description={adBlock.description}
                roles={adBlock.roles}
                director={adBlock.director}
                image={adBlock.image}
            />

            <Slider 
                slides={movieSlides} 
                title='Популярные фильмы' 
            />

            <Slider 
                slides={serialSlides} 
                title='Топ-10 за месяц'
                top='true'
            />

            <Slider 
                slides={animationSlides} 
                title='Популярные мультфильмы' 
            />

            <News />

            <Slider 
                slides={serialSlides} 
                title='Популярные сериалы' 
            />

            <UpcomingReleases />

            <Viewed />

        </section>
    )
}