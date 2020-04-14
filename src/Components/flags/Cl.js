import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgCl(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="cl_svg__a">
          <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
        </ClipPath>
      </Defs>
      <G fillRule="evenodd" clipPath="url(#cl_svg__a)" transform="scale(.9375)">
        <Path fill="#fff" d="M256 0h512v256H256z" />
        <Path fill="#0039a6" d="M0 0h256v256H0z" />
        <Path
          fill="#fff"
          d="M167.8 191.7L128.2 162l-39.5 30 14.7-48.8L64 113.1l48.7-.5L127.8 64l15.5 48.5 48.7.1-39.2 30.4 15 48.7z"
        />
        <Path fill="#d52b1e" d="M0 256h768v256H0z" />
      </G>
    </Svg>
  );
}

export default SvgCl;
