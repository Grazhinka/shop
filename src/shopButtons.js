function ShopButtons({chosenClothesCode}){
    return(
        <div className="displayAdapt" >
            <button className="shopButton" onClick={()=>chosenClothesCode('платье')}>Платья</button>
            <button className="shopButton" onClick={()=>chosenClothesCode('верхняя одежда')}>Верхняя одежда</button>
            <button className="shopButton" onClick={()=>chosenClothesCode('костюм')}>Костюмы</button>
        </div>
    )
}
export default ShopButtons