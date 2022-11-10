import './AnimateBackground.scss';
import useCanvas from '../../hooks/useCanvas';

const AnimateBackground = () => {

  useCanvas()

  return (
    <div className="animate-background">
        <canvas id='canvas'/>
    </div>
  );
};

export default AnimateBackground;
