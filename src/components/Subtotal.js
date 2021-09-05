import React from 'react'
import CurrencyFormat from "react-currency-format"

import '../css/Subtotal.css'
import { useStateValue } from '../redux/StateProvider'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    const getBasketTotal = () => {
        let total = 0;
        for (const item of basket) {
            total += item.price;
        }
        return total;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'£'}
            />
        </div>
    )
}

export default Subtotal
