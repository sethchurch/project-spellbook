import { useFormContext } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';

interface PasswordInputProps {
  confirm?: boolean;
}

const PasswordInput = ({ confirm }: PasswordInputProps) => {
  const { watch, formState } = useFormContext();

  return (
    <>
      <FormInput isRequired label="Password" name="password" styleVariant="basic" type="password" />
      {confirm ? (
        <FormInput
          isRequired
          watchFlag
          errorMessage={formState.errors.confirmPassword?.message as string}
          label="Confirm Password"
          name="confirmPassword"
          rules={{ validate: (value: string) => watch('password') === value || 'Passwords do not match' }}
          styleVariant="basic"
          type="password"
        />
      ) : null}
    </>
  );
};

export { PasswordInput };
