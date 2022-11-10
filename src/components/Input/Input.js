import {useEffect, useState} from 'react';

import './Input.scss';

const Input = ({name, variant, type}) => {

  const [isValidate, setIsValidate] = useState(false);
  const [value, setValue] = useState('');

  const inputHandler = (event) => {
    setValue(event.target.value);
  };

  const inputValidate = (value) => {
    if (value.trim()) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }
  };

  useEffect(() => {
    inputValidate(value);
  }, [value]);

  return (
    <div className="input-box">
      {variant === 'input'
        ? <input
          type={type}
          className={`input input_validate-${isValidate}`}
          value={value}
          onChange={inputHandler}
        />
        : <textarea
          className={`textarea input_validate-${isValidate}`}
          value={value}
          onChange={inputHandler}
        ></textarea>
      }
      <span className="input-placeholder">{name}</span>
      <i className="input-helpers"></i>
    </div>
  );
};

export default Input;
