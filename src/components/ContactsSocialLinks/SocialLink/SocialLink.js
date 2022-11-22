import {useEffect, useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';

import './SocialLink.scss';

const SocialLink = ({className, link, icon}) => {

  const tilt = useRef(null);

  useEffect(() => {

    const options = {
      speed: 400,
      max: 30,
      glare: true,
      'max-glare': 1
    };

    VanillaTilt.init(tilt.current, options);
  }, []);


  return (
    <li className="contacts-section__social-item">
      <a ref={tilt} href={link} className={'contacts-section__social-link ' + className}>
        <i className={'fa ' + icon} aria-hidden="true" ></i>
      </a>
    </li>
  );
};

export default SocialLink;
