import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SVGComponent = props => (
  <Svg
    fill="#cccccc"
    width="120px"
    height="120px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path
      className="clr-i-solid clr-i-solid-path-1"
      d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"
    />
    <Path
      className="clr-i-solid clr-i-solid-path-2"
      d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"
    />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);
export default SVGComponent;
