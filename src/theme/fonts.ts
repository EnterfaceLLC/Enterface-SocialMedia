import { TextStyle } from 'react-native';

const size = {
  caption: 10,
  norm: 14,
  body: 16,
  section: 20,
  title: 24,
  heading: 30,
};

const weight: { [key: string]: TextStyle['fontWeight'] } = {
  thin: '400',
  norm: 'normal',
  semi: '600',
  full: '900',
};

export default { size, weight };