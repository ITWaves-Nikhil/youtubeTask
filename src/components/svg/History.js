import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 0.48 0.48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.405 0.37a0.21 0.21 0 0 0 0.002 -0.257A0.21 0.21 0 0 0 0.06 0.132V0.06H0.03v0.105l0.015 0.015H0.15V0.15H0.084a0.18 0.18 0 1 1 -0.004 0.173l-0.027 0.014a0.21 0.21 0 0 0 0.352 0.033zm-0.101 -0.029 0.021 -0.021L0.24 0.234V0.12H0.21v0.12l0.004 0.011 0.09 0.09z"
    />
  </Svg>
);
export default SVGComponent;
