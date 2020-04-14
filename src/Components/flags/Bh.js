import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBh(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fff" d="M0 0h640v480H0" />
      <Path
        fill="#ce1126"
        d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544"
      />
    </Svg>
  );
}

export default SvgBh;
