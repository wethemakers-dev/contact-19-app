import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgCf(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="cf_svg__a">
          <Path fillOpacity={0.7} d="M-12.4 32h640v480h-640z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        clipPath="url(#cf_svg__a)"
        transform="translate(12.4 -32)">
        <Path fill="#00f" d="M-52 32h719.3v119H-52z" />
        <Path fill="#ff0" d="M-52 391.6h719.3V512H-52z" />
        <Path fill="#009a00" d="M-52 271.3h719.3v120.3H-52z" />
        <Path fill="#fff" d="M-52 151h719.3v120.3H-52z" />
        <Path fill="red" d="M247.7 32.5h119.9V512H247.7z" />
        <Path
          fill="#ff0"
          d="M99.3 137.7l-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
        />
      </G>
    </Svg>
  );
}

export default SvgCf;
