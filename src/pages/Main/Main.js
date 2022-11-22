import {useNavigate} from 'react-router-dom';
import Layout from '../../HOC/Layout/Layout';

import AnimateBackground from '../../components/AnimateBackground/AnimateBackground';
import Title from '../../components/Title/Title';
import Greeting from '../../components/Greeting/Greeting';
import Button from '../../components/Button/Button';
import TagCloud from '../../components/TagCloud/TagCloud';
import ContactsSocialLinks from '../../components/ContactsSocialLinks/ContactsSocialLinks';
import Portfolio from '../../components/Portfolio/Portfolio';

import './Main.scss';

const Main = () => {

  const text = `
  Hi!
  My name is Yauhen!
  I'm Frontend developer
  You are welcome
  on my site!
  `;

  const navigate = useNavigate();

  return (
    <>
      <div className="main">
        <section className="main-section">
          <AnimateBackground/>
          <div
            className="main-section__wrapper"
          >
            <Greeting
              text={text}
            />
          </div>
        </section>
        <section className="main-section">
          <Title className="main-section__title">About</Title>
          <div className="main-section__content">
            <div className="about-section">
              <div className="about-section__info">
                <p className="about-section__text">
                  Front-end developer with 2+ years of experience. Creation and support of SPA-applications on
                  React and Redux. Experienced in mobile application creation on Ionic + Vue.
                  I work in a team and entirely independently.
                </p>
                <Button className="about-section__button" onClick={() => navigate('/about')}>See more</Button>
              </div>
              <div className="about-section__data">
                <TagCloud/>
              </div>
            </div>

          </div>
        </section>
        <section className="main-section">
          <Title className="main-section__title">Portfolio</Title>
          <div className="main-section__content">
            <p className="main-portfolio__text">
              A small gallery of recent projects chosen by me. I've done them all together with amazing people from
              companies around the globe. It's only a drop in the ocean compared to the entire list.
            </p>
            <Portfolio/>
            <Button
              className="main-portfolio__button"
              onClick={() => navigate('/portfolio')}
            >
              Portfolio
            </Button>
          </div>

        </section>
        <section className="main-section">
          <Title className="main-section__title">Contacts me</Title>
          <div className="main-section__content">

            <div className="contacts-section">
              <p className="contacts-section__text">
                Если вы ищите талантливого разработчика - я тот кто вам нужен. Смело переходите в  <Button
                className="contacts-section__button"
                onClick={() => navigate('/contacts')}
              >
                Контакты
              </Button> и свяжитесь
                со мной наиболее удобным для вас способом, или же заполните форму, и я свяжусь с вами сам и мы обсудим
                условия совместной работы.
              </p>
              <ContactsSocialLinks/>
            </div>
          </div>

        </section>
        <footer className="footer">
          <div className="footer-bottom">Идея, дизайн, разработка - всё сам.</div>
        </footer>
      </div>
    </>
  );
};

export default Layout(Main);
