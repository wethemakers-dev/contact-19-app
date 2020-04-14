import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#066aa7" d="M0 0h640v480H0z" />
      <Path fill="#fecc00" d="M0 192h640v96H0z" />
      <Path fill="#fecc00" d="M176 0h96v480h-96z" />
    </Svg>
  );
}

export default SvgSe;
