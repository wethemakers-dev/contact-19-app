import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFi(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#fff" d="M0 0h640v480H0z" />
      <Path fill="#003580" d="M0 174.5h640v131H0z" />
      <Path fill="#003580" d="M175.5 0h130.9v480h-131z" />
    </Svg>
  );
}

export default SvgFi;
