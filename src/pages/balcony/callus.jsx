import { useState } from "react";
import { phone } from "../../components/helpers/contactInfo";
import SendRequest from "../../components/helpers/sendRequest";



export default function CallUs(props) {
    
    const [val, setVal] = useState({
        name: '',
        phone: '',
    })

    const [btnDisable, setBtnDisable] = useState(false)
    return(
        <div className="callus" id="callus">
                <div className="block">
                    <div className="head">Ми зв’яжемось з вами на протязі дня</div>
                    <div className="forms">
                        <input type="text" placeholder="Ім'я" name="name" value={val.name} onChange={({target})=>{changeVal(target)}}/>
                        <input type="text" placeholder={phone} name="phone" value={val.phone} onChange={({target})=>{changeVal(target)}}/>
                        {
                            !btnDisable ? 
                            <div className="btn" onClick={({})=>{callMePls()}}>Замовити</div>
                            :
                            <div className="btn btn-disable">Замовити</div>
                        }
                        
                        {/* <input type="text" /> */}
                    </div>
                </div>
            </div>
    )


    function callMePls() {
        setBtnDisable(true);

        if(val.phone.length > 7){
                SendRequest({
                    phone: val.phone,
                    name: val.name,
                    where: 'Балконы'
            },'withName', (result)=>{
                if(result){
                    alert('Дякую, передзвонимо протягом 10 хвилин');
                    setVal(
                        {
                            name: '',
                            phone: '',
                        }
                    )
                    setBtnDisable(false);
                }else{
                    setBtnDisable(false);
                    alert('Відбулася помилка, зв`яжіться з нами будь-ласка')
                }
            })
        }else{
            setBtnDisable(false);

        }
    }

    function changeVal(target) {
        
        setVal((pr)=>{
            return {
                ...pr,
                [target.name] : target.value
            }
        })
    }
}