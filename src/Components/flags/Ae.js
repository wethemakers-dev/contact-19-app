import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#00732f" d="M0 0h640v160H0z" />
      <Path fill="#fff" d="M0 160h640v160H0z" />
      <Path d="M0 320h640v160H0z" />
      <Path fill="red" d="M0 0h220v480H0z" />
    </Svg>
  );
}

export default SvgAe;
