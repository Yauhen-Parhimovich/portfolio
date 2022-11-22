import './TagCloud.scss';
import { TagCloud } from 'react-tagcloud';

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.value}
  </span>
)

const TagClouds = () => {

  const data = [
    { value: 'SCSS', count: 3 },
    { value: 'JavaScript', count: 5 },
    { value: 'TypeScript', count: 4 },
    { value: 'MaterialUI', count: 2 },
    { value: 'AntD', count: 3 },
    { value: 'HTML5', count: 3 },
    { value: 'CSS3', count: 2 },
    { value: 'Redux', count: 4 },
    { value: 'React', count: 5 },
    { value: 'Next.js', count: 4 },
    { value: 'Vue.js', count: 5 },
    { value: 'VueX', count: 4 },
    { value: 'Nuxt', count: 4 },
    { value: 'Ionic', count: 2 },
    { value: 'Webpack', count: 3 },
    { value: 'Gulp', count: 2 },
    { value: 'Git', count: 2 },
  ]

  return (
    <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
  );
};

export default TagClouds;
