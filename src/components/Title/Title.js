import './Title.scss';

const Title = ({className, children}) => {

  const style = [className, 'title'];

  return (
    <div className="title__box">
      <div className="title__top-layer"></div>
      <h2 className={style.join(' ')}>
        {children}
      </h2>
    </div>
  );
};

export default Title;
