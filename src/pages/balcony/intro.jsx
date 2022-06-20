import {ReactComponent as SvgBg} from '../../svg/balconyMainLeft.svg'
import {ReactComponent as ArrowDown} from '../../svg/arrowDown.svg'
import {ReactComponent as Insta} from '../../svg/insta.svg'
import {ReactComponent as Telegram} from '../../svg/telegram.svg'
import {ReactComponent as Call} from '../../svg/call.svg'
import Bg from '../imgs/balconyMain.jpg'
import { instaUri, phoneUri, telegramUri } from '../../components/helpers/contactInfo'


export default function IntroBalcony() {
    return (
        <div className="intro">
                <div className="left">
                    <div className="bg-svg">
                        <SvgBg/>
                    </div>
                    <div className="info">
                        <h1>Балкони під ключ</h1>
                        <p>Будь якої складності</p>
                        <p>Швидко та якісно</p>
                    </div>
                </div>
                <div className="right" >
                    <div className="bgs"style={{backgroundImage: `url(${Bg})`}}/>
                </div>

                <div className="socials">
                    <ul>
                        <li><a href={instaUri} target="_blank"><Insta/></a></li>
                        <li><a href={telegramUri} target="_blank"><Telegram/></a></li>
                        <li><a href={phoneUri}><Call/></a></li>
                    </ul>
                </div>

                <div className="bottom">
                    <ArrowDown/>
                </div>
            </div>
    )
}