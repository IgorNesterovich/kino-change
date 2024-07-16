import NewsItem from "./news-items/NewsItem";

export default function NewsPopular({allNews, title})
{
    return (
        <div className='news__popular'>
            <h2 className='news__title'>{title}</h2>
            <ul className='news__list news__popular-list'>
                {allNews.map((news) => {
                    if(news.id === 1) {
                        return (
                            <li className='news__item' key={news.id}>
                                <NewsItem 
                                    id={news.id}
                                    title={news.title}
                                    image={news.image}
                                />
                            </li>
                        )
                    } else {
                        return (
                            <li className='news__item' key={news.id}>
                                <NewsItem 
                                    id={news.id}
                                    title={news.title}
                                />
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    );
}