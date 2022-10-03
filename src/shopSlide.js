import { useState } from 'react';
import {data} from './data'


function ShopSlide(props) {
    const [objectCard]=useState(props.numberGood-1);
    const [arrayPhoto,setArrayPhoto]=useState(0)
    const {image}=data[objectCard]
    const imageSet =image[arrayPhoto]

    const previous=()=>{
    setArrayPhoto((arrayPhoto=>{
        arrayPhoto--;
        if (arrayPhoto<0){
        arrayPhoto=image.length-1
        }
        return arrayPhoto
    }))
    }

    const next=()=>{
    setArrayPhoto((arrayPhoto=>{
        arrayPhoto++;
        if (arrayPhoto>image.length-1){
        arrayPhoto=0
        }
        return arrayPhoto
    }))
    }

    return (
        <div className='centerDiv' >
            <button className='slideBtn' onClick={previous}><i className="fa-solid fa-chevron-left"></i></button>
            <img className='imgShop' src={imageSet} alt='img'/>
            <button className='slideBtn' onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    );
}

export default ShopSlide;