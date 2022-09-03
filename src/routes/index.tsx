import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity, Text, View} from 'react-native';

import {FriendsFeed} from '../screens/FriendsFeed';
import {Settings} from '../screens/Settings';

const ProfileStack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <ProfileStack.Navigator
        screenOptions={{
          headerTitleStyle: {fontWeight: '700', fontSize: 20},
          headerTintColor: '#fff',
          headerBackground: () => (
            <View style={{flex: 1, backgroundColor: '#000000'}} />
          ),
          headerBackTitle: '',
        }}>
        <ProfileStack.Screen
          name="FriendsFeed"
          component={FriendsFeed}
          options={{
            title: 'BeReal.',
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('ola mundo')}>
                <Text>OLA</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <ProfileStack.Screen name="Settings" component={Settings} />
      </ProfileStack.Navigator>
    </NavigationContainer>
  );
};
