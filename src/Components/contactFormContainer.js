import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from '@material-ui/core/Container';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import bg from './bg.png';

const contactFormContainer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat',
        height: '86vh',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Avatar
          style={{
            margin: 'auto',
            marginBottom: '5px',
            marginTop: '10px',
            backgroundColor: 'rgb(244, 67, 54)',
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
    </div>
  );
};

export default contactFormContainer;
