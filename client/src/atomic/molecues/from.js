import React from 'react';

export const Form = ({ children, ...res }) => {
  return <form {...res}>{children}</form>;
};
