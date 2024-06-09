import { ThemeProvider } from '@shopify/restyle';
import React from 'react';

import { theme } from './src/theme/theme.';
import { Login } from './src/screens/app/auth/Login/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUp } from './src/screens/app/auth/SignUp/SignUp';


function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignUp />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;