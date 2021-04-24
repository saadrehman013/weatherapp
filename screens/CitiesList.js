/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  //   FlatList,
  ActivityIndicator,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {LightText, MediumText} from '../components/Text';
import {connect} from 'react-redux';
import {getCitiesList, getMyWeather} from '../redux/actions';
import {Notifications} from 'react-native-notifications';
import GetLocation from '@react-native-community/geolocation';
import {appSecrets} from '../secret';

const CitiesList = ({
  loading,
  list,
  getCitiesListAction,
  navigation,
  myWeather,
}) => {
  useEffect(() => {
    getCitiesListAction();
  }, []);
  const [coords, setCoords] = useState({lat: null, lng: null});
  Notifications.registerRemoteNotifications();
  useEffect(() => {
    GetLocation.getCurrentPosition(data => {
      setCoords({
        lat: data.coords.latitude,
        lng: data.coords.longitude,
      });
    });
    const res = fetch(
      `http://API.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lng}&appid=${appSecrets.weatherApiSceretKey}`,
    )
      .then(response => response.json())
      .then(data => {
        if (data.main !== undefined) {
          Notifications.postLocalNotification({
            title: myWeather?.name,
            body: `Temperature : ${data?.main?.temp - 273.15} °C`,
            extra: 'data',
          });
        }
      });
  }, [coords.lat]);
  const renderItem = propss => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('CitiyDetails', propss.item)}>
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
              <MediumText style={{fontSize: 18}}>
                {propss.item?.name}
              </MediumText>
            </View>
            <View>
              <LightText>{propss.item?.weather[0].main}</LightText>
            </View>
          </View>
          <View>
            <MediumText style={{fontSize: 22}}>
              {(propss.item?.main.temp - 273.15).toFixed(2)}°C
            </MediumText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flex: 1,
      }}>
      {!loading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          data={list && list}
          extraData={navigation}
        />
      )}
      {loading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#00804A" />
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.citiesListReducer.isLoading,
    list: state.citiesListReducer.citiesList,
    isError: state.citiesListReducer.isError,
    errorMsg: state.citiesListReducer.errorMsg,
    myWeather: state.myWeatherReducer.myWeather,
    myWeatherLoading: state.myWeatherReducer.isLoading,
  };
};

export default connect(mapStateToProps, {
  getCitiesListAction: getCitiesList,
  getMyWeatherAction: getMyWeather,
})(CitiesList);
