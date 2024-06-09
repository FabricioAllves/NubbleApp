import React from "react";
import { Screen } from "../../../../components/Screen/Screen";
import { Text } from "../../../../components/Text/Text";
import { TextInput } from "../../../../components/TextInput/TextInput";
import { Icon } from "../../../../components/Icon/Icon";
import { Button } from "../../../../components/Button/button";
import { PasswordInput } from "../../../../components/PasswordInput/PasswordInput";

export function SignUp() {
  function submitForm() {
    //TODO: implementar
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{ mb: 's20' }} />
      <TextInput label="Nome completo" placeholder="Digite seu nome completo" boxProps={{ mb: 's20' }} />
      <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: 's20' }} />

      <PasswordInput
        label='Senha'
        secureTextEntry
        placeholder='Digite sua senha'
        boxProps={{ mb: 's48' }}
      />

      <Button onPress={submitForm} title='Criar um conta' />
    </Screen>
  )
}