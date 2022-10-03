import { useState } from 'react';
import { useEffect } from 'react';

function MainSlide() {
    const imageArray=['https://images.pexels.com/photos/7624800/pexels-photo-7624800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3775002/pexels-photo-3775002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5885844/pexels-photo-5885844.jpeg']

    const [people,setPeople]=useState(0);
    const image=imageArray[people]

    useEffect(() => {
        setInterval(() => {
            setPeople((people=>{
                people++;
                if (people>imageArray.length-1){
                people=0
                }
                return people
            }))
        }, 3000);
    }, []);

    return (
    <div  className='centerDiv'>
        <img className='imgMain' src={image}  alt='img'/>
    </div>
    );
}

export default MainSlide;