import {ImageRequireSource} from 'react-native';

export const Slides: SlidesData = [
  {
    title: 'pop-title-1',
    image: require('../../../Assets/Images/walkthrough1.png') as ImageRequireSource,
    subtitle: 'pop-text-1',
  },
  {
    title: 'pop-title-2',
    image: require('../../../Assets/Images/walkthrough2.png') as ImageRequireSource,
    subtitle: 'pop-text-2',
  },
];

export type Slide = {
  title: string;
  image: ImageRequireSource;
  subtitle: string;
  soon?: boolean;
};

export type SlidesData = Slide[];
