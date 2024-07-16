import { MdOutlineBookmarkAdd } from "react-icons/md";

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export default function ReleaseItem({id, image, name, date})
{
    const dateDay = date.substring(8, 10);
    const getDateMonth = () => {
        return date.substring(5, 7).replace(/^[0]+/g, '');
    }

    return (
        <li className="releases__item">
            <div className="releases__info">
                <span className="releases__num">{id}.</span>
                <img className="releases__img" src={image} alt="Soon" />
                <h3 className="releases__title">{name}</h3>
            </div>
            <div className="releases__block">
                <div className="releases__date">
                    <span className="releases__date-day">{dateDay} </span>
                    <span className="releases__date-month">{monthNames[getDateMonth() - 1]} </span>
                </div>
                <MdOutlineBookmarkAdd className="releases__icon" />
            </div>

        </li>
    );
}