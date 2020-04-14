import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgCh(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#d52b1e" d="M0 0h640v480H0z" />
        <G fill="#fff">
          <Path d="M170 195h300v90H170z" />
          <Path d="M275 90h90v300h-90z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgCh;
