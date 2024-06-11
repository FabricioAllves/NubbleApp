import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/app/auth/LoginScreen/LoginScreen";
import { SignUpScreen } from "../screens/app/auth/SignUpScreen/SignUpScreen";
import { SuccessScreen } from "../screens/app/auth/SuccessScreen/SuccessScreen";
import { IconProps } from "../components/Icon/Icon";
import { ForgotPasswordScreen } from "../screens/app/auth/ForgotPasswordScreen/ForgotPasswordScreen";

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
}
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName="LoginScreen">
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SignUpScreen" component={SignUpScreen} />
        <Screen name="SuccessScreen" component={SuccessScreen} />
        <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Navigator>
    </NavigationContainer>
  )
}