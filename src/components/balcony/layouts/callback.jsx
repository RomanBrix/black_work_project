
import {ReactComponent as CallBack } from '../../../svg/callback.svg'

export default function BalconyCallBack(props) {
    
    return(
        <div className="callback-balcony">
            <div className="head" onClick={()=>{scrollTo('callus')}}>
                <CallBack/>
                <span>Замовити</span>
            </div>
        </div>
    )

    function scrollTo(id){
        document.getElementById(id).scrollIntoView({block: "center", behavior: "smooth"})
    }
}