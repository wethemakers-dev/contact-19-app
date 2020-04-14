import * as React from 'react';
import Svg, {G, Path, Use} from 'react-native-svg';

function SvgGw(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#ce1126" d="M0 0h220v480H0z" />
      <Path fill="#fcd116" d="M220 0h420v240H220z" />
      <Path fill="#009e49" d="M220 240h420v240H220z" />
      <G id="gw_svg__b" transform="matrix(80 0 0 80 110 240)">
        <Path id="gw_svg__a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
        <Use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#gw_svg__a"
        />
      </G>
      <Use
        width="100%"
        height="100%"
        transform="rotate(72 110 240)"
        xlinkHref="#gw_svg__b"
      />
      <Use
        width="100%"
        height="100%"
        transform="rotate(144 110 240)"
        xlinkHref="#gw_svg__b"
      />
      <Use
        width="100%"
        height="100%"
        transform="rotate(-144 110 240)"
        xlinkHref="#gw_svg__b"
      />
      <Use
        width="100%"
        height="100%"
        transform="rotate(-72 110 240)"
        xlinkHref="#gw_svg__b"
      />
    </Svg>
  );
}

export default SvgGw;
