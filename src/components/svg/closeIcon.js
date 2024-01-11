import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SVGComponent = props => (
  <Svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path
      className="clr-i-outline clr-i-outline-path-1"
      d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"
    />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);
export default SVGComponent;
