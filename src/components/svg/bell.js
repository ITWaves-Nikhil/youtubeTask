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
      d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
      stroke="white"
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.7295 19C13.5537 19.3031 13.3014 19.5547 12.9978 19.7295C12.6941 19.9044 12.3499 19.9965 11.9995 19.9965C11.6492 19.9965 11.3049 19.9044 11.0013 19.7295C10.6977 19.5547 10.4453 19.3031 10.2695 19"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
