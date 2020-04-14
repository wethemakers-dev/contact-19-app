import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgTh(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#f4f5f8" d="M0 0h640v480H0z" />
        <Path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
        <Path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
      </G>
    </Svg>
  );
}

export default SvgTh;
