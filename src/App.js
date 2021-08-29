import './App.css';
import ProductListing from './components/ProductListing/ProductListing';
import LoginPage from './pages/LoginPage/LoginPage';



function App() {
  // Temporary mock for Login Page
const loginMock = true;

  return <>{loginMock ? <LoginPage/> : <ProductListing />}</>;
}

export default App;
