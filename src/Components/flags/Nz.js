import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Use} from 'react-native-svg';

function SvgNz(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <ClipPath id="nz_svg__c">
          <Path d="M0 0h600v300H0z" />
        </ClipPath>
        <ClipPath id="nz_svg__d">
          <Path d="M0 0l300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
        </ClipPath>
        <G id="nz_svg__b">
          <G id="nz_svg__a">
            <Path d="M0 0v.5L1 0z" transform="translate(0 -.3)" />
            <Path d="M0 0v-.5L1 0z" transform="rotate(-36 .5 -.2)" />
          </G>
          <Use transform="scale(-1 1)" xlinkHref="#nz_svg__a" />
          <Use transform="rotate(72 0 0)" xlinkHref="#nz_svg__a" />
          <Use transform="rotate(-72 0 0)" xlinkHref="#nz_svg__a" />
          <Use transform="scale(-1 1) rotate(72)" xlinkHref="#nz_svg__a" />
        </G>
      </Defs>
      <Path fill="#00247d" fillRule="evenodd" d="M0 0h640v480H0z" />
      <G transform="translate(-93 36.1) scale(.66825)">
        <Use
          width="100%"
          height="100%"
          fill="#fff"
          transform="matrix(45.4 0 0 45.4 900 120)"
          xlinkHref="#nz_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="matrix(30 0 0 30 900 120)"
          xlinkHref="#nz_svg__b"
        />
      </G>
      <G transform="rotate(82 534.2 125) scale(.66825)">
        <Use
          width="100%"
          height="100%"
          fill="#fff"
          transform="rotate(-82 519 -457.7) scale(40.4)"
          xlinkHref="#nz_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="rotate(-82 519 -457.7) scale(25)"
          xlinkHref="#nz_svg__b"
        />
      </G>
      <G transform="rotate(82 534.2 125) scale(.66825)">
        <Use
          width="100%"
          height="100%"
          fill="#fff"
          transform="rotate(-82 668.6 -327.7) scale(45.4)"
          xlinkHref="#nz_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="rotate(-82 668.6 -327.7) scale(30)"
          xlinkHref="#nz_svg__b"
        />
      </G>
      <G transform="translate(-93 36.1) scale(.66825)">
        <Use
          width="100%"
          height="100%"
          fill="#fff"
          transform="matrix(50.4 0 0 50.4 900 480)"
          xlinkHref="#nz_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="matrix(35 0 0 35 900 480)"
          xlinkHref="#nz_svg__b"
        />
      </G>
      <Path
        stroke="#fff"
        strokeWidth={60}
        d="M0 0l600 300M0 300L600 0"
        clipPath="url(#nz_svg__c)"
        transform="scale(.60681 .73139)"
      />
      <Path
        stroke="#cc142b"
        strokeWidth={40}
        d="M0 0l600 300M0 300L600 0"
        clipPath="url(#nz_svg__d)"
        transform="scale(.60681 .73139)"
      />
      <Path
        fill="#fff"
        d="M151.7 0v79.4H0V140h151.7v79.4h60.7v-79.3H364V79.4H212.4V0z"
        clipPath="url(#nz_svg__c)"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: 'normal',
          textIndent: 0,
          textAlign: 'start',
          textDecorationLine: 'none',
          textDecorationStyle: 'solid',
          textDecorationColor: '#000',
          textTransform: 'none',
          blockProgression: 'tb',
          isolation: 'auto',
          mixBlendMode: 'normal',
        }}
      />
      <Path
        fill="#cc142b"
        d="M163.8 0v91.5H0v36.4h163.8v91.5h36.4V128h163.9V91.5H200.2V0z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: 'normal',
          textIndent: 0,
          textAlign: 'start',
          textDecorationLine: 'none',
          textDecorationStyle: 'solid',
          textDecorationColor: '#000',
          textTransform: 'none',
          blockProgression: 'tb',
          isolation: 'auto',
          mixBlendMode: 'normal',
        }}
      />
    </Svg>
  );
}

export default SvgNz;
