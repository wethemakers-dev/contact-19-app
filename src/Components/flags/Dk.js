import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDk(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#c8102e" d="M0 0h640.1v480H0z" />
      <Path fill="#fff" d="M205.7 0h68.6v480h-68.6z" />
      <Path fill="#fff" d="M0 205.7h640.1v68.6H0z" />
    </Svg>
  );
}

export default SvgDk;
