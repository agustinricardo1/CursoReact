import React, { useState } from 'react'
import reactDom from 'react-dom'
import './Item.css'

const ItemCount = ({stock}) => {
    const [stockTotal, setStockTotal] = useState(stock)
    const [stockUser, setStockUser] = useState(0)

    const sumar = () => {
        if (stockTotal === 0) {
        }else{
            setStockUser( stockUser + 1);
            setStockTotal (stockTotal - 1);
        }
    }

    const restar = () =>{
        if (stockTotal === 0 | stockUser === 0) {
        }else{
            setStockUser(stockUser - 1);
            setStockTotal(stockTotal + 1);
        }
    }

    return(
        <React.Fragment>
            <p>Cantidad en stock: {stockTotal}</p>
            <div className='contador'>
                <button onClick={restar}>-</button>
                <p>{stockUser}</p>
                <button onClick={sumar}>+</button>
            </div>
        </React.Fragment>
    )
}
export default ItemCount