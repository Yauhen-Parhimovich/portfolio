import WithAnimation from '../Animation/Animation';
import Aside from '../../components/Aside/Aside';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import './Layout.scss';


const Layout = ({children}) => {

  return (
    <div className="wrapper">
      <Aside/>
      <BurgerMenu/>
      <main className="main">
        <WithAnimation>
          {children}
        </WithAnimation>
      </main>
    </div>
  );
};

const WithLayout = (Component) => {
  return (props) => {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    );
  };
};

export default WithLayout;

