import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSr(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#377e3f" d="M.1 0h640v480H.1z" />
      <Path fill="#fff" d="M.1 96h640v288H.1z" />
      <Path fill="#b40a2d" d="M.1 144h640v192H.1z" />
      <Path
        fill="#ecc81d"
        d="M320 153.2l56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
      />
    </Svg>
  );
}

export default SvgSr;
