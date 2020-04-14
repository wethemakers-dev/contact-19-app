import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgAz(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#3f9c35" d="M.1 0h640v480H.1z" />
      <Path fill="#ed2939" d="M.1 0h640v320H.1z" />
      <Path fill="#00b9e4" d="M.1 0h640v160H.1z" />
      <Circle cx={304} cy={240} r={72} fill="#fff" />
      <Circle cx={320} cy={240} r={60} fill="#ed2939" />
      <Path
        fill="#fff"
        d="M384 200l7.7 21.5 20.6-9.8-9.8 20.7L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8L384 200z"
      />
    </Svg>
  );
}

export default SvgAz;
