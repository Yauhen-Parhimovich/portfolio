import './Title.scss';

const Title = ({className, children}) => {

  const style = [className, 'title__box'];

  return (
    <div  className={style.join(' ')}>
      <div className="title__top-layer"></div>
      <h2 className="title">
        {children}
      </h2>
    </div>
  );
};

export default Title;
