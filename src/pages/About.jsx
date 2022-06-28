import {ReactComponent as Insta} from '../svg/insta.svg'
import {ReactComponent as Telegram} from '../svg/telegram.svg'
import {ReactComponent as Call} from '../svg/call.svg'
import {ReactComponent as ArrowBack } from '../svg/arrowBack.svg'
import { instaUri, mail, mailUri, phone, phoneUri, telegramUri } from '../components/helpers/contactInfo'
import { useNavigate } from 'react-router-dom'

export default function MainAbout(props) {
    const mapFrameUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.461555349988!2d30.323824615936605!3d50.1712060153269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4a537ba2292e3%3A0xaa4d117ff6877b3d!2z0JLQu9Cw0LTQuNC80LjRgNGB0LrQsNGPINGD0LsuLCA2MCwg0JLQsNGB0LjQu9GM0LrQvtCyLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwODYzNw!5e0!3m2!1sru!2sua!4v1656056730867!5m2!1sru!2sua'
    const mapUrl = 'https://goo.gl/maps/q4d64dZ3kdyeAQiB7'
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
                        <li><a href={mapUrl} target="_blank">м. Васильків, вулиця Юсуфа, 20</a></li>
                        <li><a href={phoneUri}>{phone}</a></li>
                        <li><a href={mailUri}>{mail}</a></li>
                        <li>Години роботи: Пн-Пт: <b>9:00-18:00</b>;<br />Сб,Вс: <b>Вих</b></li>
                    </ul>
                </div>
                <div className="right">
                    <h2>Ну єбать тєкстік про нас</h2>
                    <p>Шото тут напишем</p>
                </div>
            </div>
        </div>
    )
}