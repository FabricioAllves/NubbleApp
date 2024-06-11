import { ThemeProvider } from '@shopify/restyle';
import React from 'react';

import { theme } from './src/theme/theme';
import { Login } from './src/screens/app/auth/LoginScreen/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUp } from './src/screens/app/auth/SignUpScreen/SignUpScreen';
import { Router } from './src/routes/Routes';


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