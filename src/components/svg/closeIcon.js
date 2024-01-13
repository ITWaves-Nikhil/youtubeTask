import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 0.72 0.72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m0.18 0.18 0.36 0.36"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeWidth={0.03}
    />
    <Path
      d="M0.54 0.18 0.18 0.54"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeWidth={0.03}
    />
  </Svg>
);
export default SVGComponent;
