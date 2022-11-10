import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';

import './BurgerItem.scss';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000}
    }
  }
};

const BurgerItem = ({path, value}) => {
  return (
    <motion.li
      className="burger-navigation__item"
      variants={variants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
    >
      <NavLink to={path} className='burger-navigation__link'>
        {value}
      </NavLink>
    </motion.li>
  );
};

export default BurgerItem;
