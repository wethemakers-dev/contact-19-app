import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGl(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fff" d="M0 0h640v480H0z" />
      <Path
        fill="#d00c33"
        d="M0 240h640v240H0zm80 0a160 160 0 10320 0 160 160 0 00-320 0"
      />
    </Svg>
  );
}

export default SvgGl;
