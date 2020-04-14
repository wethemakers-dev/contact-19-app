import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgHu(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path fill="#fff" d="M640 480H0V0h640z" />
        <Path fill="#388d00" d="M640 480H0V320h640z" />
        <Path fill="#d43516" d="M640 160.1H0V.1h640z" />
      </G>
    </Svg>
  );
}

export default SvgHu;
