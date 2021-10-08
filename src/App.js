import { Route } from "react-router-dom";

import './App.scss';
import "./scss/common.scss"
import CatalogPage from "./pages/CatalogPage";
import LoginPage from './pages/LoginPage';
import Header from "./components/Header/Header";

function App() {
  return (
		<>
      {/* <Header/> */}
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
