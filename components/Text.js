import React from 'react';
import {Text} from 'react-native';
// import {unmounted} from '../../constants/misc';

export const LightText = props => {
  //   unmounted();
  return (
    <Text style={{...props.style, fontFamily: 'Roboto-Light'}}>
      {props.children}
    </Text>
  );
};
export const MediumText = props => {
  //   unmounted();
  return (
    <Text style={{...props.style, fontFamily: 'Roboto-Medium'}}>
      {props.children}
    </Text>
  );
};
export const BoldText = props => {
  //   unmounted();
  return (
    <Text style={{...props.style, fontFamily: 'Roboto-Bold'}}>
      {props.children}
    </Text>
  );
};
export const LightItalicText = props => {
  //   unmounted();
  return (
    <Text style={{...props.style, fontFamily: 'Roboto-LightItalic'}}>
      {props.children}
    </Text>
  );
};
export const MediumItalicText = props => {
  //   unmounted();
  return (
    <Text style={{...props.style, fontFamily: 'Roboto-MediumItalic'}}>
      {props.children}
    </Text>
  );
};
export const BoldItalicText = props => {
  //   unmounted();
  return (
    <Text style={{...props.style, fontFamily: 'Roboto-BoldItalic'}}>
      {props.children}
    </Text>
  );
};
