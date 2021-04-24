import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CitiesList from '../screens/CitiesList';
// import {screenOptions as MyCardsScreenOptions} from '../Screens/App/'
const AppNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CitiesList"
        component={CitiesList}
        // options={BillPaymentsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
