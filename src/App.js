import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

const App = () => {
  const token = useSelector(state => state.token);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    token ? history.push(routes.contacts) : history.push(routes.home);
  }, [history, token]);

  useEffect(() => {
    token && dispatch(fetchContactsOperation(token));
  }, [dispatch, token]);

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
};

export default App;

// class App extends Component {
//   componentDidMount() {
//     this.props.contactsData(this.props.token);
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <Suspense fallback={<Loader />}>
//           <Switch>
//             <Route path={routes.login} component={Login} />
//             <Route path={routes.register} component={Register} />
//             <Route path={routes.contacts} component={ContactFormContainer} />
//             <Route path={routes.home} component={Home} />
//             <Redirect to={routes.home} />
//           </Switch>
//         </Suspense>

//         <Alerting />
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   token: state.token,
// });
// const mapDispatchToProps = {
//   contactsData: fetchContactsOperation,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
