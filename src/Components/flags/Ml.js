import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgMl(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="red" d="M425.8 0H640v480H425.7z" />
        <Path fill="#009a00" d="M0 0h212.9v480H0z" />
        <Path fill="#ff0" d="M212.9 0h214v480h-214z" />
      </G>
    </Svg>
  );
}

export default SvgMl;
