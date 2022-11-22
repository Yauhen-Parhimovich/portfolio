import Layout from '../../HOC/Layout/Layout';
import {motion} from 'framer-motion';

import './About.scss';
import Title from '../../components/Title/Title';
import WorkCard from '../../components/WorkCard/WorkCard';
import {firms} from '../../data/companies';
import Button from '../../components/Button/Button';
import {useNavigate} from 'react-router-dom';

const About = () => {

  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 1,
        delay: 3.5
      }
    }
  };

  const item = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  };

  const router = useNavigate();

  return (
    <section className="about">
      <div className="about__content">
        <div className="about__text">
          <Title>About me</Title>
          <p className="about__text-content">
            Хотели бы вы воплотить в жизнь идеи дизайна вашего веб-сайта? <br/>
            Вы устали полагаться на общие шаблоны и автоматизированные инструменты для создания своего продукта? <br/>
            Возможно, вы ищете талантливого разработчика, разбирающегося в дизайне и удобстве пользователя, который
            отлично владеет навыками WEB-разработки?  <br/>
            Знаете, что? Я человек, который поможет Вам со всем вышеперечисленным! <br/>
            Меня зовут Евгений и я являюсь профессиональным Frontend разработчиком с опытом разработки с 2020-го года.
            Работаю с такими технологиями, как:
          </p>
          <ul className='about__list'>
            <li className='about__item'>- HTML</li>
            <li className='about__item'>- CSS / SCSS</li>
            <li className='about__item'>- JavaScript / TypeScript</li>
            <li className='about__item'>- React / Vue.js</li>
            <li className='about__item'>- Redux / MobX / VueX</li>
            <li className='about__item'>- Webpack / Gulp</li>
            <li className='about__item'>- Next.js / Nuxt.js</li>
            <li className='about__item'>- Bootstrap / AntD / MaterialUI</li>
            <li className='about__item'>- Git</li>
          </ul>
          <p className="about__text-content">
            Вы можете рассчитывать на то, что я сэкономлю вам деньги, а ваш бизнес получит признание за его потенциал и
            завоюет клиентов. <br/>
            Если вы хотите узнать, как это сделать, <Button className="about__button"
                                                            onClick={() => router('/contacts')}>напишите</Button> мне.
          </p>
        </div>
        <div className="about__firms">
          <motion.ul
            className="about__firms-list"
            initial="hidden"
            animate="visible"
            variants={list}
          >
            {firms.map(firm => {
              return (
                <motion.li className="about__firms-item" key={firm.id} variants={item}>
                  <WorkCard
                    name={firm.name}
                    jobTitle={firm.jobTitle}
                    startWork={firm.startWork}
                    endWork={firm.endWork}
                    description={firm.description}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>

  );
};

export default Layout(About);
