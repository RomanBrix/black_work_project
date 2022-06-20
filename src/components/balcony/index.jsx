


export default function renderBalconyBlocks(arr) {
    return arr.map((item, index)=>{
        return (
        
            <div className="big-info" id={item.id} key={index}>
                <div className="left">
                    <div className="ramka">
                        <div className="headline">{item.headline}</div>
                        <div className="img" style={{backgroundImage: `url(${item.img})`}}/>
                    </div>
                </div>
                <div className="right">
                    {renderFrogBlocks(item.frogs)}
                </div>
            </div>
)
    })
    
}





function renderFrogBlocks(arr) {
    return arr.map((item, index)=>{
        return (
            <div className={`frog-block ${index===0 ? 'open-frog-block' : ''}`} onClick={({target})=>{toggleFrog(target)}} key={index}>
                            <div className="frog-title">{item.title}</div>
                            <div className="frog-info"> {item.text}</div>
                        </div>
        )
    })
}



function toggleFrog(target) {
       
    if(!target.classList.contains('frog-block')){
        toggleFrog(target.parentElement);
        return;
    }
    
    const searchedArray = target.parentElement.children;
    let frogBlockToClose = '';
    for (let i = 0; i < searchedArray.length; i++) {
        console.log(searchedArray[i])
        if(searchedArray[i].classList.contains('open-frog-block')){
            frogBlockToClose = searchedArray[i];
            break;
        }
    }
    console.log(frogBlockToClose);
    
    frogBlockToClose.classList.remove('open-frog-block');
    target.classList.add('open-frog-block')
}