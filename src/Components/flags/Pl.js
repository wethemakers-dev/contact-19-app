import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgPl(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#fff" d="M640 480H0V0h640z" />
        <Path fill="#dc143c" d="M640 480H0V240h640z" />
      </G>
    </Svg>
  );
}

export default SvgPl;
