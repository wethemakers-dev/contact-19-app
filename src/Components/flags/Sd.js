import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgSd(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="sd_svg__a">
          <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath="url(#sd_svg__a)"
        transform="scale(.9375)">
        <Path d="M0 341.3h1024V512H0z" />
        <Path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <Path fill="red" d="M0 0h1024.8v170.7H0z" />
        <Path fill="#009a00" d="M0 0v512l341.3-256L0 0z" />
      </G>
    </Svg>
  );
}

export default SvgSd;
