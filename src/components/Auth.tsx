import React, { PropsWithChildren } from 'react';
import { Redirect } from 'react-router-dom';
import { useSession } from '../redux/Selector';

// check session status and redirect to login page if not logged in
export const Auth = ({ children }: PropsWithChildren<any>) => {
  const session = useSession();

  if (session === 'guest') {
    return <Redirect to="/login" />;
  }

  return (
    <>
      {children}
    </>
  );
};
