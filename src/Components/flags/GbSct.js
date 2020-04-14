import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGbSct(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#0065bd" d="M0 0h640v480H0z" />
      <Path
        stroke="#fff"
        strokeWidth={0.6}
        d="M0 0l5 3M0 3l5-3"
        transform="scale(128 160)"
      />
    </Svg>
  );
}

export default SvgGbSct;
