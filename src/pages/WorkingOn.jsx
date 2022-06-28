import BalconyFooter from "../components/balcony/layouts/footer";
import { ReactComponent as Clock } from "../svg/clock.svg";
import { ReactComponent as Circle } from "../svg/balconyMainLeft.svg";
import { ReactComponent as Arrow } from "../svg/arrowBack.svg";
import { useNavigate } from "react-router-dom";


export default function WorkingOn (props) {
    
    const navigate = useNavigate();

    return <>
        <div className="working">
            <div className="back" onClick={()=>{navigate('/')}}> <Arrow/> На головну</div>
            <div className="bg">
                <Circle/>
            </div>
            <div className="center">
                <h1>Ця сторінка знаходится в розробці <Clock/></h1>
                <h2>Але ми готові прийняти замовлення </h2>
                <h2>Залиште заявку або зателефонуйте нам </h2>
            </div>
        </div>
        <BalconyFooter/>
    </>
}