import './ContactsSocialLinks.scss';
import SocialLink from './SocialLink/SocialLink';

const ContactsSocialLinks = () => {


  const socialLinks = [
    {
      className: 'contacts-section__social-link__github',
      link: 'https://github.com/Yauhen-Parhimovich',
      icon: 'fa-github'
    },
    {
      className: 'contacts-section__social-link__linkedin',
      link: 'https://www.linkedin.com/in/yauhen-parhimovich/',
      icon: 'fa-linkedin'
    },
    {
      className: 'contacts-section__social-link__telegram',
      link: 'https://t.me/Yauhen_Parhimovich',
      icon: 'fa-telegram'
    },
    {
      className: 'contacts-section__social-link__mail',
      link: 'mailto:yauhen.parhimovich@gmail.com',
      icon: 'fa-envelope'
    }
  ]

  return (
    <ul className="contacts-section__social">
      {socialLinks.map((link, index) => {
        return (
          <SocialLink
            key={index}
            className={link.className}
            icon={link.icon}
            link={link.link}
          />
        )
      })}
    </ul>

  );
};

export default ContactsSocialLinks;
