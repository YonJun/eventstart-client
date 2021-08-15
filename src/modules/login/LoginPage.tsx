import React, { FC, useEffect, useState } from 'react';
import { Button } from 'ui/Button';
import { LoginForm } from './LoginForm';
import { useRouter } from 'next/router';
import { GridAuthUser } from 'modules/layouts/GridAuthUser';
import { HeaderController } from 'modules/display/HeaderController';
import { useTokenStore } from 'modules/auth/useTokenStore';

export const LoginPage: FC = () => {
  const { push } = useRouter();

  const hasTokens = useTokenStore((s) => !!(s.accessToken && s.refreshToken));

  const [tokensChecked, setTokensChecked] = useState(false);

  useEffect(() => {
    if (hasTokens) {
      push('/dash');
    } else {
      setTokensChecked(true);
    }
  }, [hasTokens, push]);

  if (!tokensChecked) return null;

  return (
    <>
      <HeaderController title="Iniciar sesión" />
      <GridAuthUser>
        <LoginForm />
        <Button
          className="w-full mt-4"
          color="transparent"
          onClick={() => push('/register')}
        >
          Registrarse
        </Button>
      </GridAuthUser>
    </>
  );
};
