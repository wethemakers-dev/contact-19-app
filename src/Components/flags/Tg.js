import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgTg(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="tg_svg__a">
          <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
        </ClipPath>
      </Defs>
      <G fillRule="evenodd" clipPath="url(#tg_svg__a)" transform="scale(.9375)">
        <Path fill="#ffe300" d="M0 0h767.6v512H0z" />
        <Path fill="#118600" d="M0 208.1h767.6V311H0zM0 .2h767.6v102.9H0z" />
        <Path fill="#d80000" d="M0 .3h306.5v310.6H0z" />
        <Path
          fill="#fff"
          d="M134.4 128.4c0-.8 18.9-53 18.9-53l17 52.2s57.4 1.7 57.4.8-45.3 34.3-45.3 34.3 21.4 60 20.5 58.2c-.8-1.7-49.6-36-49.6-36s-49.7 34.3-48.8 34.3c.8 0 18.8-56.5 18.8-56.5l-44.5-33.4 55.6-.9z"
        />
        <Path fill="#118600" d="M0 409.2h767.6V512H0z" />
      </G>
    </Svg>
  );
}

export default SvgTg;
