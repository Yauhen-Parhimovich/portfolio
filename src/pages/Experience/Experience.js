import Layout from '../../HOC/Layout/Layout';
import Title from '../../components/Title/Title';
import {motion} from 'framer-motion';

import './Experience.scss';
import SkillShape from '../../components/SkillShape/SkillShape';
import Skill from '../../components/Skill/Skill';
import {skills} from '../../data/skills';
import Button from '../../components/Button/Button';

const Experience = () => {

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
        staggerChildren: 0.3,
        delay: 3.5
      }
    }
  };

  return (
    <section className="experience">

      <div className="experience__content">
        <div className="experience__text">
          <Title className="experience__title">Experience&Skills</Title>
          <div className="experience__info">
            <p className="experience__about">
              Занимаюсь frontend разработкой с 2020 года. За это время успел поработать с различными проектами и
              frontend технологиями. Сверстал около 10 лендингов различной направленности. Среди заказчиков были кафе,
              агентства недвижимости, онлайн-магазины, спортивные студии, студии ландшафтного дизайна и т. д. Разработал
              сайт и приложение на React + Redux для кадрового агентства. Пример функционала: личный кабинет для разных
              ролей, создание и редактирование вакансий и заявок для рекрутера, подтверждение взятия и выполнения заявки
              для работника. Также создал мобильное приложение на Ionic + Vue для описанного выше сервиса кадрового
              агентства. В короткие сроки разработал 2 приложения на React + MeterialUI для помощи беженцам из Украины:
              поиск жилья и транспорта. С нуля разработал приложение для аренды складских тележек на React + TypeScript:
              участвовал в выборе стека и архитектуры, настроил конфигурацию, написал кастомный UI-кит с использованием
              Sass. Примеры функционала: личный кабинет, формирование отчетов, создание задач, отправление заявок.
              <br/>
              Более подробно с моим опытом вы можете скачать и ознакомится в моём
              <Button className='experience__button'>
                <a href="https://doc-00-30-docs.googleusercontent.com/docs/securesc/d24gq5cfrq7tan3hssg1rgi8i8fugt9a/774460n4u2t3b493lmlbiq61g8b8q98f/1669140150000/03869947959117139125/03869947959117139125/1BmuErsTGIaWnKZsZTMH0iq012dZH_uIC?e=download&ax=AEKYgyS12qIlC1phFIh1O0IURHssa3LLYvYzTjYMsm2QzIvARXtML-rMVqw16XfS3tSl-tLFnpQUiwQFCmEGw04dAeoqtXJewkMUXcyvNpdt8pUfys7_sWtWy8zb7pxKX56tXTGmcriGzaePfFGOuLEY0P46DFT1C4BwnIDvfPMcCVeJQMNKnrAl3HCyUfWa-k2veVm6Fb5lprhd7_OmLlGFodhs2MLfnpVBZQKlmQG-TySRI-474SM06-xvydjVTOsHS9EZ48i3d0x7CQYKeqnPCRMclyNSFq3PjBI07W2TrKelByn7dJn3FEG1ZhBTQk-xr8YNZ3zAbWURhzBT4zP83I1IZTy7oxdCpu07M2qsCjrwvHoWjUhzTBMUDkFdE8FzdTUHjTdavnInEnyIe0PcALDkUsD0mFLNZ9bpFfBJpMVYiofPAe9e6CMI3Y80Nv7W0MyWDDcTZ6DBM-yBAOTBzgwXEOTlP6sEVH4GxB4RqGJes-8QkMhtUCp-2ttHp_f1isBWYJ6AXr-vEfNiirGby6Hbb5l-HJGtRZzqV_ZX6yLYFkmK1-0KDlCRWgT0H0fioAaWdIYbew5XHJbax7GBEbO5feXivi5o28u8Ba8eqb8hb2I3bu3olvsPVZ76OxJIMa8AgdwjBQmT4I8QxTJ4po5y7JwACwVgbzYZSGNYNebGRU8zSoZJXjTldRULv5mQeRCJtNltAV_ivYZNacgvbGzlr-jSqgvxPeoV2zblj6_AaM0381R64eaHYW5z18D-nzarYw6q1dDZZz3CaBPs97lyh-MzwpFYJhgPZcCb13v3qi67ju2WTTpVquBXTjvuN70tuDn-PrmAzcjU0e4SHjwphxKdBhsk4YHMIp-cu2qK_7iYwwL-LgbKD3myvG7JvAfAeZMTqNr7kPGSG6n2nwlb4ta7-GM6cq6QuEE4&uuid=32ae41df-a99a-4d2e-9eab-42c2c2b45a36&authuser=0&nonce=fmkp2ouhqtm3s&user=03869947959117139125&hash=vf4tdo8e3l4eg4iu2rt56dea12dqbkc3" target='_blank'>Резюме</a>
              </Button>
            </p>
          </div>
        </div>
        <div className="experience__date">
          <div className="experience__shape">
            <SkillShape/>
          </div>
          <motion.ul
            className="experience__skills"
            initial="hidden"
            animate="visible"
            variants={list}
          >
            {skills.map(skill => (
              <Skill
                key={skill.skill}
                title={skill.skill}
                range={skill.value}
                color={skill.variant}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>

  );
};

export default Layout(Experience);
