import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 67.61 68.99"
      {...props}>
      <Defs>
        <ClipPath id="prefix__clip-path">
          <Path d="M67.61 35.28a39.77 39.77 0 00-.61-7.06H34.49v13.34h18.57A15.9 15.9 0 0146.18 52v8.65h11.14c6.51-6.02 10.29-14.82 10.29-25.37z" />
        </ClipPath>
        <ClipPath id="prefix__clip-path-2">
          <Path d="M34.49 69c9.32 0 17.13-3.09 22.83-8.36L46.18 52a20.82 20.82 0 01-31-10.93H3.66V50a34.51 34.51 0 0030.83 19z" />
        </ClipPath>
        <ClipPath id="prefix__clip-path-3">
          <Path d="M15.19 41.05a20.43 20.43 0 010-13.11V19H3.66a34.65 34.65 0 000 31l11.53-8.94z" />
        </ClipPath>
        <ClipPath id="prefix__clip-path-4">
          <Path d="M34.49 13.72a18.67 18.67 0 0113.19 5.11l9.89-9.89a33.12 33.12 0 00-23.08-9 34.51 34.51 0 00-30.83 19l11.53 8.94a20.56 20.56 0 0119.3-14.22z" />
        </ClipPath>
      </Defs>
      <G id="prefix__Layer_1-2" data-name="Layer 1-2">
        <G clipPath="url(#prefix__clip-path)">
          <Path fill="#3e82f1" d="M15.33 9.06h71.45V79.8H15.33z" />
        </G>
        <G clipPath="url(#prefix__clip-path-2)">
          <Path fill="#32a753" d="M-15.5 21.88h91.99v66.27H-15.5z" />
        </G>
        <G clipPath="url(#prefix__clip-path-3)">
          <Path fill="#f9bb00" d="M-19.17-.17h53.53v69.32h-53.53z" />
        </G>
        <G clipPath="url(#prefix__clip-path-4)">
          <Path fill="#e74133" d="M-15.5-19.17h92.24V47.1H-15.5z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
