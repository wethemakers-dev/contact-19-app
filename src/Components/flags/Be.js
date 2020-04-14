import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgBe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd" strokeWidth="1pt">
        <Path d="M0 0h213.3v480H0z" />
        <Path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
        <Path fill="#f31830" d="M426.7 0H640v480H426.7z" />
      </G>
    </Svg>
  );
}

export default SvgBe;
