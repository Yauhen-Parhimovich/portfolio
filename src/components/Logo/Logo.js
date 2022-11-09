import {Link} from 'react-router-dom';

import './Logo.scss';
import Photo from '../../assets/image/photo.jpg';

const Logo = () => {


  return (
    <div className="logo__wrapper">
      <div className="logo">
        <div className="logo__content">
          <img className="logo__image" src={Photo} alt="photo"/>
          <Link className="logo__link" to="/">
            Main page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
