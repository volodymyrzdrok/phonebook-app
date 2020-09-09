import React, { Component, Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Loader from './Components/Loader/Loader';
import Alerting from './Components/Alert/Alert';
import Header from './Components/Header/Header';

import routes from './routes';
import { fetchContactsOperation } from './redux/contacts/contactsOperation';

const ContactFormContainer = lazy(() =>
  import('./Components/contactFormContainer'),
);
const Home = lazy(() => import('./Components/Home/Home'));
const Login = lazy(() => import('./Components/Login/Login'));
const Register = lazy(() => import('./Components/Register/Register'));

class App extends Component {
  // componentDidMount() {
  //   this.props.contactsData();
  // }
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register} />
            <Route path={routes.contacts} component={ContactFormContainer} />
            <Route path={routes.home} component={Home} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>

        <Alerting />
      </>
    );
  }
}

const mapDispatchToProps = {
  contactsData: fetchContactsOperation,
};
export default connect(null, mapDispatchToProps)(App);

// const token = useSelector((state) => state.token);
// const history = useHistory();
// useEffect(() => {
//   token ? history.push(routes.home) : history.push(routes.login);
// }, [history, token]);
