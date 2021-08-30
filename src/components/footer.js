import { useState } from 'react'

function Footer({basket}) {
    return (
        basket.map((item) => (
            <div>{item.amount} x {item.title}</div>
        ))
    )
}

export default Footer