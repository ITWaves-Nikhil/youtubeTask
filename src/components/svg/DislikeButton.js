import * as React from 'react';
import Svg, {Polygon, Rect} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#ffffff"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="miter"
    {...props}>
    <Polygon points="17 15 13 22 10 22 11 15 2 15 4 2 17 2 17 15" />
    <Rect x={17} y={2} width={5} height={13} />
  </Svg>
);
export default SVGComponent;
