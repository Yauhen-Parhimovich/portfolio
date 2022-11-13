import Layout from '../../HOC/Layout/Layout';

import './Main.scss';
import AnimateBackground from '../../components/AnimateBackground/AnimateBackground';
import Title from '../../components/Title/Title';
import Greeting from '../../components/Greeting/Greeting';

const Main = () => {


  return (
    <>
      <div className="main">
        <section className="main-section">
          <AnimateBackground/>
          <div className="main-section__wrapper">
            <Greeting
              text='Hi!'
            />
            <Greeting
              text="I'm Yauhen Parkhimovich!"
            />
            <Greeting
              text="Frontend developer"
            />
            <Greeting
              text="You are welcome on my site!"
            />

          </div>

        </section>
        <section className="main-section">
          <Title className="main-section__title">About</Title>
          <div className="main-section__content"></div>
        </section>
        <section className="main-section">
          <Title className="main-section__title">Experience and skills</Title>
          <div className="main-section__content"></div>

        </section>
        <section className="main-section">
          <Title className="main-section__title">Contacts me</Title>
          <div className="main-section__content"></div>

        </section>
      </div>
    </>
  );
};

export default Layout(Main);
