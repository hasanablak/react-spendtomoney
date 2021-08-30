import { useState } from 'react'

function Footer({ basket, setBasket }) {
    
    const reseBasket = (e) => {
        setBasket([]);
    }

    return (
        <>
            {basket.map((item) => (
                <div>{item.amount} x {item.title}</div>
            ))}
            
            <button onClick={reseBasket}>Sepeti Sıfırla</button>
        </>
    )
}

export default Footer