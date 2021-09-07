import React from 'react'
import CurrencyFormat from "react-currency-format"

import '../css/Subtotal.css'
import { getBasketTotal } from '../redux/Reducer';
import { useStateValue } from '../redux/StateProvider'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="a-size-medium">
                            Subtotal ({basket.length} items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'£'}
            />
        </div>
    )
}

export default Subtotal
