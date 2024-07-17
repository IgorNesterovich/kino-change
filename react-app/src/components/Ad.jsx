import '../css/components/ad.css';
import { IoIosPlay } from "react-icons/io";
import { MdOutlineBookmarkAdd } from "react-icons/md";

export default function Ad({name, description, roles, director, image})
{
    return (
        <section className='ad'>
            <div className='ad__info'>
                <h2 className='ad__title'>{name}</h2>
                <div className='ad__desc'>
                    <p className='ad__text'>{description}</p>
                    <p className='ad__text'><span className='ad--strong'>В главных ролях:</span> {roles}</p>
                    <p className='ad__text'><span className='ad--strong'>Режиссер:</span> {director}</p>
                </div>
                <div className='ad__actions'>
                    <button className='ad__btn'>
                        <IoIosPlay className='ad__icon' />
                        <span>Смотреть</span>
                    </button>
                    <div className='ad__circle'>
                        <MdOutlineBookmarkAdd className='ad__icon ad__icon--hover' />
                    </div>
                </div>
            </div>
            <img className='ad__img' src={image} alt='Ad' />
        </section>
    );
}