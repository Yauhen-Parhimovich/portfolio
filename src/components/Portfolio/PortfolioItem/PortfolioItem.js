import {motion} from 'framer-motion';

import './PortfolioItem.scss';
import {Link} from 'react-router-dom';

const PortfolioItem = ({name, image, width}) => {

  const item = {
    hidden: {translateX: 300, width: 0, height: 0},
    visible: {translateX: 0, width: width, height: width}
  };

  return (
    <motion.li className='portfolio-item' initial="hidden"
               animate="visible"
               variants={item}>
      <div className='portfolio-item__image' style={{width: width, height: width}}>
        <img className='portfolio-item__photo' src={image} alt={name} style={{width: width, height: width}}/>
      </div>
      <div className="portfolio-item__hover">
        <Link to='/portfolio'>
          See more
        </Link>
      </div>
    </motion.li>
  );
};

export default PortfolioItem;
