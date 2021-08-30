import './App.css';
import { useState, useEffect} from 'react';
import Header from './components/header'
import products from './products.json'
import Product from './components/product'
import Footer from './components/footer'

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
			<Header total={total} money={money} />
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
			<Footer basket={basket} setBasket={setBasket} />

		</>
	);
}

export default App;
