import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgLy(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="ly_svg__a">
          <Path d="M166.7-20h666.6v500H166.7z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#ly_svg__a)" transform="matrix(.96 0 0 .96 -160 19.2)">
        <Path fill="#239e46" d="M0-20h1000v500H0z" />
        <Path d="M0-20h1000v375H0z" />
        <Path fill="#e70013" d="M0-20h1000v125H0z" />
        <Path
          fill="#fff"
          d="M544.2 185.8a54.3 54.3 0 100 88.4 62.5 62.5 0 110-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
        />
      </G>
    </Svg>
  );
}

export default SvgLy;
