import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgPa(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="pa_svg__a">
          <Path fillOpacity={0.7} d="M0 0h640v480H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#pa_svg__a)">
        <Path fill="#fff" d="M0 0h640v480H0z" />
        <Path fill="#fff" fillRule="evenodd" d="M92.5 0h477.2v480H92.4z" />
        <Path fill="#db0000" fillRule="evenodd" d="M323 3.6h358v221.7H323z" />
        <Path
          fill="#0000ab"
          fillRule="evenodd"
          d="M3.2 225.3h319.9V480H3.2zm211.6-47.6l-42-29.4-41.7 29.6 15.5-48L105 100l51.6-.4 16-48 16.3 47.9h51.6l-41.5 30 15.9 48z"
        />
        <Path
          fill="#d80000"
          fillRule="evenodd"
          d="M516.9 413.9l-42.4-27.7-42.1 28 15.6-45.6-42-28 52-.5 16.2-45.4 16.4 45.3h52l-41.8 28.5 16 45.4z"
        />
      </G>
    </Svg>
  );
}

export default SvgPa;
