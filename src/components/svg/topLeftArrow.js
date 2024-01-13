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
    <Path
      d="M19 19L7 7"
      stroke="white"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M7 17V7H17"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
