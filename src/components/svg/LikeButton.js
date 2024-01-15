import * as React from 'react';
import Svg, {Polygon, Rect} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    strokeWidth={0.7}
    strokeLinecap="round"
    strokeLinejoin="miter"
    {...props}>
    <Polygon points="7 9 11 2 14 2 13 9 22 9 20 22 7 22 7 9" />
    <Rect x={2} y={9} width={5} height={13} />
  </Svg>
);
export default SVGComponent;
