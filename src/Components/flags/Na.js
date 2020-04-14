import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgNa(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="na_svg__a">
          <Path fillOpacity={0.7} d="M0 0h640v480H0z" />
        </ClipPath>
      </Defs>
      <G fillRule="evenodd" clipPath="url(#na_svg__a)">
        <Path fill="#fff" d="M0 0h640v480H0z" />
        <Path fill="#3662a2" d="M-26.4.2l.8 345.6L512.5 0-26.4.2z" />
        <Path fill="#38a100" d="M666.4 479.6L665 120.3 122.3 479.8l544-.2z" />
        <Path
          fill="#c70000"
          d="M-26 371.8l.4 108.2 117.5-.1L665.4 95.4l-.7-94.1-116-1L-26 371.7z"
        />
        <Path
          fill="#ffe700"
          d="M219.6 172l-21.8-13.2-12.6 22.1-12.2-22.2-22 12.9.6-25.4-25.4.2 13.2-21.8-22.1-12.5 22.2-12.3-12.8-22 25.4.6-.1-25.5 21.7 13.2L186.3 44l12.2 22.2 22-12.9-.6 25.4 25.4-.2-13.2 21.8 22.1 12.5-22.2 12.3 12.8 22-25.4-.6z"
        />
        <Path
          fill="#3662a2"
          d="M232.4 112.4c0 25.6-20.9 46.3-46.6 46.3s-46.6-20.7-46.6-46.3 20.8-46.2 46.6-46.2 46.6 20.7 46.6 46.2z"
        />
        <Path
          fill="#ffe700"
          d="M222.3 112.4a36.5 36.5 0 11-73 0 36.5 36.5 0 0173 0z"
        />
      </G>
    </Svg>
  );
}

export default SvgNa;
