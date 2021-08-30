import './App.css';
import { useState, useEffect} from 'react';
import Header from './components/header'
import products from './products.json'
import Product from './components/product'

function App() {

	const [money, setMoney] = useState(100);

	return (
		<>
			<Header money={money} />
			{products.map(product => (
				<Product product={product}/>
			))}
		</>
	);
}

export default App;
