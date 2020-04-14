import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

function SvgEe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Rect width={640} height={477.9} rx={0} ry={0} />
        <Rect width={640} height={159.3} y={320.7} fill="#fff" rx={0} ry={0} />
        <Path fill="#1291ff" d="M0 0h640v159.3H0z" />
      </G>
    </Svg>
  );
}

export default SvgEe;
