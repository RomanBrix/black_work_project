import { useNavigate } from "react-router-dom";
import { phone, phoneUri } from "../../helpers/contactInfo";
import SendRequest from "../../helpers/sendRequest";



export function MainHeader(props) {
    
    const navigate = useNavigate();
    return(
        <header className="main-header">
            <ul>
                <li onClick={()=>{navigate('/about')}}>Про нас</li>
                <li><a href={phoneUri}>{phone}</a></li>
                <li onClick={()=>{plsCallMe()}}>Передзвоніть мені</li>
            </ul>
        </header>
    )


    function plsCallMe() {
        const phone = prompt('Ваш номер телефона', 380);
        if(phone){
            if(phone.length === 12 || phone.length === 10){
                SendRequest({
                    phone,
                    where: 'Main Page'
                }, 'fastCall')
            }else{
                alert("Wrong Phone")
            }
        }
    }
}