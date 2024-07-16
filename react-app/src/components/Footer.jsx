import '../css/components/footer.css';
import { SlSocialVkontakte, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function Footer()
{
    return (
        <footer className="footer">
            <div className="foooter__block">
                <div className="footer__social">
                    <SlSocialVkontakte className="footer__icon" />
                    <SlSocialTwitter className="footer__icon" />
                    <SlSocialYoutube className="footer__icon" />
                    <PiTelegramLogoLight className="footer__icon" />
                </div>
                <ul className="footer__list">
                    <li className="footer__item">Вакансии</li>
                    <li className="footer__item">Реклама</li>
                    <li className="footer__item">Соглашение</li>
                    <li className="footer__item">Правило рекомендаций</li>
                    <li className="footer__item">Справка</li>
                    <li className="footer__item">Блог</li>
                    <li className="footer__item">Предложения</li>
                    <li className="footer__item">Все фильмы</li>
                    <li className="footer__item">Все сериалы</li>
                    <li className="footer__item">Все мультфильмы</li>
                    <li className="footer__item">Рекомендации кино</li>
                    <li className="footer__item">Служба поддержки</li>
                </ul>
                <div className="footer__app">
                    <img className="footer__app-img" src="https://pomo-doro.ru/wp-content/uploads/2021/05/pngegg-1536x787.png" alt="App" />
                    <img className="footer__app-img" src="https://lenreactiv.ru/images/google_play.png" alt="App" />
                    <img className="footer__app-img" src="https://www.vsopen.ru/i/Huawei_app.png" alt="App" />
                </div>
            </div>
            <div className="footer__info">
                <span className="footer__info-text">© 2024, Киновыбор 18+</span>
                <span className="footer__info-text">Проект Игоря Нестеровича</span>
            </div>
        </footer>
    );
}