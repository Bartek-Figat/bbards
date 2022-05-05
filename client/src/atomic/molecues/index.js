import React from 'react';
import { FormContainer } from './formContainer';
import { FormWrapper } from './formWrapper';

export const FormContent = ({ children, ...res }) => {
  return (
    <FormContainer>
      <FormWrapper>{children}</FormWrapper>
    </FormContainer>
  );
};
