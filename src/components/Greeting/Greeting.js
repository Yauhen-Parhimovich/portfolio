import './Greeting.scss';

const Greeting = ({text}) => {

  const greeting = text.split('');

  return (
    <div className='greeting__wrapper'>
      <div className="greeting">
      {/*<video className='greeting__video' src={video} autoPlay muted/>*/}
        {greeting.map((item, index) => (
          <span className="greeting__item" key={index} data-value={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Greeting;
