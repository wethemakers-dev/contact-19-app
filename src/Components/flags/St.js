import * as React from 'react';
import Svg, {G, Path, Use} from 'react-native-svg';

function SvgSt(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Path fill="#12ad2b" d="M0 0h640v480H0z" />
      <Path fill="#ffce00" d="M0 137.1h640V343H0z" />
      <Path fill="#d21034" d="M0 0v480l240-240" />
      <G id="st_svg__c" transform="translate(351.6 240) scale(.34286)">
        <G id="st_svg__b">
          <Path id="st_svg__a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
          <Use
            width="100%"
            height="100%"
            transform="scale(-1 1)"
            xlinkHref="#st_svg__a"
          />
        </G>
        <Use
          width="100%"
          height="100%"
          transform="rotate(72)"
          xlinkHref="#st_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          transform="rotate(144)"
          xlinkHref="#st_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          transform="rotate(-144)"
          xlinkHref="#st_svg__b"
        />
        <Use
          width="100%"
          height="100%"
          transform="rotate(-72)"
          xlinkHref="#st_svg__b"
        />
      </G>
      <Use
        width="100%"
        height="100%"
        x={700}
        transform="translate(-523.2)"
        xlinkHref="#st_svg__c"
      />
    </Svg>
  );
}

export default SvgSt;
