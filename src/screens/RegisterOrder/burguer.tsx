import React from 'react';
import { View, Image } from 'react-native';

import bread1 from '../../assets/images/image4.png';
import bread2 from '../../assets/images/image3.png';
import burguer from '../../assets/images/image5.png';

const Burguer: React.FC = () => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Image
        style={{
          width: 100,
          height: 40,
          zIndex: 2,
        }}
        resizeMode="contain"
        source={bread1}
      />
      <Image
        style={{
          width: 100,
          height: 40,
          marginTop: -20,
        }}
        resizeMode="contain"
        source={burguer}
      />
      <Image
        style={{
          width: 100,
          height: 40,
          marginTop: -20,
          zIndex: -1,
        }}
        resizeMode="contain"
        source={bread2}
      />
    </View>
  );
};

export default Burguer;
