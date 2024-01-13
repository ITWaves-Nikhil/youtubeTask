import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = ({size}) => (
  <Svg
    width={size || 20}
    height={size || 20}
    viewBox="0 0 0.412 0.412"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.237 0.069a0.031 0.031 0 1 1 -0.062 0 0.031 0.031 0 0 1 0.062 0Zm0 0.137a0.031 0.031 0 1 1 -0.062 0 0.031 0.031 0 0 1 0.062 0ZM0.206 0.375a0.031 0.031 0 1 0 0 -0.062 0.031 0.031 0 0 0 0 0.062Z"
      fill="#fff"
    />
  </Svg>
);
export default SVGComponent;
