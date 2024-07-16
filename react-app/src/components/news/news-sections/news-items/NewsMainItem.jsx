export default function NewsMainItem({title, image})
{
    return (
        <article className='media media__main'>
            <img className='media__img media__main-img' src={image} alt='News' />
            <span className='media__title'>{title}</span>
        </article>
    );
}