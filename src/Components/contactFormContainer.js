import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from '@material-ui/core/Container';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Avatar from '@material-ui/core/Avatar';

const contactFormContainer = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Avatar
        style={{
          margin: 'auto',
          marginBottom: '5px',
          backgroundColor: '#f50057',
        }}
      >
        <GroupAddIcon style={{ fontSize: 35 }} />
      </Avatar>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default contactFormContainer;
