import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width="26px"
    height="26px"
    viewBox="0 0 0.72 0.72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.63 0.144c0 -0.03 -0.024 -0.054 -0.054 -0.054H0.144C0.114 0.09 0.09 0.114 0.09 0.144v0.324c0 0.03 0.024 0.054 0.054 0.054h0.378L0.63 0.63l0 -0.486Zm-0.054 0v0.356L0.544 0.468H0.144V0.144h0.432ZM0.522 0.36H0.198v0.054h0.324V0.36ZM0.198 0.279h0.324v0.054H0.198V0.279Zm0.324 -0.081H0.198v0.054h0.324V0.198Z"
      fill="#ffffff"
    />
  </Svg>
);
export default SVGComponent;
