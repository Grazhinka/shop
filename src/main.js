import MainSlide from './mainSlide';
import gift from './gift.png'
import React from "react";
import { gsap } from "gsap";
const { useEffect, useRef } = React;


function Main() {
    const app = useRef();
    useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.from(".buttonToShop", { rotate:360, delay:6 });
        gsap.from(".gift", { y:-1000, ease: 'bounce', duration:5 });
        gsap.from(".slideMain", {duration:3,  repeat:-1, opacity:0});
    }, app);
    return () => ctx.revert();
    });

    return (
    <div className='centerDivColumn' ref={app}>
        <h2>Наши бестселлеры:</h2>
        <div className='slideMain'><MainSlide /></div>
        <button  className="buttonToShop" onClick={()=>{window.location.assign('http://localhost:3000/shop/')}}>К ПОКУПКАМ! </button>
        <img onClick={()=>{alert('Ваш промокод на скидку: CANSHECODE')}} className='centerDiv gift' alt='gift' width='100px' src={gift}/>
    </div>
    );
}

export default Main;