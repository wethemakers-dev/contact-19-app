import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgTo(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#c10000" d="M0 0h640v480H0z" />
        <Path fill="#fff" d="M0 0h250v200.3H0z" />
        <G fill="#c10000">
          <Path d="M102.8 31.2h39.9v139.6h-39.8z" />
          <Path d="M192.6 81v40H53V81z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgTo;
