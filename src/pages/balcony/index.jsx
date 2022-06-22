import IntroBalcony from "./intro";

import Balc from '../imgs/balcony/1.jpg'
import Okna from '../imgs/balcony/2.jpg'
import Roof from '../imgs/balcony/3.jpg'
import renderBalconyBlocks from "../../components/balcony";
import HowItBalcony from "./howit";
import CallUs from "./callus";



export default function Balcony(props) {
    

    return(
        <div className="balcony">
            <IntroBalcony/>
            <div className="big-info-container">
                {renderBalconyBlocks(bigData)}
            </div>
            <HowItBalcony/>
            <CallUs/>
        </div>
    )
}




const bigData = [
    {
        headline: 'Балкони',
        img: Balc,
        id: 'balck',
        frogs:[
            {
                title: 'Work #1',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #2',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #3',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #4',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #5',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
        ]
    },


    {
        headline: 'Вікна',
        img: Okna,
        id:'okna',
        frogs:[
            {
                title: 'Work #1',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #2',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #3',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #4',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #5',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
        ]
    },

    {
        headline: 'Дах',
        img: Roof,
        id: 'roof',
        frogs:[
            {
                title: 'Work #1',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #2',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #3',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #4',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Work #5',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
        ]
    },
]