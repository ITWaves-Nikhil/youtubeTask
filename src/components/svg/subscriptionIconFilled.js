import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M20.5 9.5H3.5V20H20.5V9.5Z" fill="white" />
    <Path
      d="M3 20.9999V8.99996H21V20.9999H3ZM4 19.9999H20V9.99994H4V19.9999ZM10.5 18.0769L15.115 14.9999L10.5 11.9229V18.0769ZM4.5 7.22996V6.22996H19.5V7.22996H4.5ZM7.5 4.45996V3.45996H16.5V4.45996H7.5Z"
      fill="white"
    />
    <Path d="M10.5 18V12L15 15L10.5 18Z" fill="black" />
  </Svg>
);
export default SVGComponent;
