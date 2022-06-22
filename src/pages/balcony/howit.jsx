import {ReactComponent as HowIt1 } from '../../svg/howit1.svg';
import {ReactComponent as HowIt2 } from '../../svg/howit2.svg';
import {ReactComponent as HowIt3 } from '../../svg/howit3.svg';
import {ReactComponent as HowIt4 } from '../../svg/howit4.svg';




export default function HowItBalcony(props) {
    

    return (
        <div className="how-it">
                <div className="tab">
                    <div className="logo">
                        <HowIt1/>
                    </div>
                    <div className="text">
                        <div className="head">Етапи виконання робіт</div>
                        <div className="afterHead">Робочий процес проходить в 3 етапи</div>
                    </div>
                </div>
                <div className="tab">
                    <div className="logo">
                        <HowIt2/>
                    </div>
                    <div className="text">
                        <div className="head">Обговорення і планування</div>
                        <div className="afterHead">Пару строк текста по делу</div>
                    </div>
                </div>
                <div className="tab">
                    <div className="logo">
                        <HowIt3/>
                    </div>
                    <div className="text">
                        <div className="head">Закупівля матеріалу</div>
                        <div className="afterHead">Пару строк текста по делу</div>
                    </div>
                </div>
                <div className="tab">
                    <div className="logo">
                        <HowIt4/>
                    </div>
                    <div className="text">
                        <div className="head">Виконання робіт</div>
                        <div className="afterHead">Пару строк текста по делу</div>
                    </div>
                </div>
            </div>
    )
}