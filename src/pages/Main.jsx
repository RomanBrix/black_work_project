import { RenderMainTab } from '../components/main'
import BalconyImg from './imgs/balcony.jpg'
import MetalImg from './imgs/metal.jpg'
import ShopImg from './imgs/shop.jpg'
import ThirdImg from './imgs/third.jpg'




export default function Main(props) {
    const data = [
        {
            img: BalconyImg,
            headline: 'Балкони',
            list:['Лоджія', 'Вікна', 'Підвіконня', 'Каркас'],
            path:'/balcony'
        },
        {
            img: MetalImg,
            headline: 'Металургія',
            list:['Сварка', 'Ковка', 'Мангали', 'Ворота'],
            path:'/working'
        },
        // {
        //     img: ThirdImg,
        //     headline: 'Шото',
        //     list:[],
        //     path:'/working'
        // },
        {
            img: ShopImg,
            headline: 'Cvyah.store',
            list:['Кріплення', 'Болти', 'Гайки', 'Шурупи','Інше'],
            path:'/working'
        },
    ]
    

    return(
       <div className="main">
            {
                RenderMainTab(data)
            }
       </div>
    )
}





