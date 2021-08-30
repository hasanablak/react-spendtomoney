import { useState } from "react"

function Product({ product, basket, setBasket }) {
	
	const basketItem = basket.find(item => item.id === product.id);

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

	const removeBasket = (e) => {
		// Item'in durumu 1 ise, itemi komple silelim,
		// Item'in durumu 1 değil ise -1 yapalım
		
		const currentBasket = basket.find(s => s.id == product.id);
		const basketWithoutCurrent = [...basket.filter(item => item.id !== product.id)];

		currentBasket.amount--;
		
		if (currentBasket.amount == 0) {
			// Komple silelim
			setBasket([...basketWithoutCurrent]);
		} else {
			// 1 azaltalım
			setBasket([...basketWithoutCurrent, currentBasket]);
		}
	}

	return (
		<div className="product">
			<h6>{product.title}</h6>
			<div className="price">${product.price}</div>
			<div className="actions">
				<button disabled={!basketItem} onClick={removeBasket}>Sat</button>
				<span className="amount">{basketItem && basketItem.amount || 0}</span>
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