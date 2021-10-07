import { Route } from "react-router-dom";

import './App.scss';
import CatalogPage from "./pages/CatalogPage";
import LoginPage from './pages/LoginPage';

function App() {
  return (
		<>
      <Route path={`${process.env.PUBLIC_URL}`}>
        <CatalogPage/>
      </Route>
			<Route path={`${process.env.PUBLIC_URL}/login`}>
        <LoginPage/>
      </Route>
		</>
	);
}

export default App;
