import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgIe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#fff" d="M0 0h640v480H0z" />
        <Path fill="#009A49" d="M0 0h213.3v480H0z" />
        <Path fill="#FF7900" d="M426.7 0H640v480H426.7z" />
      </G>
    </Svg>
  );
}

export default SvgIe;
