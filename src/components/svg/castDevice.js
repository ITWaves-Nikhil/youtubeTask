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
      d="M10.5 19.5C10.5 15.0817 6.9183 11.5 2.5 11.5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.5 19.5C6.5 17.2909 4.70914 15.5 2.5 15.5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 20.5C3.44036 20.5 4 19.9403 4 19.25C4 18.5597 3.44036 18 2.75 18C2.05964 18 1.5 18.5597 1.5 19.25C1.5 19.9403 2.05964 20.5 2.75 20.5Z"
      fill="white"
    />
    <Path
      d="M2 8.0283V4H22V20H14.3856"
      stroke="white"
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
