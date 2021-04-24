import React from 'react';
import {View} from 'react-native';
import {LightText, MediumText} from './Text';

export const cityListItem = ({item}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
      }}>
      <View>
        <View>
          <MediumText style={{fontSize: 18}}>{item?.name}</MediumText>
        </View>
        <View>
          <LightText>{item?.weather[0].main}</LightText>
        </View>
      </View>
      <View>
        <MediumText style={{fontSize: 22}}>
          {(item.main.temp_min - 273.15).toFixed(2)}°C
        </MediumText>
      </View>
    </View>
  );
};
