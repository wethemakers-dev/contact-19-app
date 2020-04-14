import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgJo(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="jo_svg__a">
          <Path fillOpacity={0.7} d="M-117.8 0h682.6v512h-682.6z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#jo_svg__a)" transform="translate(110.5) scale(.9375)">
        <G fillRule="evenodd" strokeWidth="1pt">
          <Path d="M-117.8 0h1024v170.7h-1024z" />
          <Path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
          <Path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
          <Path fill="red" d="M-117.8 512l512-256-512-256v512z" />
          <Path
            fill="#fff"
            d="M24.5 289l5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgJo;
