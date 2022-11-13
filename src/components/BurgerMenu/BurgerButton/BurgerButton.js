import {useState} from 'react';
import {motion} from 'framer-motion';

import './BurgerButton.scss';

const path01Variants = {
  open: {d: 'M3.06061 2.99999L21.0606 21'},
  closed: {d: 'M0 9.5L24 9.5'}
};

const path02Variants = {
  open: {d: 'M3.00006 21.0607L21 3.06064'},
  moving: {d: 'M0 14.5L24 14.5'},
  closed: {d: 'M0 14.5L15 14.5'}
};

const BurgerButton = ({toggle, ...props}) => {
  const [animation, setAnimation] = useState('closed');
  const onClick = () => {
    setAnimation('moving');
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed');
    }, 200);
    toggle();
  };
  return (
    <button onClick={onClick} className="burger-button" {...props}>
      <svg className='burger-button__icon' width="40" height="40" viewBox="0 0 40 40">
        <motion.path
          stroke={'red'}
          animate={animation}
          variants={path01Variants}
        />
        <motion.path
          stroke={'red'}
          animate={animation}
          variants={path02Variants}
        />
      </svg>
    </button>
  );
};

export default BurgerButton;

