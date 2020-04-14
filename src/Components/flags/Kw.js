import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgKw(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="kw_svg__a">
          <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath="url(#kw_svg__a)"
        transform="scale(.9375)">
        <Path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <Path fill="#f31830" d="M0 341.3h1024V512H0z" />
        <Path fill="#00d941" d="M0 0h1024v170.7H0z" />
        <Path d="M0 0v512l255.4-170.7.6-170.8L0 0z" />
      </G>
    </Svg>
  );
}

export default SvgKw;
