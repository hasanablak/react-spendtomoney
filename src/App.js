import './App.css';
import { useState, useEffect} from 'react';
import Header from './components/header'
import products from './products.json'
import Product from './components/product'
import Footer from './components/footer'

function App() {

	const [money, setMoney] = useState(100);
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		console.log(basket);
	},[basket])

	return (
		<>
			<Header money={money} />
			{products.map(product => (
				<Product key={product.id} basket={basket} setBasket={setBasket} product={product}/>
			))}
			<Footer basket={basket} />

		</>
	);
}

export default App;
