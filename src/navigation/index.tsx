import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from '../screens/RecipeListScreen';
import CookingScreen from '../screens/CookingScreen';
import { useColorScheme } from 'react-native';

export type RootStackParamList = {
  RecipeList: undefined;
  Cooking: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="RecipeList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RecipeList" component={RecipeListScreen} />
        <Stack.Screen name="Cooking" component={CookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
