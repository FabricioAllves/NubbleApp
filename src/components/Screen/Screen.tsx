import React from "react";
import { Box } from "../Box/Box";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { boxRestyleFunctions } from "@shopify/restyle";
import { ScrollViewContainer, ViewContainer } from "./ScreenContainer";
import { useAppTheme } from "../../hooks/useAppTheme";

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}



export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
  const { top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
        paddingHorizontal="s24" pb="s24" style={{ paddingTop: top, paddingBottom: bottom }}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row">
              <Icon name="arrowLeft" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}