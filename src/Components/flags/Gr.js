import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgGr(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#005bae" fillRule="evenodd" d="M0 0h640v53.3H0z" />
      <Path fill="#fff" fillRule="evenodd" d="M0 53.3h640v53.4H0z" />
      <Path fill="#005bae" fillRule="evenodd" d="M0 106.7h640V160H0z" />
      <Path fill="#fff" fillRule="evenodd" d="M0 160h640v53.3H0z" />
      <Path fill="#005bae" d="M0 0h266.7v266.7H0z" />
      <Path fill="#005bae" fillRule="evenodd" d="M0 213.3h640v53.4H0z" />
      <Path fill="#fff" fillRule="evenodd" d="M0 266.7h640V320H0z" />
      <Path fill="#005bae" fillRule="evenodd" d="M0 320h640v53.3H0z" />
      <Path fill="#fff" fillRule="evenodd" d="M0 373.3h640v53.4H0z" />
      <G fill="#fff" fillRule="evenodd" strokeWidth={1.3}>
        <Path d="M106.667 0H160v266.666h-53.333z" />
        <Path d="M0 106.667h266.666V160H0z" />
      </G>
      <Path fill="#005bae" d="M0 426.7h640V480H0z" />
    </Svg>
  );
}

export default SvgGr;
