import React from 'react';

export const FormWrapper = ({ children, ...res }) => {
  return (
    <div className="register-input-wrapper" {...res}>
      {children}
    </div>
  );
};
