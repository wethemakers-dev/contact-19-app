import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgNe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#0db02b" d="M0 0h640v480H0z" />
      <Path fill="#fff" d="M0 0h640v320H0z" />
      <Path fill="#e05206" d="M0 0h640v160H0z" />
      <Circle cx={320} cy={240} r={68} fill="#e05206" />
    </Svg>
  );
}

export default SvgNe;
