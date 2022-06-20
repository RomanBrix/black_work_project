


export function BalconyHeader(props) {
    
    return(
        <header className="balcony-header">
            <ul>
                <li onClick={()=>{scrollTo('balck')}}>Балкони</li>
                <li onClick={()=>{scrollTo('okna')}}>Вікна</li>
                <li onClick={()=>{scrollTo('roof')}}>Дах</li>
            </ul>
        </header>
    )


    function scrollTo(id){
        document.getElementById(id).scrollIntoView({block: "center", behavior: "smooth"})
    }
}