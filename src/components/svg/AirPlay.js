import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width="22px"
    height="22px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0.5 1C0.223858 1 0 1.22386 0 1.5V11.5C0 11.7761 0.223858 12 0.5 12H3V11H1V2H14V11H12V12H14.5C14.7761 12 15 11.7761 15 11.5V1.5C15 1.22386 14.7761 1 14.5 1H0.5Z"
      fill="#fff"
    />
    <Path
      d="M7.85355 9.14645C7.65829 8.95118 7.34171 8.95118 7.14645 9.14645L3.14645 13.1464C3.00345 13.2894 2.96067 13.5045 3.03806 13.6913C3.11545 13.8782 3.29777 14 3.5 14H11.5C11.7022 14 11.8845 13.8782 11.9619 13.6913C12.0393 13.5045 11.9966 13.2894 11.8536 13.1464L7.85355 9.14645Z"
      fill="#fff"
    />
  </Svg>
);
export default SVGComponent;