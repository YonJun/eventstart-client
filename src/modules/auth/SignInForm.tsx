import React, { FC } from 'react';
import { Button } from 'ui/Button';
import { Input } from 'ui/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

type FormData = {
  fieldEmail: string;
  fieldPass: string;
};
const schema: SchemaOf<FormData> = yup.object().shape({
  fieldEmail: yup.string().email().required(),
  fieldPass: yup.string().required(),
});

export const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fieldEmail: 'testUser@gmail.com',
      fieldPass: 'mysecretpass321',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <div>EventStart</div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Correo:
          </label>
          <Input
            id="email"
            type="email"
            {...register('fieldEmail')}
            error={errors.fieldEmail?.message}
          />
        </div>
        <div className="relative">
          <label htmlFor="pass" className="leading-7 text-sm text-gray-600">
            Contraseña:
          </label>
          <Input
            id="pass"
            type="password"
            {...register('fieldPass')}
            error={errors.fieldPass?.message}
          />
        </div>
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
        <Button type="submit" className="w-full" color="transparent">
          Registrarse
        </Button>
      </form>
    </div>
  );
};
