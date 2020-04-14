import * as React from 'react';
import Svg, {Circle, Defs, G, Path, Use} from 'react-native-svg';

function SvgGd(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <G id="gd_svg__c">
          <G id="gd_svg__b">
            <Path
              id="gd_svg__a"
              fill="#fcd116"
              d="M0-1v1h.5"
              transform="rotate(18 0 -1)"
            />
            <Use transform="scale(-1 1)" xlinkHref="#gd_svg__a" />
          </G>
          <Use transform="rotate(72)" xlinkHref="#gd_svg__b" />
          <Use transform="rotate(144)" xlinkHref="#gd_svg__b" />
          <Use transform="rotate(216)" xlinkHref="#gd_svg__b" />
          <Use transform="rotate(288)" xlinkHref="#gd_svg__b" />
        </G>
      </Defs>
      <Path fill="#ce1126" d="M0 0h640v480H0z" />
      <Path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
      <Path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
      <Circle cx={319.9} cy={240.1} r={57.6} fill="#ce1126" />
      <Use
        width="100%"
        height="100%"
        transform="matrix(52.8 0 0 52.8 320 240)"
        xlinkHref="#gd_svg__c"
      />
      <Use
        width="100%"
        height="100%"
        x={-100}
        transform="translate(-30.3)"
        xlinkHref="#gd_svg__d"
      />
      <Use
        id="gd_svg__d"
        width="100%"
        height="100%"
        transform="matrix(31.2 0 0 31.2 320 33.6)"
        xlinkHref="#gd_svg__c"
      />
      <Use
        width="100%"
        height="100%"
        x={100}
        transform="translate(30.3)"
        xlinkHref="#gd_svg__d"
      />
      <Path
        fill="#ce1126"
        d="M102.3 240.7a80.4 80.4 0 0033.5 33.2 111 111 0 00-11.3-45l-22.2 11.8z"
      />
      <Path
        fill="#fcd116"
        d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 01-10.9-41.9 70 70 0 0132.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
      />
      <Use
        width="100%"
        height="100%"
        x={-100}
        transform="translate(-30.3 414.6)"
        xlinkHref="#gd_svg__d"
      />
      <Use
        width="100%"
        height="100%"
        transform="matrix(31.2 0 0 31.2 320 448.2)"
        xlinkHref="#gd_svg__c"
      />
      <Use
        width="100%"
        height="100%"
        x={100}
        transform="translate(30.3 414.6)"
        xlinkHref="#gd_svg__d"
      />
    </Svg>
  );
}

export default SvgGd;
