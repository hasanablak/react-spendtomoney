import { useState } from "react"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Product({ product, basket, setBasket, total, money }) {
	
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
		<>
			<Col xs={6} md={3}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={product.img} />
					<Card.Body>
						<Card.Title>{product.title}</Card.Title>
						<Card.Text>
							${product.price}
						</Card.Text>
						<InputGroup className="mb-3">
							<Button size="sm" disabled={!basketItem} onClick={removeBasket} variant="outline-success">Sat</Button>
							<FormControl
								aria-label="Example text with button addon"
								aria-describedby="basic-addon1"
								value={basketItem && basketItem.amount || 0}
							/>
							
							<Button size="sm" disabled={total+product.price > money } onClick={addBasket} variant="outline-primary">Satın Al</Button>
							
  						</InputGroup>
					</Card.Body>
				</Card>
			</Col>
		</>
	)
}

export default Product