import NewsItem from "./news-items/NewsItem";

export default function NewsNewVideo({allNews, title})
{
    return (
        <div className='news__new-video'>
            <h2 className='news__title'>{title}</h2>
            <ul className='news__list news__popular-list'>
                {allNews.map((news) => {
                    if(news.id <= 4) {
                        return (
                            <li className='news__item' key={news.id}>
                                <NewsItem 
                                    title={news.title}
                                    image={news.image}
                                />
                            </li>
                        )
                    }
                    return null;
                })}
            </ul>
        </div>
    );
}