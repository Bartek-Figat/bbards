import React from 'react';

export const Button = ({ children, ...res }) => {
  return (
    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full p-2 rounded-sm" {...res}>
      {children}
    </button>
  );
};
