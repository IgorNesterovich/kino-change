import NewsItem from "./news-items/NewsItem";
import NewsMainItem from "./news-items/NewsMainItem";

export default function NewsTodayMain({allNews, title})
{
    return (
        <div className='news__today-main'>
            <h2 className='news__title'>Главное сегодня</h2>
            <ul className='news__list news__today-main-list'>
                {allNews.map((news) => {
                    if(news.id === 1) {
                        return (
                            <li className='news__item news--strong' key={news.id}>
                                <NewsItem 
                                    title={news.title}
                                    image={news.image}
                                />
                            </li>
                        )
                    } else if(news.id <= 5) {
                        return (
                            <li className='news__item news--strong' key={news.id}>
                                <NewsMainItem 
                                    id={news.id}
                                    title={news.title}
                                    image={news.image}
                                />
                            </li>
                        )
                    }
                    return null;
                })} 
            </ul>
            <button className="news__btn">Больше материалов</button>
        </div>
    );
}