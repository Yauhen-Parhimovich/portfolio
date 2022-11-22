import {motion} from 'framer-motion';

import './Skill.scss';
import Progressbar from '../Progressbar/Progressbar';

const Skill = ({color, range, title}) => {

  const item = {
    hidden: {opacity: 0, translateX: -100},
    visible: {opacity: 1, translateX: 0}
  };

  return (
    <motion.div className="skill" variants={item}>
      <h5 className="skill__title">
        {title}
      </h5>
      <div className="skill__range">
        <span className="skill__range-value">{range}%</span>
        <Progressbar range={range} className={color}/>
      </div>
    </motion.div>
  );
};

export default Skill;
