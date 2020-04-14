import * as React from 'react';
import Svg, {Circle, G, Path, Use} from 'react-native-svg';

function SvgRw(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#20603d" d="M0 0h640v480H0z" />
      <Path fill="#fad201" d="M0 0h640v360H0z" />
      <Path fill="#00a1de" d="M0 0h640v240H0z" />
      <G transform="translate(511 125.4) scale(.66667)">
        <G id="rw_svg__b">
          <Path
            id="rw_svg__a"
            fill="#e5be01"
            d="M116.1 0L35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
          />
          <Use
            width="100%"
            height="100%"
            transform="scale(1 -1)"
            xlinkHref="#rw_svg__a"
          />
        </G>
        <Use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#rw_svg__b"
        />
        <Circle r={34.3} fill="#e5be01" stroke="#00a1de" strokeWidth={3.4} />
      </G>
    </Svg>
  );
}

export default SvgRw;
