import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgCr(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#0000b4" d="M0 0h640v480H0z" />
        <Path fill="#fff" d="M0 75.4h640v322.3H0z" />
        <Path fill="#d90000" d="M0 157.7h640v157.7H0z" />
      </G>
    </Svg>
  );
}

export default SvgCr;
