import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDz(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fff" d="M320 0h320v480H320z" />
      <Path fill="#006233" d="M0 0h320v480H0z" />
      <Path
        fill="#d21034"
        d="M424 180a120 120 0 100 120 96 96 0 110-120m4 60l-108-35.2 67.2 92V183.2l-67.2 92z"
      />
    </Svg>
  );
}

export default SvgDz;
