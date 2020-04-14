import * as React from 'react';
import Svg, {Circle, G, Path, Use} from 'react-native-svg';

function SvgUz(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#1eb53a" d="M0 320h640v160H0z" />
      <Path fill="#0099b5" d="M0 0h640v160H0z" />
      <Path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
      <Path fill="#fff" d="M0 163.2h640v153.6H0z" />
      <Circle cx={134.4} cy={76.8} r={57.6} fill="#fff" />
      <Circle cx={153.6} cy={76.8} r={57.6} fill="#0099b5" />
      <G fill="#fff" transform="matrix(1.92 0 0 1.92 261.1 122.9)">
        <G id="uz_svg__e">
          <G id="uz_svg__d">
            <G id="uz_svg__c">
              <G id="uz_svg__b">
                <Path id="uz_svg__a" d="M0-6L-1.9-.3 1 .7" />
                <Use
                  width="100%"
                  height="100%"
                  transform="scale(-1 1)"
                  xlinkHref="#uz_svg__a"
                />
              </G>
              <Use
                width="100%"
                height="100%"
                transform="rotate(72)"
                xlinkHref="#uz_svg__b"
              />
            </G>
            <Use
              width="100%"
              height="100%"
              transform="rotate(-72)"
              xlinkHref="#uz_svg__b"
            />
            <Use
              width="100%"
              height="100%"
              transform="rotate(144)"
              xlinkHref="#uz_svg__c"
            />
          </G>
          <Use width="100%" height="100%" y={-24} xlinkHref="#uz_svg__d" />
          <Use width="100%" height="100%" y={-48} xlinkHref="#uz_svg__d" />
        </G>
        <Use width="100%" height="100%" x={24} xlinkHref="#uz_svg__e" />
        <Use width="100%" height="100%" x={48} xlinkHref="#uz_svg__e" />
        <Use width="100%" height="100%" x={-48} xlinkHref="#uz_svg__d" />
        <Use width="100%" height="100%" x={-24} xlinkHref="#uz_svg__d" />
        <Use
          width="100%"
          height="100%"
          x={-24}
          y={-24}
          xlinkHref="#uz_svg__d"
        />
      </G>
    </Svg>
  );
}

export default SvgUz;
