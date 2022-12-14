import {motion} from 'framer-motion';

import BurgerItem from '../BurgerItem/BurgerItem';
import {router} from '../../../router';

import './BurgerNavigation.scss'
import SocialLinksMenu from '../../SocialLinksMenu/SocialLinksMenu';

const BurgerNavigation = () => {

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2, x: 0 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1, x: '-100%' }
    }
  };

  return (
    <div className='burger-navigation'>
      <motion.ul
        variants={variants}
        className='burger-navigation__list'
      >
        {router.map(route => {
          return (
            <BurgerItem path={route.path} key={route.path} value={route.value}/>
          )
        })}
      </motion.ul>
    </div>
  );
};

export default BurgerNavigation;
