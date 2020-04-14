import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGbEng(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fff" d="M0 0h640v480H0z" />
      <Path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z" />
      <Path fill="#ce1124" d="M0 201.6h640v76.8H0z" />
    </Svg>
  );
}

export default SvgGbEng;
