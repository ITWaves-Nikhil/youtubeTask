import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={28}
    height={24}
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_441_990)">
      <Path
        d="M23.7222 10.5557H18.2778C18.0715 10.5557 17.8737 10.6376 17.7278 10.7835C17.5819 10.9293 17.5 11.1272 17.5 11.3334V20.6668C17.5 20.8731 17.5819 21.0709 17.7278 21.2167C17.8737 21.3626 18.0715 21.4446 18.2778 21.4446H23.7222C23.9285 21.4446 24.1263 21.3626 24.2722 21.2167C24.4181 21.0709 24.5 20.8731 24.5 20.6668V11.3334C24.5 11.1272 24.4181 10.9293 24.2722 10.7835C24.1263 10.6376 23.9285 10.5557 23.7222 10.5557ZM18.2778 11.3334H23.7222V18.3334H18.2778V11.3334ZM18.2778 20.6668V19.1112H23.7222V20.6668H18.2778Z"
        fill="white"
      />
      <Path d="M20.6111 19.5H21.3889V20.2778H20.6111V19.5Z" fill="white" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 18V19H16.5H16V19.5V21H9V19.5V19H8.5H2V4H22.9997L22.9959 10H22V5.5V5H21.5H3.5H3V5.5V17.5V18H3.5H17Z"
      fill="white"
    />
    <Defs>
      <ClipPath id="clip0_441_990">
        <Rect width={14} height={14} fill="white" transform="translate(14 9)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
