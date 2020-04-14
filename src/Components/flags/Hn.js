import * as React from 'react';
import Svg, {G, Path, Use} from 'react-native-svg';

function SvgHn(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#0073cf" d="M0 0h640v480H0z" />
      <Path fill="#fff" d="M0 160h640v160H0z" />
      <G
        id="hn_svg__c"
        fill="#0073cf"
        transform="translate(320 240) scale(26.66665)">
        <G id="hn_svg__b">
          <Path id="hn_svg__a" d="M-.3 0l.5.1L0-1z" />
          <Use
            width="100%"
            height="100%"
            transform="scale(-1 1)"
            xlinkHref="#hn_svg__a"
          />
        </G>
        <Use
          width="100%"
          height="100%"
          transform="rotate(72)"
          xlinkHref="#hn_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          transform="rotate(-72)"
          xlinkHref="#hn_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          transform="rotate(144)"
          xlinkHref="#hn_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          transform="rotate(-144)"
          xlinkHref="#hn_svg__b"
        />
      </G>
      <Use
        width="100%"
        height="100%"
        transform="translate(133.3 -42.7)"
        xlinkHref="#hn_svg__c"
      />
      <Use
        width="100%"
        height="100%"
        transform="translate(133.3 37.3)"
        xlinkHref="#hn_svg__c"
      />
      <Use
        width="100%"
        height="100%"
        transform="translate(-133.3 -42.7)"
        xlinkHref="#hn_svg__c"
      />
      <Use
        width="100%"
        height="100%"
        transform="translate(-133.3 37.3)"
        xlinkHref="#hn_svg__c"
      />
    </Svg>
  );
}

export default SvgHn;
