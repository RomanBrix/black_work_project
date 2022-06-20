import { useNavigate } from "react-router-dom";
import {ReactComponent as ArrowBack } from '../../../svg/arrowBack.svg'

export default function BalconySideBar(props) {
    
    const navigate = useNavigate();
    return(
        <div className="balcony-sidebar">
            <div className="back" onClick={()=>{navigate('/')}}>
                <ArrowBack/>
                <span>На головну</span>
            </div>
        </div>
    )
}