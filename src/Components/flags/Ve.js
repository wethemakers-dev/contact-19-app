import * as React from 'react';
import Svg, {Defs, G, Path, Use} from 'react-native-svg';

function SvgVe(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <G id="ve_svg__d" transform="translate(0 -36)">
          <G id="ve_svg__c">
            <G id="ve_svg__b">
              <Path id="ve_svg__a" fill="#fff" d="M0-5L-1.5-.2l2.8.9z" />
              <Use
                width={180}
                height={120}
                transform="scale(-1 1)"
                xlinkHref="#ve_svg__a"
              />
            </G>
            <Use
              width={180}
              height={120}
              transform="rotate(72)"
              xlinkHref="#ve_svg__b"
            />
          </G>
          <Use
            width={180}
            height={120}
            transform="rotate(-72)"
            xlinkHref="#ve_svg__b"
          />
          <Use
            width={180}
            height={120}
            transform="rotate(144)"
            xlinkHref="#ve_svg__c"
          />
        </G>
      </Defs>
      <Path fill="#cf142b" d="M0 0h640v480H0z" />
      <Path fill="#00247d" d="M0 0h640v320H0z" />
      <Path fill="#fc0" d="M0 0h640v160H0z" />
      <G id="ve_svg__f" transform="matrix(4 0 0 4 320 336)">
        <G id="ve_svg__e">
          <Use
            width={180}
            height={120}
            transform="rotate(10)"
            xlinkHref="#ve_svg__d"
          />
          <Use
            width={180}
            height={120}
            transform="rotate(30)"
            xlinkHref="#ve_svg__d"
          />
        </G>
        <Use
          width={180}
          height={120}
          transform="rotate(40)"
          xlinkHref="#ve_svg__e"
        />
      </G>
      <Use
        width={180}
        height={120}
        transform="rotate(-80 320 336)"
        xlinkHref="#ve_svg__f"
      />
    </Svg>
  );
}

export default SvgVe;
