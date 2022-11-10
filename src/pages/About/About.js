import Layout from '../../HOC/Layout/Layout';

import './About.scss';
import Title from '../../components/Title/Title';

const About = () => {

  return (
    <section className="about">
      <Title>About</Title>
      <div className="about__content">
        <div className="about__text">
          about
        </div>
        <div className="about__skills">
          Skills
        </div>
      </div>
    </section>

  );
};

export default Layout(About);
