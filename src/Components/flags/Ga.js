import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgGa(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#ffe700" d="M640 480H0V0h640z" />
        <Path fill="#36a100" d="M640 160H0V0h640z" />
        <Path fill="#006dbc" d="M640 480H0V320h640z" />
      </G>
    </Svg>
  );
}

export default SvgGa;
