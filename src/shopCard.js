import { useState } from 'react';
import './App.css';
import ShopSlide from './shopSlide';


function ShopCard({clothesAllCode}){
const [showText,setShowText]=useState(false)
const [korzinaToggle, setKorzinaToggle] = useState(false);
const [arr,setArr]=useState([])
const [summ,setSumm]=useState(0)
const [input, setInput]=useState('')
const [isDisabled, setIsDisabled] = useState(false);

const showTextClick=(good)=>{
    good.showMore=!good.showMore
    setShowText(!showText)
}

const add=(good)=>{
    let newObj={nameNew:good.name,idNew:good.id,descriptionNew:good.description,showMoreNew:good.showMore,imageNew:good.image,priceNew:good.price}
    const found = arr.some(el => el.idNew === good.id);
    setSumm(summ+good.price)
    if (!found)  setArr(arr.concat(newObj)) ;
    return arr;
}

const del=(idNew,priceNew)=>{
    const newArr=arr.filter(q=>q.idNew !==idNew)
    setArr(newArr)
    setSumm(summ-priceNew)
    if(newArr.length<1){
        setSumm(0)
    }
}

const change=(event)=>{
    setInput(event.toUpperCase())
}

const promo=()=>{
    if(arr.length<1){
        setSumm(0)
    }
    else if (input==='CANSHECODE'){
        setSumm(summ-5)
        setInput('')
        setIsDisabled(!isDisabled)
    }
    else if(isDisabled===true){
        alert('Промокод уже применен')
    }
    else{alert('Такого промокода не существует')}
}

return (
    <div >
        <button className='korzinaBtn shopAllBtn'  onClick={()=>{setKorzinaToggle(!korzinaToggle)}}><i className="fa-solid fa-cart-shopping"></i></button> 
        <div className={korzinaToggle ? "korzinaBlock" : 'korzinaNone'} >
            <div className='top'>
            <p className='flexOne pColor'>В корзине {arr.length} товаров</p>
            {arr.map(((item,index)=>{
                const {idNew,nameNew,priceNew,imageNew}=item
                return(
                <div className='korzinaDiv'  key={index}  >
                    <div className='flexOne'><p >{nameNew}</p></div>
                    <div className='flexOne'><img src={imageNew} width='50px' alt='img'/></div>
                    <div className='flexOne'><p >{priceNew} $</p></div>
                    <div className='flexOne'><button className='deleteBtn' onClick={()=>del(idNew,priceNew)}><i className="fa-solid fa-trash-can"></i></button></div>
                </div>
                )
            }))}
            <div className='korzinaDiv' >
            <input placeholder='Введите промокод' disabled={isDisabled} value={input} onChange={(event)=>change(event.target.value)} />
            <button className='descriptionBtn'  onClick={()=>promo()}>применить</button>
            </div>
            <p className='pColor'>Итого: {summ} $</p>
            <button className='deleteBtn' onClick={()=>{setArr([]); setSumm(0)}}><i className="fa-solid fa-trash-can"></i> Очистить корзину</button>
            </div>
        </div> 

        <div className='container'> 
        {clothesAllCode.map((good=>{
            const {id,name,description,price,showMore}=good
            return(
            <div className='card' key={id}>
                <h2>{name}</h2>
                <ShopSlide numberGood={id}/>
                <p>{showMore? description : description.substring(0,20)+'...'}</p>
                <button className='descriptionBtn'  onClick={()=>showTextClick(good)}>{showMore? 'свернуть описание':'развернуть описание'}</button>
                <h2>{price} $</h2>
                <button className='shopAllBtn'  onClick={()=>add(good)}><i className="fa-solid fa-cart-plus"></i></button> 
            </div>
            )
        }))
        }
        </div>
    </div>
    );
}
export default ShopCard



