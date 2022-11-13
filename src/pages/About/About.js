import Layout from '../../HOC/Layout/Layout';

import './About.scss';
import Title from '../../components/Title/Title';
import WorkCard from '../../components/WorkCard/WorkCard';
import {firms} from '../../data/companies';

const About = () => {

  return (
    <section className="about">
      <div className="about__content">
        <div className="about__text">
          <Title>About me</Title>
          <p>
          Middle front-end разработчик с более чем 2 годами коммерческого опыта. Имею богатый опыт верстки макетов
          различной направленности и сложности. Работал со всеми основными frontend-фреймворками (React, Angular, Vue).
          Имею опыт взаимодействия с заказчиком. В настоящее время работаю в компании Webcost, занимаюсь активно
          изучением backend разработки на NodeJS и английского языка.
          </p>
        </div>
        <div className="about__firms">
          <ul className='about__firms-list'>
            {firms.map(firm => {
              return (
                <li className='about__firms-item' key={firm.id}>
                  <WorkCard
                    name={firm.name}
                    jobTitle={firm.jobTitle}
                    startWork={firm.startWork}
                    endWork={firm.endWork}
                    description={firm.description}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>

  );
};

export default Layout(About);
