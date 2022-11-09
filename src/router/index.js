import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import Skills from '../pages/Skills/Skills';
import Contacts from '../pages/Contacts/Contacts';
import Portfolio from '../pages/Portfolio/Portfolio';

export const router = [
  {
    value: 'Main',
    path: '/',
    component: <Main/>
  },
  {
    value: 'About',
    path: '/about',
    component: <About/>
  },
  {
    value: 'Skills',
    path: '/skills',
    component: <Skills/>
  },
  {
    value: 'Portfolio',
    path: '/portfolio',
    component: <Portfolio/>
  },
  {
    value: 'Contacts',
    path: '/contacts',
    component: <Contacts/>
  }
];
