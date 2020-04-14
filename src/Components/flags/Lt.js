import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

function SvgLt(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt" transform="scale(.64143 .96773)">
        <Rect
          width={1063}
          height={708.7}
          fill="#006a44"
          rx={0}
          ry={0}
          transform="scale(.93865 .69686)"
        />
        <Rect
          width={1063}
          height={236.2}
          y={475.6}
          fill="#c1272d"
          rx={0}
          ry={0}
          transform="scale(.93865 .69686)"
        />
        <Path fill="#fdb913" d="M0 0h997.8v164.6H0z" />
      </G>
    </Svg>
  );
}

export default SvgLt;
