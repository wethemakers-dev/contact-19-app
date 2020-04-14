import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgUa(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#ffd500" d="M0 0h640v480H0z" />
        <Path fill="#005bbb" d="M0 0h640v240H0z" />
      </G>
    </Svg>
  );
}

export default SvgUa;
