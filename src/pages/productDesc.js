import React from 'react';
import BodySlim from '../asstets/images/bodySlim.png';

const ProductDesc = () => {
    return (
        <div className="product-desc_content">
            <div className="product-desc_container">
                <header className="product-desc_header">
                    
                </header>
                <section className="product-desc_section">
                    
                    <div className="product-desc_info">
                        <h2>STOSOWANIE</h2>
                        <h2>SHAPE CONTROL</h2>
                        <p>
                            <span>1.</span> 
                            Zastosuj 1 tabletkę SHAPE CONTROL w godzinach prannych, 
                            na przykład tuż po śniadaniu. 
                            Tabletka błyskawicznie zostaje przyswojona, dzięki czemu efekt odchudzenia jest natychmiastowy!
                        </p>
                        <p>
                            <span>2.</span> 
                            Wystarczy jedna tabletka na dobę. Zawarte w niej składniki aktywne natychmiast rozpoczynają proces
                            eliminowania toksyn oraz „rozbijają” zgromadzoną tkankę tłuszczową. 
                        </p>
                    </div>
                    <div className="product-desc_slim-image">
                        <img src={BodySlim} width={300} height={300} alt="Slim Body"/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductDesc;