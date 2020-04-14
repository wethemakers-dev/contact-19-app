import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgAg(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="ag_svg__a">
          <Path fillOpacity={0.7} d="M-79.7 0H603v512H-79.7z" />
        </ClipPath>
      </Defs>
      <G
        fillRule="evenodd"
        clipPath="url(#ag_svg__a)"
        transform="translate(74.7) scale(.9375)">
        <Path fill="#fff" d="M-120 0h763.3v511.5H-120z" />
        <Path d="M-118.3.6h760.9v216.1h-761z" />
        <Path fill="#0061ff" d="M21.3 203.2h505V317h-505z" />
        <Path
          fill="#e20000"
          d="M642.8 1.8V512H262L642.8 1.7zm-761.5 0V512H262L-118.7 1.7z"
        />
        <Path
          fill="#ffd600"
          d="M440.4 203.3L364 184l64.9-49-79.7 11.4 41-69.5-70.7 41L332.3 37l-47.9 63.8-19.3-74-21.7 76.3-47.8-65 13.7 83.2L138.5 78l41 69.5-77.4-12.5 63.8 47.8L86 203.3h354.3z"
        />
      </G>
    </Svg>
  );
}

export default SvgAg;
