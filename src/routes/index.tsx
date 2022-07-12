import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity, Text} from 'react-native';

import {Home} from '../screens/Home';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'BeReal.',
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('ola mundo')}>
                <Text>OLA</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
