/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {AuthProvider} from './contexts/AuthContext';

import {Routes} from './routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
