import * as React from 'react';
import Svg, {Circle, G, Path, Use} from 'react-native-svg';

function SvgIn(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#f93" d="M0 0h640v160H0z" />
      <Path fill="#fff" d="M0 160h640v160H0z" />
      <Path fill="#128807" d="M0 320h640v160H0z" />
      <G transform="matrix(3.2 0 0 3.2 320 240)">
        <Circle r={20} fill="#008" />
        <Circle r={17.5} fill="#fff" />
        <Circle r={3.5} fill="#008" />
        <G id="in_svg__d">
          <G id="in_svg__c">
            <G id="in_svg__b">
              <G id="in_svg__a" fill="#008">
                <Circle r={0.9} transform="rotate(7.5 -8.8 133.5)" />
                <Path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z" />
              </G>
              <Use
                width="100%"
                height="100%"
                transform="rotate(15)"
                xlinkHref="#in_svg__a"
              />
            </G>
            <Use
              width="100%"
              height="100%"
              transform="rotate(30)"
              xlinkHref="#in_svg__b"
            />
          </G>
          <Use
            width="100%"
            height="100%"
            transform="rotate(60)"
            xlinkHref="#in_svg__c"
          />
        </G>
        <Use
          width="100%"
          height="100%"
          transform="rotate(120)"
          xlinkHref="#in_svg__d"
        />
        <Use
          width="100%"
          height="100%"
          transform="rotate(-120)"
          xlinkHref="#in_svg__d"
        />
      </G>
    </Svg>
  );
}

export default SvgIn;
