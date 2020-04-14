import * as React from 'react';
import Svg, {Defs, G, Path, Use} from 'react-native-svg';

function SvgMm(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <Path
          id="mm_svg__a"
          fill="#fff"
          d="M0-.5l.2.5h-.4z"
          transform="scale(8.844)"
        />
        <G id="mm_svg__b">
          <Use
            width={18}
            height={12}
            transform="rotate(-144)"
            xlinkHref="#mm_svg__a"
          />
          <Use
            width={18}
            height={12}
            transform="rotate(-72)"
            xlinkHref="#mm_svg__a"
          />
          <Use width={18} height={12} xlinkHref="#mm_svg__a" />
          <Use
            width={18}
            height={12}
            transform="rotate(72)"
            xlinkHref="#mm_svg__a"
          />
          <Use
            width={18}
            height={12}
            transform="rotate(144)"
            xlinkHref="#mm_svg__a"
          />
        </G>
      </Defs>
      <Path fill="#fecb00" d="M0-.1h640V160H0z" />
      <Path fill="#ea2839" d="M0 320h640v160H0z" />
      <Path fill="#34b233" d="M0 160h640v160H0z" />
      <Use
        width={18}
        height={12}
        x={9}
        y={6.4}
        transform="matrix(40 0 0 40 -40 0)"
        xlinkHref="#mm_svg__b"
      />
    </Svg>
  );
}

export default SvgMm;
