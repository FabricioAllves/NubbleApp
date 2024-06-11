import React from "react";
import { Text } from "../Text/Text";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { ThemeColors } from "../../theme/theme";
import { buttonPesets } from "./ButtonPresets";
import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPesets[preset][disabled ? 'disabled' : 'default']
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal='s20'
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {
        loading ? (
          <ActivityIndicator color={buttonPreset.content}/>
        ) : (
          <Text preset="paragraphMedium" bold color={buttonPreset.content}>
            {title}
          </Text>
        )}
    </TouchableOpacityBox>
  )
}