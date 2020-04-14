import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgCu(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="cu_svg__a">
          <Path fillOpacity={0.7} d="M-32 0h682.7v512H-32z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        clipPath="url(#cu_svg__a)"
        transform="translate(30) scale(.94)">
        <Path fill="#0050f0" d="M-32 0h768v512H-32z" />
        <Path
          fill="#fff"
          d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"
        />
        <Path fill="#ed0000" d="M-32 0l440.7 255.7L-32 511V0z" />
        <Path
          fill="#fff"
          d="M161.8 325.5L114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
        />
      </G>
    </Svg>
  );
}

export default SvgCu;
