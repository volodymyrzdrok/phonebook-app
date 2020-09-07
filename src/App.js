import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from './Components/Loader/Loader';
import Alerting from './Components/Alert/Alert';
import Header from './Components/Header/Header';

import routes from './routes';
import { fetchContactsOperation } from './redux/contacts/contactsOperation';

const ContactFormContainer = lazy(() =>
  import('./Components/contactFormContainer'),
);
const Login = lazy(() => import('./Components/Login/Login'));
const Register = lazy(() => import('./Components/Register/Register'));

class App extends Component {
  componentDidMount() {
    this.props.contactsData();
  }
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register} />
            <Route path={routes.contacts} component={ContactFormContainer} />

            {/* <Redirect to={routes.register} /> */}
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
