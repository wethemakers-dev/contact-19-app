import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEsCa(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fcdd09" d="M0 0h640v480H0z" />
      <Path
        stroke="#da121a"
        strokeWidth={60}
        d="M0 90h810m0 120H0m0 120h810m0 120H0"
        transform="scale(.79012 .88889)"
      />
    </Svg>
  );
}

export default SvgEsCa;
