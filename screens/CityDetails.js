/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {BoldText, LightText} from '../components/Text';
// import Cloud from '../assets/images/cloud.png';
import Cloud from '../assets/images/cloud1.png';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const CitiesDetails = ({route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={{paddingHorizontal: 20, paddingVertical: 30}}>
      <View style={{height: 200}}>
        <MapView
          style={{width: '100%', height: 200}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 24.8607,
            longitude: 67.0011,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <View>
            <BoldText>{params.name}</BoldText>
          </View>
          <View>
            <LightText>{params?.weather[0]?.main}</LightText>
            <LightText>
              {'Humidity: '}
              {params?.main?.humidity}
            </LightText>
            <LightText>
              {'Wind Speed: '}
              {params?.wind?.speed}
            </LightText>
            <LightText>
              {'Max. Temp: '}
              {(params?.main?.temp_max - 273.15).toFixed(2)}
              {'°C'}
            </LightText>
            <LightText>
              {'Min. Temp: '}
              {(params?.main?.temp_min - 273.15).toFixed(2)}
              {'°C'}
            </LightText>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View>
            <BoldText style={{fontSize: 25, textAlign: 'center'}}>
              {(params?.main?.temp - 273.15).toFixed(2)}
              {'°C'}
            </BoldText>
          </View>
          <View style={{maxHeight: 120}}>
            <Image source={Cloud} style={{maxWidth: 150, maxHeight: 120}} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CitiesDetails;
