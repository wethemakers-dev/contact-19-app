import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgCo(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#ffe800" d="M0 0h640v480H0z" />
        <Path fill="#00148e" d="M0 240h640v240H0z" />
        <Path fill="#da0010" d="M0 360h640v120H0z" />
      </G>
    </Svg>
  );
}

export default SvgCo;
