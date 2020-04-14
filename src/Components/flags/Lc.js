import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgLc(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#65cfff" d="M0 0h640v480H0z" />
        <Path fill="#fff" d="M318.9 42l162.7 395.3-322.6.9L318.9 42z" />
        <Path d="M319 96.5l140.8 340-279 .8L319 96.5z" />
        <Path
          fill="#ffce00"
          d="M318.9 240.1l162.7 197.6-322.6.5 159.9-198.1z"
        />
      </G>
    </Svg>
  );
}

export default SvgLc;
