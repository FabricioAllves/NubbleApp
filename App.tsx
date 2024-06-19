import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './src/routes/Routes';
import {Login} from './src/screens/app/auth/LoginScreen/LoginScreen';
import {SignUp} from './src/screens/app/auth/SignUpScreen/SignUpScreen';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
