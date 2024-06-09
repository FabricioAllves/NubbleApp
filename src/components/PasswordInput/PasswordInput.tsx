import React, { useState } from "react";
import { TextInput, TextInputProps } from "../TextInput/TextInput";
import { Icon } from "../Icon/Icon";

type PasswordProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput(props: PasswordProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev)
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      rightComponent={
        <Icon onPress={toggleSecureTextEntry}
          color='gray2'
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  )
}