import './SocialLinksMenu.scss';

const SocialLinksMenu = () => {
  return (
    <ul className='social-links__list'>
      <li className="social-links__item">
        <a href="https://github.com/Yauhen-Parhimovich" className="social-links__link social-links__link-github">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li className="social-links__item">
        <a href="https://www.linkedin.com/in/yauhen-parhimovich/" className="social-links__link social-links__link-linkedin">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </li>
      <li className="social-links__item">
        <a href="https://t.me/Yauhen_Parhimovich" className="social-links__link social-links__link-telegram">
          <i className="fa fa-telegram" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinksMenu;
