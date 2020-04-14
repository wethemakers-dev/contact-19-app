import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgNg(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path fill="#fff" d="M0 0h640v480H0z" />
        <Path fill="#008753" d="M426.6 0H640v480H426.6zM0 0h213.3v480H0z" />
      </G>
    </Svg>
  );
}

export default SvgNg;
