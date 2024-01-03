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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3208 6.00779C17.2996 5.98613 17.2783 5.96458 17.2569 5.94315C17.2354 5.92171 17.2139 5.9004 17.1922 5.87923C17.2139 5.9004 17.2354 5.92171 17.2569 5.94315C17.2783 5.96458 17.2996 5.98613 17.3208 6.00779ZM13.0994 13.0994L7.43504 15.765L10.1006 10.1006L15.765 7.43504L13.0994 13.0994ZM11.6 10.3C11.2552 10.3 10.9246 10.437 10.6808 10.6808C10.437 10.9246 10.3 11.2552 10.3 11.6C10.3 11.9448 10.437 12.2754 10.6808 12.5192C10.9246 12.763 11.2552 12.9 11.6 12.9C11.9448 12.9 12.2754 12.763 12.5192 12.5192C12.763 12.2754 12.9 11.9448 12.9 11.6C12.9 11.2552 12.763 10.9246 12.5192 10.6808C12.2754 10.437 11.9448 10.3 11.6 10.3ZM11.6 2C12.8607 2 14.109 2.24831 15.2738 2.73076C16.4385 3.2132 17.4968 3.92033 18.3882 4.81178C19.2797 5.70322 19.9868 6.76151 20.4692 7.92624C20.9517 9.09096 21.2 10.3393 21.2 11.6C21.2 14.1461 20.1886 16.5879 18.3882 18.3882C16.5879 20.1886 14.1461 21.2 11.6 21.2C10.3393 21.2 9.09096 20.9517 7.92624 20.4692C6.76151 19.9868 5.70322 19.2797 4.81178 18.3882C3.01143 16.5879 2 14.1461 2 11.6C2 9.05392 3.01143 6.61212 4.81178 4.81178C6.61212 3.01143 9.05392 2 11.6 2ZM11.6 3.2C9.37218 3.2 7.23561 4.085 5.6603 5.6603C4.085 7.23561 3.2 9.37218 3.2 11.6C3.2 13.8278 4.085 15.9644 5.6603 17.5397C7.23561 19.115 9.37218 20 11.6 20C13.8278 20 15.9644 19.115 17.5397 17.5397C19.115 15.9644 20 13.8278 20 11.6C20 9.37218 19.115 7.23561 17.5397 5.6603C15.9644 4.085 13.8278 3.2 11.6 3.2Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
