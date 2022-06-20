import { useNavigate } from "react-router-dom";
import { phone, phoneUri } from "../../helpers/contactInfo";



export function BalconyHeader(props) {
    
    const navigate = useNavigate();
    return(
        <header className="balcony-header">
            <ul>
                <li>Балкони</li>
                <li>Вікна</li>
                <li>Дах</li>
            </ul>
        </header>
    )
}