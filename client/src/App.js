import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import ErrorPage from './pages/404';
const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/' component={ErrorPage} />
			</Switch>
		</Router>
	);
};

export default App;
