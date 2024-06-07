import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Box } from './src/components/Box/Box';
import { Icon } from './src/components/Icon/Icon';

import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme.';
import { Button } from './src/components/Button/button';
import { TextInput } from './src/components/TextInput/TextInput';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text mb='s8' preset="headingLarge">
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb='s40'>
            Digite seu e-mail e senha para entrar
          </Text>

          
            <TextInput
            label='E-mail'
            placeholder='Digite seu e-mail'
            boxProps={{mb: 's20'}}
            />
          
            <TextInput
            errorMessage='Menssagem de erro'
            label='Senha'
            placeholder='Digite sua senha'
            rightComponent={<Icon color='gray2' name='eyeOn'/>}
            boxProps={{mb: 's10'}}
            />

          <Text color='primary' preset="paragraphSmall" bold mt='s10'>
            Esqueci minha senha
          </Text>

          <Button title='Entrar' mt='s48'/>
          <Button preset='outline' title='Criar uma conta' mt='s12'/>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;