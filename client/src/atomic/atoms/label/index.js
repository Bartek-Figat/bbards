import React from 'react';

export const Label = ({ children, ...res }) => {
  return (
    <label {...res} className="register-label">
      {children}
    </label>
  );
};
