import { phone } from "../../components/helpers/contactInfo";



export default function CallUs(props) {
    
    return(
        <div className="callus" id="callus">
                <div className="block">
                    <div className="head">Ми зв’яжемось з вами на протязі дня</div>
                    <div className="forms">
                        <input type="text" placeholder="Ім'я"/>
                        <input type="text" placeholder={phone}/>
                        <div className="btn">Замовити</div>
                        {/* <input type="text" /> */}
                    </div>
                </div>
            </div>
    )
}