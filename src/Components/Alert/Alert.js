import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import { getAlert } from '../../redux/contacts/contactsSelector';
import { CSSTransition } from 'react-transition-group';

const Alerting = () => {
  const alert = useSelector(state => getAlert(state));
  return (
    <CSSTransition
      timeout={250}
      in={alert}
      appear={true}
      unmountOnExit
      classNames="alert"
    >
      <Alert variant="filled" severity="error" className="errorComp">
        Contact already exists!
      </Alert>
    </CSSTransition>
  );
};

export default Alerting;
