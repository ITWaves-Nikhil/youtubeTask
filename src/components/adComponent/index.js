import React from 'react';
import EducationalAd from '../adComponent/educationalAd';
import ShoppingAd from '../adComponent/shoppingAd';

const Ad = ({data, index, currentPlaybackIndex}) => {
  switch (data?.sub_type) {
    case 'Educational':
      return <EducationalAd data={data} />;
    case 'Shopping':
      return (
        <ShoppingAd
          data={data}
          index={index}
          currentPlaybackIndex={currentPlaybackIndex}
        />
      );
    default:
  }
};

export default Ad;
