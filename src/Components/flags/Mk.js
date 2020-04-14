import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgMk(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#d20000" d="M0 0h640v480H0z" />
      <Path
        fill="#ffe600"
        d="M0 0h96l224 231.4L544 0h96L0 480h96l224-231.4L544 480h96zm640 192v96L0 192v96zM280 0l40 205.7L360 0zm0 480l40-205.7L360 480z"
      />
      <Circle
        cx={320}
        cy={240}
        r={77.1}
        fill="#ffe600"
        stroke="#d20000"
        strokeWidth={17.1}
      />
    </Svg>
  );
}

export default SvgMk;
