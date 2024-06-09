import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "../../../../components/Text/Text";
import { TextInput } from "../../../../components/TextInput/TextInput";
import { Icon } from "../../../../components/Icon/Icon";
import { Button } from "../../../../components/Button/button";
import { Screen } from "../../../../components/Screen/Screen";

export function Login(){
  return(
    <Screen>
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
    </Screen>

  )
}