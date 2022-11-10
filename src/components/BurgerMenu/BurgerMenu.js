import {useRef} from 'react';
import {motion, useCycle} from 'framer-motion';

import BurgerButton from './BurgerButton/BurgerButton';
import {useDimensions} from '../../hooks/useDimensions';
import BurgerNavigation from './BurgerNavigation/BurgerNavigation';

import './BurgerMenu.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200 - 5}px at 92% 8%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 92% 8%)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};


const BurgerMenu = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);

  const handleClick = () => {
    toggleOpen()
  }

  const style = ['burger-menu', `burger-menu_is-active-${isOpen}`]


  return (
    <motion.nav
      className={style.join(' ')}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar}/>
      <BurgerNavigation/>
      <BurgerButton toggle={handleClick}/>
    </motion.nav>
  );
};

export default BurgerMenu;
