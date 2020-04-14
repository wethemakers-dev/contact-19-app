import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgGm(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="gm_svg__a">
          <Path fillOpacity={0.7} d="M0-48h640v480H0z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath="url(#gm_svg__a)"
        transform="translate(0 48)">
        <Path fill="red" d="M0-128h640V85.3H0z" />
        <Path fill="#fff" d="M0 85.3h640V121H0z" />
        <Path fill="#009" d="M0 120.9h640V263H0z" />
        <Path fill="#fff" d="M0 263.1h640v35.6H0z" />
        <Path fill="#090" d="M0 298.7h640V512H0z" />
      </G>
    </Svg>
  );
}

export default SvgGm;
