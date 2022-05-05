import React from 'react';

export const FormContainer = ({ children, ...res }) => {
  return (
    <div className="register-input-container" {...res}>
      {children}
    </div>
  );
};
