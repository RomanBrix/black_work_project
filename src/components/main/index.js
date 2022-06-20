import { useNavigate } from 'react-router-dom'
import {ReactComponent as ClickSvg }  from '../../svg/click.svg'



export function RenderMainTab(data) {
    const navigate = useNavigate();

    return data.map((item,index)=>{
        // console.log(item)
        return (
            <div className="tab" style={{backgroundImage:`url(${item.img})`}} key={index} onClick={()=>{navigate(item.path)}}>
                    <div className="info">
                        <h1>{item.headline}</h1>
                        <ul>
                            {renderList(item.list)}
                        </ul>
                    </div>

                    <div className="click">
                        <ClickSvg/>
                    </div>
                </div>
        )
    })
    
    
}





function renderList(listItems) {

    return listItems.map((item, index)=>{
        return <li key={index*listItems.length}>{item}</li>
    })
}