import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from '@material-ui/core/Container';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const contactFormContainer = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Avatar
        style={{
          margin: 'auto',
          marginBottom: '5px',
          marginTop: '10px',
          backgroundColor: '#f50057',
        }}
      >
        <GroupAddIcon style={{ fontSize: 28 }} />
      </Avatar>
      <Typography component="h2" variant="h6" style={{ textAlign: 'center' }}>
        Phone Book
      </Typography>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default contactFormContainer;
