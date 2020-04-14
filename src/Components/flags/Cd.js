import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCd(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#007fff" d="M0 0h640v480H0z" />
      <Path
        fill="#f7d618"
        d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96zM600 0L0 360v120h40l600-360V0h-40"
      />
      <Path fill="#ce1021" d="M640 0L0 384v96L640 96V0" />
    </Svg>
  );
}

export default SvgCd;
