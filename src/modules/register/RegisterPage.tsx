import React, { FC } from 'react';
import { Button } from 'ui/Button';
import { RegisterForm } from './RegisterForm';
import { useRouter } from 'next/router';
import { GridAuthUser } from 'modules/layouts/GridAuthUser';
import { HeaderController } from 'modules/display/HeaderController';

export const Register: FC = () => {
  const router = useRouter();

  return (
    <>
      <HeaderController title="Registrarse" />
      <GridAuthUser>
        <RegisterForm />
        <Button
          className="w-full mt-4"
          color="transparent"
          onClick={() => router.push('/')}
        >
          Ir a inicio
        </Button>
      </GridAuthUser>
    </>
  );
};
