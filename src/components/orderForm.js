import React from 'react';

const OrderForm = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();
    }

    return (
        <div className="order-form_container">
            <div className="order-form_object">
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
        </div>
    )
}

export default OrderForm;