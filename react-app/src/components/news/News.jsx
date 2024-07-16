import '../../css/components/news.css';
import { popularNews } from '../../helpers/popularNews'; 

import NewsPopular from './news-sections/NewsPopular';
import NewsTodayMain from './news-sections/NewsTodayMain';
import NewsNewVideo from './news-sections/NewsNewVideo';
  
export default function News()
{
    return (
        <div className='news'>  

            <NewsPopular 
                allNews={popularNews}
                title='Популярное'
            />

            <NewsTodayMain 
                allNews={popularNews}
                title='Главное сегодня'
            />

            <NewsNewVideo 
                allNews={popularNews}
                title='Новые видео'
            />
        </div>
    );
}