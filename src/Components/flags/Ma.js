import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMa(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#c1272d" d="M640 0H0v480h640z" />
      <Path
        fill="none"
        stroke="#006233"
        strokeWidth={11.7}
        d="M320 179.4L284.4 289l93.2-67.6H262.4l93.2 67.6z"
      />
    </Svg>
  );
}

export default SvgMa;
