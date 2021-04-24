import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CitiesList from '../screens/CitiesList';
import CityDetails from '../screens/CityDetails';

const ProjectNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CitiesList"
          component={CitiesList}
          options={{
            headerStyle: {
              backgroundColor: '#00804A',
            },
            headerTintColor: '#fff',
          }}></Stack.Screen>
        <Stack.Screen
          name="CitiyDetails"
          component={CityDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProjectNavigation;
