import * as React from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgJp(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="jp_svg__a">
          <Path fillOpacity={0.7} d="M-88 32h640v480H-88z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath="url(#jp_svg__a)"
        transform="translate(88 -32)">
        <Path fill="#fff" d="M-128 32h720v480h-720z" />
        <Circle
          cx={523.1}
          cy={344.1}
          r={194.9}
          fill="#d30000"
          transform="translate(-168.4 8.6) scale(.76554)"
        />
      </G>
    </Svg>
  );
}

export default SvgJp;
