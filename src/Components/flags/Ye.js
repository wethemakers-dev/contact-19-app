import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgYe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#fff" d="M0 0h640v472.8H0z" />
        <Path fill="#f10600" d="M0 0h640v157.4H0z" />
        <Path d="M0 322.6h640V480H0z" />
      </G>
    </Svg>
  );
}

export default SvgYe;
