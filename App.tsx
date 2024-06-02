import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme.';
import { Box } from './src/components/Box/Box';

function App(): React.JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset='headingLarge'>Coffstack</Text>

          <Button title='Entrar' marginBottom='s12'/>
          <Button preset='outline' title='outline' marginBottom='s12'/>
          <Button title='Loading' loading={true} marginBottom='s12'/>

        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
