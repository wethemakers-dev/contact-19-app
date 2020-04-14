import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgPs(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="ps_svg__a">
          <Path fillOpacity={0.7} d="M-118 0h682.7v512H-118z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#ps_svg__a)" transform="translate(110.6) scale(.9375)">
        <G fillRule="evenodd" strokeWidth="1pt">
          <Path d="M-246 0H778v170.7H-246z" />
          <Path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
          <Path fill="#090" d="M-246 341.3H778V512H-246z" />
          <Path fill="red" d="M-246 512l512-256L-246 0v512z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgPs;
