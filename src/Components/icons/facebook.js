import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 69 69" {...props}>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Path
            d="M69 34.5a34.5 34.5 0 10-39.89 34.08V44.47h-8.76v-10h8.76V26.9c0-8.65 5.15-13.42 13-13.42a53.37 53.37 0 017.72.67v8.49h-4.32c-4.29 0-5.62 2.66-5.62 5.39v6.47h9.57l-1.53 10h-8v24.08A34.51 34.51 0 0069 34.5z"
            fill="#2c73ba"
          />
          <Path
            d="M47.93 44.47l1.53-10h-9.57V28c0-2.73 1.33-5.39 5.62-5.39h4.35v-8.46a53.37 53.37 0 00-7.72-.67c-7.88 0-13 4.77-13 13.42v7.6h-8.79v10h8.76v24.08a34.8 34.8 0 0010.78 0V44.47z"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
