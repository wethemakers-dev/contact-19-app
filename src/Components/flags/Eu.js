import * as React from 'react';
import Svg, {Defs, G, Path, Use} from 'react-native-svg';

function SvgEu(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <G id="eu_svg__d">
          <G id="eu_svg__b">
            <Path id="eu_svg__a" d="M0-1l-.3 1 .5.1z" />
            <Use transform="scale(-1 1)" xlinkHref="#eu_svg__a" />
          </G>
          <G id="eu_svg__c">
            <Use transform="rotate(72)" xlinkHref="#eu_svg__b" />
            <Use transform="rotate(144)" xlinkHref="#eu_svg__b" />
          </G>
          <Use transform="scale(-1 1)" xlinkHref="#eu_svg__c" />
        </G>
      </Defs>
      <Path fill="#039" d="M0 0h640v480H0z" />
      <G fill="#fc0" transform="translate(320 242.3) scale(23.7037)">
        <Use width="100%" height="100%" y={-6} xlinkHref="#eu_svg__d" />
        <Use width="100%" height="100%" y={6} xlinkHref="#eu_svg__d" />
        <G id="eu_svg__e">
          <Use width="100%" height="100%" x={-6} xlinkHref="#eu_svg__d" />
          <Use
            width="100%"
            height="100%"
            transform="rotate(-144 -2.3 -2.1)"
            xlinkHref="#eu_svg__d"
          />
          <Use
            width="100%"
            height="100%"
            transform="rotate(144 -2.1 -2.3)"
            xlinkHref="#eu_svg__d"
          />
          <Use
            width="100%"
            height="100%"
            transform="rotate(72 -4.7 -2)"
            xlinkHref="#eu_svg__d"
          />
          <Use
            width="100%"
            height="100%"
            transform="rotate(72 -5 .5)"
            xlinkHref="#eu_svg__d"
          />
        </G>
        <Use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#eu_svg__e"
        />
      </G>
    </Svg>
  );
}

export default SvgEu;
