import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLu(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#00a1de" d="M0 240h640v240H0z" />
      <Path fill="#ed2939" d="M0 0h640v240H0z" />
      <Path fill="#fff" d="M0 160h640v160H0z" />
    </Svg>
  );
}

export default SvgLu;
