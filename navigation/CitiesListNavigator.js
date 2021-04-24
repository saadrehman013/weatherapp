import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CitiyDetails from '../screens/CityDetails';
// import {screenOptions as MyCardsScreenOptions} from '../Screens/App/'
const AppNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CitiyDetails"
        component={CitiyDetails}
        // options={BillPaymentsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
