import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgTd(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#000067" d="M0 0h214v480H0z" />
        <Path fill="red" d="M426 0h214v480H426z" />
        <Path fill="#ff0" d="M214 0h212v480H214z" />
      </G>
    </Svg>
  );
}

export default SvgTd;
