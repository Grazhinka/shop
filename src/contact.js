import map from './map.png'

function Contact(){
    return(
        <div className="centerDivColumn">
            <h3 className='pColor'>Контакты:</h3>
            <p>г.Гродно, пр.Космонавтов, 81</p>
            <p className='pColor'>тел: +375 29 777 77 77</p>
            <p>e-meil: 123@mail.ru</p>
            <p>Режим работы: ежедневно с 10:00 до 19:00</p>
            <a className="centerDivColumn map"  href="https://yandex.by/maps/-/CCUZIRs6cD"><img src={map} width='60%' /></a>
        </div>
    )
}
export default Contact
