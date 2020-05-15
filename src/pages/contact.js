import React from 'react'
import ShapeControlIMG from '../asstets/images/ShapeControl2.png';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import OrderForm from '../components/orderForm';
import Brake from '../components/brake';

const Contact = () => {
    return(
        <div className="contact_content">
            <div className="contact_container"> 
                <header className="contact_header">
                    <h2>W JAKI SPOSÓB DZIAŁAMY?</h2>
                </header>
                <section className="contact_section">
                    <div className="contact_info">
                        <h1>1</h1>
                        <p> Złóż zamówienie za pośrednictwem formularza, jego wypełnienie zajmie Ci kilka sekund </p>
                    </div>
                    <div className="contact_info">
                        <h1>2</h1>
                        <p> Zaczekaj na telefon od konsultanta, który poinformuje Cię o szczegółach </p>
                    </div>
                    <div className="contact_info">
                        <h1>3</h1>
                        <p> Kurier dostarczy Twoją paczkę w ciągu 2 – 3 dni roboczych </p>
                    </div>
                </section>
            </div>
            <Brake/>
            <footer className="contact_footer">
                <div className="contact_footer-container">
                    <div className="contact_footer-content-first">
                        <h4>NIE MA LEPSZEGO SPOSOBU NA ZRZUCENIE NADPROGRAMOWYCH KILOGRAMÓW NIŻ SHAPE CONTROL!</h4>
                        <div className={"contact_rabat"}>
                            <p>Kupując teraz zyskujesz RABAT 50%</p>
                            <p>
                                <span className={"old-price"}>338 PLN</span>
                                <span className={"arrow-icon"}> <FiArrowRight/> </span>
                                <span className={"new-price"}>169 PLN</span>
                            </p> 
                        </div>
                    </div>
                    <div className="contact_footer-content-second">
                        <div>
                            <img src={ShapeControlIMG} width={300} height={475} alt="Shape Control"/>
                        </div>
                        <div className="contact_footer-desc">
                            <h3>PRZESTAW SWÓJ ORGANIZM NA TRYB SPALANIA TKANKI TŁUSZCZOWEJ</h3>
                            <p><span><FiCheck/></span>Oczyszcza organizm z toksyn i przygotowuje go do redukcji wagi</p>
                            <p><span><FiCheck/></span>Wyrównuje bilans wody organizmu</p>
                            <p><span><FiCheck/></span>Błyskawicznie spala zbędną tkankę tłuszczową</p>
                            <p><span><FiCheck/></span>Hamuje apetyt i wysyła do mózgu informacje o uczuciu sytości</p>
                            <p><span><FiCheck/></span>Zamienia tłuszcz w energię i dodaje wigoru </p>
                            <p><span><FiCheck/></span>Wspomaga wytwarzanie hormonu szczęścia (dopaminy)</p>
                        </div>
                        {
                            window.innerWidth > 900 ?  <></> : <OrderForm/>
                        }
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contact;