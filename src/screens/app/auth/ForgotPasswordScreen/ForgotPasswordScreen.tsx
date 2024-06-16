import React from "react";
import { Screen } from "../../../../components/Screen/Screen";
import {zodResolver} from '@hookform/resolvers/zod'
import { Text } from "../../../../components/Text/Text";
import { Button } from "../../../../components/Button/button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../../hooks/useResetNavigationSuccess";
import {ForgotPasswordSchema, forgotPasswordSchema} from './forgotPasswordSchema'
import { FormTextInput } from "../../../../components/Form/FormTextInput";
import { useForm } from "react-hook-form";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: `Enviamos as instruções para ${'\n'}seu e-mail`,
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    })
  }

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange'
  });

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb='s16'>
        Esquci minha senha
      </Text>
      <Text preset="paragraphLarge" mb='s32'>
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label='E-mail'
        placeholder='Digite seu e-mail'
        boxProps={{ mb: 's40' }}
      />
      
      <Button onPress={handleSubmit(submitForm)} title="Recuperar senha" />
    </Screen>
  )
}