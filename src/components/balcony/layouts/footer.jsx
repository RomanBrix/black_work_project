import {ReactComponent as Insta} from '../../../svg/insta.svg'
import {ReactComponent as Telegram} from '../../../svg/telegram.svg'
import {ReactComponent as Call} from '../../../svg/call.svg'
import { instaUri, phoneUri, telegramUri } from '../../helpers/contactInfo'

export default function BalconyFooter() {
    
    return(
        <div className="balcony-footer">
            <div className="socials">
                    <ul>
                        <li><a href={instaUri} target="_blank"><Insta/></a></li>
                        <li><a href={telegramUri} target="_blank"><Telegram/></a></li>
                        <li><a href={phoneUri}><Call/></a></li>
                    </ul>
                </div>

                <div className="centers">
                    Хочеш такий сайт як у нас тобі сюда <a href={telegramUri}> @slavaukraine</a>
                </div>
        </div>
    )
}