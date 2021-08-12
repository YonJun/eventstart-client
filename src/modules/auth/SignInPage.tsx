import React, { FC } from 'react';
import { Button } from 'ui/Button';
import { SignInForm } from './SignInForm';
import { useRouter } from 'next/router';
import { GridAuthUser } from 'modules/layouts/GridAuthUser';
import { HeaderController } from 'modules/display/HeaderController';

export const SignInPage: FC = () => {
  const router = useRouter();

  return (
    <>
      <HeaderController title="Iniciar sesión" />
      <GridAuthUser>
        <SignInForm />
        <Button
          className="w-full mt-4"
          color="transparent"
          onClick={() => router.push('/register')}
        >
          Registrarse
        </Button>
      </GridAuthUser>
    </>
  );
};
