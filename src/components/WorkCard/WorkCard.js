import './WorkCard.scss'

const WorkCard = ({name, jobTitle, startWork, endWork, description}) => {
  return (
    <div className='work-card'>
      <div className='work-card__content'>
        <h3 className="work-card__title">{name}</h3>
        <p className="work-card__subtitle">{jobTitle}</p>
        <p className="work-card__time">
          <span className="work-card__start">{startWork}</span>
           -
          <span className="work-card__end">{endWork}</span>
        </p>
        <p className="work-card__description">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
