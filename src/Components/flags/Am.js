import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAm(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="red" d="M0 0h640v160H0z" />
      <Path fill="#00f" d="M0 160h640v160H0z" />
      <Path fill="orange" d="M0 320h640v160H0z" />
    </Svg>
  );
}

export default SvgAm;
