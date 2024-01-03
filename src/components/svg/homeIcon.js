import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = ({active}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={active ? 'white' : 'none'}
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.65 9.175V20.65H14.35V14V13.65H14H10H9.65V14V20.65H4.35V9.175L12 3.4375L19.65 9.175Z"
      stroke="white"
      strokeWidth={0.7}
    />
  </Svg>
);
export default SVGComponent;
