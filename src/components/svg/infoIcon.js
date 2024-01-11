import * as React from 'react';
import Svg, {Rect, Circle} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    enableBackground="new 0 0 32 32"
    xmlSpace="preserve"
    {...props}>
    <Rect x={15} y={14} fill="#ffffff" width={2} height={8} />
    <Rect x={15} y={10} fill="#ffffff" width={2} height={2} />
    <Circle
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={16}
      cy={16}
      r={12}
    />
  </Svg>
);
export default SVGComponent;
