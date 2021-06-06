import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMe } from '../redux/actions';
import { isUserAuthenticated } from '../utils';

const PrivateRoute = ({ component: Component, redirectTo, roles, ...rest }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authState.error && !authState.user && !authState.loading && authState.token) {
      dispatch(getMe());
    }
  }, [authState.user, authState.loading, authState.token, dispatch]);

  if (authState.error) {
    return (
      <div>
        <h1 className="text-danger">ERROR</h1>
        <pre>{JSON.stringify(authState.error, null, 2)}</pre>
      </div>
    );
  }

  if (authState.loading) {
    return <div>loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isUserAuthenticated()) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: redirectTo, state: { from: props.location } }} />;
        }

        const loggedInUser = authState.user;
        // check if route is restricted by role
        if (roles && roles.indexOf(loggedInUser.role) === -1) {
          // role not authorised so redirect to home page
          return <Redirect to={{ pathname: '/' }} />; // yout path private
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.string,
  roles: PropTypes.string,
  location: PropTypes.string,
};

export default PrivateRoute;
