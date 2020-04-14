import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgBj(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="bj_svg__a">
          <Path fill="gray" d="M67.6-154h666v666h-666z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#bj_svg__a)" transform="matrix(.961 0 0 .7207 -65 111)">
        <G fillRule="evenodd" strokeWidth="1pt">
          <Path fill="#319400" d="M0-154h333v666H0z" />
          <Path fill="#ffd600" d="M333-154h666v333H333z" />
          <Path fill="#de2110" d="M333 179h666v333H333z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgBj;
