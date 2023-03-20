import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Books from './Books';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/books" component={Books} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
