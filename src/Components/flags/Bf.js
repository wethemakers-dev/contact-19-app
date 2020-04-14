import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgBf(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#de0000" d="M640 479.6H.4V0H640z" />
        <Path fill="#35a100" d="M639.6 480H0V240.2h639.6z" />
        <Path
          fill="#fff300"
          d="M254.6 276.2l-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4"
        />
      </G>
    </Svg>
  );
}

export default SvgBf;
