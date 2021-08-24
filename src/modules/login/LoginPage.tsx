import React, { FC, useEffect, useState } from 'react';
import { Button } from 'ui/Button';
import { LoginForm } from './LoginForm';
import { useRouter } from 'next/router';
import { GridAuthUser } from 'modules/layouts/GridAuthUser';
import { HeaderController } from 'modules/display/HeaderController';
import { useTokenStore } from 'modules/auth/useTokenStore';
import { ROOT_AUTH } from 'lib/constants_paths';

export const LoginPage: FC = () => {
  const { push, query } = useRouter();
  const hasTokens = useTokenStore((s) => !!(s.accessToken && s.refreshToken));
  const [tokensChecked, setTokensChecked] = useState(false);

  useEffect(() => {
    if (hasTokens) {
      const next = query.next as string;
      push(next ? next : `/${ROOT_AUTH}`);
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
