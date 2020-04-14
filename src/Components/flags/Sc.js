import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgSc(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="sc_svg__a">
          <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath="url(#sc_svg__a)"
        transform="scale(.9375)">
        <Path fill="red" d="M0 0h992.1v512H0z" />
        <Path fill="#090" d="M0 512l992.1-170.7V512H0z" />
        <Path fill="#fff" d="M0 512l992.1-341.3v170.6L0 512z" />
        <Path fill="#009" d="M0 512V0h330.7L0 512z" />
        <Path fill="#ff0" d="M0 512L330.7 0h330.7L0 512z" />
      </G>
    </Svg>
  );
}

export default SvgSc;
