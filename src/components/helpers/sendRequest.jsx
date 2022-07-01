import axios from "axios";

axios.defaults.baseURL = "https://black-work.site:1488"

export default function SendRequest(data, type, cb){
    console.log(type)
    console.log(data)


    switch (type) {
        case 'fastCall':
            //send data

            axios.post('/sendRequest',{
                msg:`
Fast call!
location: ${data.where}

    ${data.phone}
                `
            })
            .then(({data})=>{
                if(data){
                    alert('Дякую, передзвонимо протягом 10 хвилин')
                }else{
                    alert('Відбулася помилка, зв`яжіться з нами будь-ласка')
                }
            })
            break;


            case 'withName':
                case 'fastCall':
                    //send data
        
                    axios.post('/sendRequest',{
                        msg:`
Просит позвонить!
location: ${data.where}
        
            ${data.phone}
    Имя:        ${data.name}
                        `
                    })
                    .then(({data})=>{
                        cb(data)
                    })

            break;
    
        default:
            //send data get cb
            break;
    }
}