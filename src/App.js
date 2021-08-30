import './App.css';
import { useState, useEffect} from 'react';
import Header from './components/header'
import products from './products.json'
import Product from './components/product'
import Footer from './components/footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {

	const [money, setMoney] = useState(100);
	const [basket, setBasket] = useState([]);
	const [total, setTotal] = useState();

	useEffect(() => {
		var x = 0;
		basket.forEach((item) => {
			x += ( item.amount * (products.find(product => product.id === item.id)).price )
		})
		setTotal(x);
		/*
		const t = basket.reduce((acc, item) => {
			return ( item.amount * (products.find(product => product.id === item.id)).price )
		}, 0)

		console.log(x);
		console.log(t);
		*/
	},[basket])

	return (
		<>
			
			<Container>
				
				<Header total={total} money={money} />
				<Row>
			{products.map(product => (
				<Product
					key={product.id}
					basket={basket}
					setBasket={setBasket}
					product={product}
					total={total}
					money={money}
				/>
			))}
					</Row>
			<Footer basket={basket} setBasket={setBasket} />

			</Container>
		</>
	);
}

export default App;
