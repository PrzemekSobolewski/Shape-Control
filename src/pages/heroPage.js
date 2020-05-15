import React from 'react';
import ShapeControlIMG from '../asstets/images/ShapeControl2.png';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaLeaf, FaAward,  FaBox } from 'react-icons/fa';
import { BsShieldShaded } from 'react-icons/bs';

const HeroPage = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
    }
    return (
        <div className={"hero-page_content"}>
            <header className={"hero-page_header"}>
                <div>
                    <h1>SHAPE CONTROL</h1>
                </div>
                <div className={"hero-page_header-desc"}>
                    <span><FaLeaf/> W pełni naturalny skład</span>
                    <span><BsShieldShaded/> Trwałe efekty</span>
                    <span><FaAward id="award"/> 100% gwarancja rezultatów</span>
                </div>
            </header>
            <div className={"hero-page_rabat"}>
                <p>Kupując teraz zyskujesz RABAT 50%</p>
                <p>
                    <span className={"old-price"}>338 PLN</span>
                    <span className={"arrow-icon"}> <FiArrowRight/> </span>
                    <span className={"new-price"}>169 PLN</span>
                </p> 
            </div>
            <section className={"hero-page_section"}>
                <div className={"hero-page_desc"}> 
                    <h1>SHAPE CONTROL</h1>
                    <h3>DLA KANAPOWCÓW, KTÓRZY PRAGNĄ ZYSKAĆ IDEALNĄ SYLWETKĘ</h3>
                    <div className={"hero-page_list"}>
                        <p><span><FiCheck/></span>Oczyszcza organizm z toksyn i przygotowuje go do redukcji wagi</p>
                        <p><span><FiCheck/></span>Wyrównuje bilans wody organizmu</p>
                        <p><span><FiCheck/></span>Błyskawicznie spala zbędną tkankę tłuszczową</p>
                        <p><span><FiCheck/></span>Hamuje apetyt i wysyła do mózgu informacje o uczuciu sytości</p>
                        <p><span><FiCheck/></span>Zamienia tłuszcz w energię i dodaje wigoru </p>
                        <p><span><FiCheck/></span>Wspomaga wytwarzanie hormonu szczęścia (dopaminy)</p>
                    </div>
                </div>
                <div className={"hero-page_product"}>
                    <img src={ShapeControlIMG}  alt="Shape Control"/>
                    {
                        window.innerWidth > 900 ? <></> :
                            <div className="hero-page_form-container">
                                <form onSubmit={handleSubmit}>
                                    <input name="name" type="text" placeholder="Imię"/>
                                    <input name="email" type="email" placeholder="Email"/>
                                    <p>
                                        Prosimy zwrócić uwagę na fakt, że stawki VAT mogą się różnić w zależności od przepisów
                                        jakie obowiązują w kraju, w którym było składane zamówienie. Pracownicy naszego działu sprzedaży/obsługi klienta
                                        z radością wam wyjaśnią
                                    </p>
                                    <button type="submit">ZAMÓW</button>
                                </form>
                            </div> 
                    }
                </div>
            </section>
            <footer className="hero-page_footer">
                <div className="hero-page_footer-desc">
                    <span><FaBox id="box"/></span>Dostawa pod Twoje drzwi <span className="hero-page_additional-message">- standardowa obsługa zamówień</span>
                </div>
            </footer>
        </div>
    )
}

export default HeroPage;