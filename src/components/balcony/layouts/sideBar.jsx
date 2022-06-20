
import {ReactComponent as ArrowBack } from '../../../svg/arrowBack.svg'

export default function BalconySideBar(props) {
    
    return(
        <div className="balcony-sidebar">
            <div className="back">
                <ArrowBack/>
                <span>На головну</span>
            </div>
        </div>
    )
}