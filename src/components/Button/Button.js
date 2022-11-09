import React from 'react';
import './Button.scss'

const Button = ({children, className, ...props}) => {
  return (
    <button className={'button ' + className} {...props}>
      <span
        className="button__text button__text_1"
      >
        {children || 'Button'}
      </span>
      <span
        className="button__text button__text_2"
      >
        {children || 'Button'}
      </span>
    </button>
  );
};

export default Button;
