import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      )}
    />
  );
}

export default PrivateRoute;
