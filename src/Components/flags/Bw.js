import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgBw(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#00cbff" d="M0 0h640v480H0z" />
        <Path fill="#fff" d="M0 160h640v160H0z" />
        <Path d="M0 186h640v108H0z" />
      </G>
    </Svg>
  );
}

export default SvgBw;
