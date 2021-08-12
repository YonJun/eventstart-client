import React, { FC } from 'react';
import { SignInForm } from './SignInForm';

export const SignInPage: FC = () => {
  return (
    <div className="grid  lg:grid-cols-2 grid-flow-row gap-4 h-screen">
      <div className="bg-primary-300 h-full hidden lg:block" />
      <div className="flex h-full items-center justify-center">
        <SignInForm />
      </div>
    </div>
  );
};
