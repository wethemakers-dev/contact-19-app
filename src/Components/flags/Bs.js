import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgBs(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="bs_svg__a">
          <Path fillOpacity={0.7} d="M-12 0h640v480H-12z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        clipPath="url(#bs_svg__a)"
        transform="translate(12)">
        <Path fill="#fff" d="M968.5 480h-979V1.8h979z" />
        <Path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z" />
        <Path
          fill="#08ced6"
          d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"
        />
        <Path d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z" />
      </G>
    </Svg>
  );
}

export default SvgBs;
