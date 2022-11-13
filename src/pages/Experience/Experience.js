import Layout from '../../HOC/Layout/Layout';
import Title from '../../components/Title/Title';

import './Experience.scss';

const Experience = () => {

  return (
    <section className="experience">

      <div className="experience__content">
        <div className="experience__text">
          <Title className='experience__title'>Experience&Skills</Title>
          <p>
            Начал заниматься программированием в 2020. Был у меня товарищ в вебе, на фрилансе работал. Когда неплохо
            разобрался с вертской, он мне давал задания и работу. По началу было много-много верстки самой разной, и
            дизайнерской и с бутстрапом. Когда получше разобрался с JavaScript и React пошёл устраиваться на фирму. На
            первой работе был проект на европейского заказчика, где через наш разрабатываемый сервис кадровые агентства
            взаимодействовали с клиентами, разрабатывал я это один на React-redux, после чего заказчик захотел также
            мобильное приложение в рамках этого проекта, мне от руководства была дана задача изучить различные
            инструменты на чём это можно создать в рамках JS. В это время я немного пописал на react-native,
            react-native-expo, ionic. После чего руководство отдало предпочтение в пользу ionic + angular на условии что
            + наймут более опытного разработчика. Пару месяцев я это делал, человека они так и не нашли, и по итогу
            решили взять разработчика на flutter'e, и моё участие в этом проекте закончилось. Потом заменял человека на
            проекте на Vue 2 пока тот был в отпуске. Задача стояла разработать новую страницу с информацией о продукте +
            переделать header и менюшку в ней. После были всякие микротаски, аля пофиксить баги, сделать дополнительную
            страницу ну и всё такое. После война началась. Был проект помощи беженцам, также на реакте. Потом месяц не
            было работы, неоплачиваемый бенч, и я ушёл, потому что семью кормить нужно. Сейчас работаю удаленно на
            польскую компанию. Разрабатывали для польской компании приложение для взаимодействия администратора с
            работниками и предоставления работниками отчёта. Так же было у них мобильное приложение, было необходимо
            часть функционала доделать так же на ionic + angular, добавить новую страницу на очень старое приложение ещё
            на jQuery. И тут выяснилось что им оказывается нужен fullstack на php, а для меня мол пока работы нету и в
            неоплачиваемый отпуск отправили. По этому сейчас срочно ищу работу.
          </p>
        </div>
        <div className="experience__date">
          Date
        </div>
      </div>
    </section>

  );
};

export default Layout(Experience);