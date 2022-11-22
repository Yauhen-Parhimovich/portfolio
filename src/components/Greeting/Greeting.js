import './Greeting.scss';
import {motion} from 'framer-motion';

const Greeting = ({text}) => {

  const item = {
    hidden: { opacity: 0},
    visible: { opacity: 1}
  };

  const greeting = text.split('');
  return (
    <motion.div className="greeting__wrapper" variants={item}>
      <div className="greeting">
        {greeting.map((item, index) => {
          return <span className="greeting__item" key={index} data-value={index}>{item === ' ' ? <span>&nbsp;</span> : item === '\n' ? <div style={{width: '100vw'}}> </div>  : item}</span>;
        })}
      </div>
    </motion.div>

  );
};

export default Greeting;
