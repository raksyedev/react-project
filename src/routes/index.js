import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePages, LoginPages } from '../pages';
import PrivateRoute from './private';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/" redirectTo="/login" exact component={HomePages} />
      <Route path="/login" exact component={LoginPages} />
    </Switch>
  </Router>
);

export default Routes;
