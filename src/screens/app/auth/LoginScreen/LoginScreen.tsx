import React from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import { Text } from "../../../../components/Text/Text";
import { Button } from "../../../../components/Button/button";
import { Screen } from "../../../../components/Screen/Screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../routes/Routes";
import { FormTextInput } from "../../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../../components/Form/FormPasswordInput";
import { loginSchema, LoginSchema } from './loginScreenSchema'


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export function LoginScreen({ navigation }: ScreenProps) {

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  function submitForm({ email, password }: LoginSchema) {

  }

  function navigateToSignUp() {
    navigation.navigate('SignUpScreen')
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen')
  }

  return (
    <Screen scrollable>
      <Text mb='s8' preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb='s40'>
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label='E-mail'
        placeholder='Digite seu e-mail'
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label='Senha'
        placeholder='Digite sua senha'
        boxProps={{ mb: 's10' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title='Entrar'
        mt='s48'
      />
      <Button onPress={navigateToSignUp} preset='outline' title='Criar uma conta' mt='s12' />
    </Screen>

  )
}