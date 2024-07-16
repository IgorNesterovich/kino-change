export default function NewsItem({id, title, image})
{
    return (
        <article className='media'>
            {image && <img className='media__img' src={image} alt='News' />}
            <span className='media__title'>{id && id + '.'} {title}</span>
        </article>
    );
}