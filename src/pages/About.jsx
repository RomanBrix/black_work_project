import {ReactComponent as Insta} from '../svg/insta.svg'
import {ReactComponent as Telegram} from '../svg/telegram.svg'
import {ReactComponent as Call} from '../svg/call.svg'
import {ReactComponent as ArrowBack } from '../svg/arrowBack.svg'
import { instaUri, mail, mailUri, phone, phoneUri, telegramUri } from '../components/helpers/contactInfo'
import { useNavigate } from 'react-router-dom'

export default function MainAbout(props) {
 
    const mapFrameUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1277.7188782642622!2d30.327408094889087!3d50.17165103988013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4a53706f59df5%3A0xb6126eb001b5184e!2z0JLQu9Cw0LTQuNC80LjRgNGB0LrQsNGPINGD0LsuLCA0OSwg0JLQsNGB0LjQu9GM0LrQvtCyLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwODYwMg!5e0!3m2!1sru!2sua!4v1656659902754!5m2!1sru!2sua'
    const mapUrl = 'https://goo.gl/maps/FcoPMDWaCjFXRTLh9'
    const navigate = useNavigate();
    return(
        <div className="about">
            <div className="back" onClick={()=>{
                navigate('/')
            }}>
                <ArrowBack/> Назад
            </div>
            <h1>Зв’язок з нами</h1>
            <div className="socials">
                <ul>
                    <li><a href={instaUri} target="_blank"><Insta/></a></li>
                    <li><a href={telegramUri} target="_blank"><Telegram/></a></li>
                    <li><a href={phoneUri}><Call/></a></li>
                </ul>
            </div>
            <div className="content">
                <div className="left">
                    <div className="map">
                        <iframe src={mapFrameUrl} width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                    <ul className="contacts">
                        <li><a href={mapUrl} target="_blank">Володимирська вул. 49, Васильків, Київська область, 08602</a></li>
                        <li><a href={phoneUri}>{phone}</a></li>
                        {/* <li><a href={mailUri}>{mail}</a></li> */}
                        <li>Години роботи: Пн-Пт: <b>9:00-18:00</b>;<br />Сб,Вс: <b>Вих</b></li>
                    </ul>
                </div>
                <div className="right">
                    <h2>Цікаво знати</h2>
                    <p>Наша компанія пропонує найкращі ціни та професійне виконання робіт з ремонту балконів під ключ, відновлення віконних та дверних укосів, демонтажних робіт будь-якої складності, а також з кваліфікованого ремонту вікон пвх та виготовлення москітних виробів. Для нас немає складних завдань, оскільки тривалий досвід роботи у своїй сфері разом з постійним розвитком та згуртованим колективом дозволяє нам з упевненістю запропонувати гарантовано якісне виконання кожного замовлення.</p>
                </div>
            </div>
        </div>
    )
}