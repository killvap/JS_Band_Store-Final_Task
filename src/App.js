import './App.scss';
import ProductListing from './components/ProductListing/ProductList/ProductListing';
import LoginPage from './pages/LoginPage/LoginPage';



function App() {
  // Temporary mock for Login Page
const loginMock = false;

  return <>{loginMock ? <LoginPage/> : <ProductListing />}</>;
}

export default App;
