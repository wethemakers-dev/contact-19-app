import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgLr(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="lr_svg__a">
          <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
        </ClipPath>
      </Defs>
      <G fillRule="evenodd" clipPath="url(#lr_svg__a)" transform="scale(.9375)">
        <Path fill="#fff" d="M0 0h767.9v512H0z" />
        <Path fill="#006" d="M0 0h232.7v232.8H0z" />
        <Path fill="#c00" d="M0 464.9h767.9V512H0z" />
        <Path
          fill="#c00"
          d="M0 465.4h767.9V512H0zm0-92.9h767.9v46.2H0zm0-93.2h766V326H0zM232.7 0h535.1v46.5H232.7zm0 186h535.1v46.8H232.7zm0-92.7h535.1v46.5H232.7z"
        />
        <Path
          fill="#fff"
          d="M166.3 177.5l-50.7-31-50.4 31.3 18.7-50.9-50.3-31.4 62.3-.4 19.3-50.7L135 95h62.3l-50.1 31.7 19.1 50.8z"
        />
      </G>
    </Svg>
  );
}

export default SvgLr;
