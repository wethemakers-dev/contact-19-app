import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNl(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#21468b" d="M0 0h640v480H0z" />
      <Path fill="#fff" d="M0 0h640v320H0z" />
      <Path fill="#ae1c28" d="M0 0h640v160H0z" />
    </Svg>
  );
}

export default SvgNl;
