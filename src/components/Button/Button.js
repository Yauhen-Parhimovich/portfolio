import React from 'react';
import './Button.scss';

const Button = ({children, className, ...props}) => {
  return (
    <button className={'button ' + className} {...props}>
      <span className="button__content">
        {children}
      </span>
    </button>
  );
};

export default Button;
