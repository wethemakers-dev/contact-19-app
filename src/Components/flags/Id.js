import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgId(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#e70011" d="M0 0h640v249H0z" />
        <Path fill="#fff" d="M0 240h640v240H0z" />
      </G>
    </Svg>
  );
}

export default SvgId;
