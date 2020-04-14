import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgMg(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#ff3319" d="M213.3 0H640v240H213.3z" />
        <Path fill="#00cc28" d="M213.3 240H640v240H213.3z" />
        <Path fill="#fff" d="M0 0h213.3v480H0z" />
      </G>
    </Svg>
  );
}

export default SvgMg;
