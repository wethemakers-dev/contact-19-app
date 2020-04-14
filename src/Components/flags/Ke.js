import * as React from 'react';
import Svg, {Defs, Ellipse, G, Path, Use} from 'react-native-svg';

function SvgKe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <Path
          id="ke_svg__a"
          strokeMiterlimit={10}
          d="M-28.6 47.5l1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 00-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
        />
      </Defs>
      <Path fill="#fff" d="M0 0h640v480H0z" />
      <Path d="M0 0h640v144H0z" />
      <Path fill="#060" d="M0 336h640v144H0z" />
      <G id="ke_svg__b" transform="matrix(3 0 0 3 320 240)">
        <Use width="100%" height="100%" stroke="#000" xlinkHref="#ke_svg__a" />
        <Use width="100%" height="100%" fill="#fff" xlinkHref="#ke_svg__a" />
      </G>
      <Use
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 640 0)"
        xlinkHref="#ke_svg__b"
      />
      <Path
        fill="#b00"
        d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
      />
      <Path
        id="ke_svg__c"
        d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"
      />
      <Use
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 640 0)"
        xlinkHref="#ke_svg__c"
      />
      <G fill="#fff" transform="matrix(3 0 0 3 320 240)">
        <Ellipse rx={4} ry={6} />
        <Path id="ke_svg__d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
        <Use
          width="100%"
          height="100%"
          transform="scale(-1)"
          xlinkHref="#ke_svg__d"
        />
        <Use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#ke_svg__d"
        />
        <Use
          width="100%"
          height="100%"
          transform="scale(1 -1)"
          xlinkHref="#ke_svg__d"
        />
      </G>
    </Svg>
  );
}

export default SvgKe;
