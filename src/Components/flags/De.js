import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#ffce00" d="M0 320h640v160H0z" />
      <Path d="M0 0h640v160H0z" />
      <Path fill="#d00" d="M0 160h640v160H0z" />
    </Svg>
  );
}

export default SvgDe;
