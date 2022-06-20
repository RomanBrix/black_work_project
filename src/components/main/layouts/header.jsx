import { useNavigate } from "react-router-dom";
import { phone, phoneUri } from "../../helpers/contactInfo";



export function MainHeader(props) {
    
    const navigate = useNavigate();
    return(
        <header className="main-header">
            <ul>
                <li onClick={()=>{navigate('/about')}}>Про нас</li>
                <li><a href={phoneUri}>{phone}</a></li>
                <li>Передзвоніть мені</li>
            </ul>
        </header>
    )
}