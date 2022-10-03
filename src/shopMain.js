import { useState } from "react";
import { data } from "./data";
import React from 'react';
import ShopCard from "./shopCard";
import ShopButtons from "./shopButtons";

function ShopMain(){
    const [clothesAll,setClothesAll]=useState(data)

    const chosenClothes =(searchTerm) =>{
        const newClothes = data.filter(el=>el.searchTerm===searchTerm)
        setClothesAll(newClothes)
    }

    const bests =(best) =>{
        const newClothes = data.filter(el=>el.best===best)
        setClothesAll(newClothes)
    }

    return(
        <div>
            <div className="shopDivButtons">
                <ShopButtons  chosenClothesCode={chosenClothes} />
                <button className="shopButton pColor" onClick={()=>{bests('бестселлер')}}>бестселлеры</button>
                <button className="shopButton" onClick={()=>{setClothesAll(data)}}>всё</button> 
            </div>
            <ShopCard clothesAllCode={clothesAll} /> 
        </div>
    )
}

export default ShopMain

