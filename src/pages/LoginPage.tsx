import React from 'react';
import {
  Button,
  Box,
  Paper,
  Container,
  TextField,
} from '@material-ui/core';

const Content = () => {
  const login = () => {
    console.log('login');
  };

  return (
    <Container>
      <Paper>
        <Box p={4}>
          <Box p={2}>
            <p>Login Page</p>
          </Box>
          <Box p={2}>
            <TextField type="text" placeholder="input your ID" />
          </Box>
          <Box p={2}>
            <TextField type="password" placeholder="input your password" />
          </Box>
          <Box p={2}>
            <Button type="submit" onClick={() => console.log('click')}>ログインする</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export const LoginPage = Content;
