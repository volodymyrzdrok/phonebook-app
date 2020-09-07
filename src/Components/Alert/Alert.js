import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { getAlert } from '../../redux/contacts/contactsSelector';
import { CSSTransition } from 'react-transition-group';

const Alerting = ({ alert }) => {
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

const mapStateToProps = state => ({
  alert: getAlert(state),
});

export default connect(mapStateToProps)(Alerting);
