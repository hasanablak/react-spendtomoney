import { useState } from "react"

function Product({ product, basket, setBasket }) {
	
	const addBasket = (e) => {
		const checkBasket = basket.find(s => s.id == product.id)
		if (checkBasket) {

			checkBasket.amount++;

			setBasket( [...basket.filter(item => item.id !== product.id), checkBasket])

		} else {
			product.amount = 1;
			setBasket( [...basket, product])
		}
	}


	return (
		<div className="product">
			<h6>{product.title}</h6>
			<div className="price">${product.price}</div>
			<div className="actions">
				<button>Sat</button>
				<span className="amount">0</span>
				<button onClick={addBasket}>Satın Al</button>
			</div>
			<style jsx>{`
			.product{
				padding: 10px;
				background: #fff;
				border: 1px solid #ddd;
				margin:10px;
			}
		 `}</style>
		</div>
		
	)
}

export default Product