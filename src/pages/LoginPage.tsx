import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Box,
  Paper,
  Container,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import { SessionModule } from '../redux/session/SessionModule';
import { Session } from '../models/auth/Session';
import { useSession } from '../redux/session/Selector';

const Content = () => {
  const session = useSession();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));

  const fakeLogin = async () => {
    setLoading(true);
    console.log('current session: ', session);
    console.log('call auth api');
    await sleep(1000); // dummy wait

    // dummy login check
    if (userId === 'test' && password === 'password') {
      const newSession: Session = {
        principal: {
          id: userId,
          name: 'john do',
        },
        token: 'xxxxxxxxxx',
      };
      setErrors([]);
      dispatch(SessionModule.actions.updateSession(newSession));
    } else {
      setErrors(['incorrect user id or password']);
    }

    console.log('finish login');
    setLoading(false);
  };

  return (
    <Container>
      <Paper>
        <Box p={4}>
          <Box p={2}>
            <p>Login Page</p>
          </Box>
          <Box p={2}>
            <TextField
              type="text"
              placeholder="input your ID"
              onChange={(e) => setUserId(e.target.value)}
            />
          </Box>
          <Box p={2}>
            <TextField
              type="password"
              placeholder="input your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          {errors.length > 0 && <Box p={2}>{errors.map((e) => <p>{e}</p>)}</Box>}
          <Box p={2}>
            <Button
              type="submit"
              onClick={() => fakeLogin()}
              variant="outlined"
              disabled={loading}
            >
              ログインする
            </Button>
            {loading && <CircularProgress size={24} />}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export const LoginPage = Content;
