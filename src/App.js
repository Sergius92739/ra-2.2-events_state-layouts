import Store from './components/Store';
import './styles/App.scss';
import products from './data/products'

function App() {
  return <Store products={products} />
}

export default App;
