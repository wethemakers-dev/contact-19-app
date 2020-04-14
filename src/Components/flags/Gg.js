import * as React from 'react';
import Svg, {Path, Use} from 'react-native-svg';

function SvgGg(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fff" d="M0 0h640v480H0z" />
      <Path fill="#e8112d" d="M256 0h128v480H256z" />
      <Path fill="#e8112d" d="M0 176h640v128H0z" />
      <Path
        id="gg_svg__a"
        fill="#f9dd16"
        d="M110 286.7l23.3-23.4h210v-46.6h-210L110 193.3z"
      />
      <Use
        width={36}
        height={24}
        transform="rotate(90 320 240)"
        xlinkHref="#gg_svg__a"
      />
      <Use
        width={36}
        height={24}
        transform="rotate(-90 320 240)"
        xlinkHref="#gg_svg__a"
      />
      <Use
        width={36}
        height={24}
        transform="rotate(180 320 240)"
        xlinkHref="#gg_svg__a"
      />
    </Svg>
  );
}

export default SvgGg;
