import './SkillShape.scss';
import {useEffect, useRef} from 'react';
import TagCloud from 'TagCloud';
import {skillCloud} from '../../data/skills';

const SkillShape = () => {

  const IsTagCloudLoaded = useRef(false)

  useEffect(() => {
    if (IsTagCloudLoaded.current) return

    TagCloud('.share', skillCloud, {
      radius: 250,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
      containerClass: 'share',
    })

    IsTagCloudLoaded.current = true
  }, [])

  return (
    <div className='share'>

    </div>
  );
};

export default SkillShape;
