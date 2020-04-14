import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCz(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fff" d="M0 0h640v240H0z" />
      <Path fill="#d7141a" d="M0 240h640v240H0z" />
      <Path fill="#11457e" d="M360 240L0 0v480z" />
    </Svg>
  );
}

export default SvgCz;
