import * as React from 'react';
import Svg, {G, Path, Use} from 'react-native-svg';

function SvgTj(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#060" d="M0 0h640v480H0z" />
      <Path fill="#fff" d="M0 0h640v342.9H0z" />
      <Path fill="#c00" d="M0 0h640v137.1H0z" />
      <Path
        fill="#f8c300"
        d="M300.8 233.6a8.6 8.6 0 0116 4V272h6.4v-34.3a8.6 8.6 0 0116-4 20.2 20.2 0 10-38.4 0"
      />
      <Path
        fill="#fff"
        d="M305.4 224.7a13.7 13.7 0 0114.6 6.5 13.7 13.7 0 0114.6-6.5 14.7 14.7 0 00-29.2 0"
      />
      <Path
        id="tj_svg__a"
        fill="#f8c300"
        d="M316.8 258.3a26 26 0 01-43.8 16.6 27 27 0 01-41 12c2.5 25 40 19.9 42.8-4.4 11.7 20.7 37.6 14.7 45.2-10.6z"
      />
      <Use
        width="100%"
        height="100%"
        fill="#f8c300"
        transform="matrix(-1 0 0 1 640 0)"
        xlinkHref="#tj_svg__a"
      />
      <Path
        id="tj_svg__b"
        fill="#f8c300"
        d="M291.8 302.6c-5.3 11.3-15.7 13.2-24.8 4.1 0 0 3.6-2.6 7.6-3.3-.8-3.1.7-7.5 2.9-9.8a15 15 0 016.1 8.1c5.5-.7 8.2 1 8.2 1z"
      />
      <Use
        width="100%"
        height="100%"
        fill="#f8c300"
        transform="rotate(9.4 320 551.3)"
        xlinkHref="#tj_svg__b"
      />
      <Use
        width="100%"
        height="100%"
        fill="#f8c300"
        transform="rotate(18.7 320 551.3)"
        xlinkHref="#tj_svg__b"
      />
      <Path
        fill="none"
        stroke="#f8c300"
        strokeWidth={11}
        d="M253.5 327.8a233.1 233.1 0 01133 0"
      />
      <G fill="#f8c300" transform="translate(320 164.6) scale(.68571)">
        <Path
          id="tj_svg__c"
          d="M301930 415571l-790463-574305h977066l-790463 574305L0-513674z"
          transform="scale(.00005)"
        />
      </G>
      <G
        id="tj_svg__d"
        fill="#f8c300"
        transform="translate(320 260.6) scale(.68571)">
        <Use
          width="100%"
          height="100%"
          transform="translate(-70 -121.2)"
          xlinkHref="#tj_svg__c"
        />
        <Use
          width="100%"
          height="100%"
          transform="translate(-121.2 -70)"
          xlinkHref="#tj_svg__c"
        />
        <Use
          width="100%"
          height="100%"
          transform="translate(-140)"
          xlinkHref="#tj_svg__c"
        />
      </G>
      <Use
        width="100%"
        height="100%"
        fill="#f8c300"
        transform="matrix(-1 0 0 1 640 0)"
        xlinkHref="#tj_svg__d"
      />
    </Svg>
  );
}

export default SvgTj;
