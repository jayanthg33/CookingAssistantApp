// src/navigation/AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from '../screens/RecipeListScreen';
import CookingScreen from '../screens/CookingScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeList">
        <Stack.Screen name="RecipeList" component={RecipeListScreen} />
        <Stack.Screen name="Cooking" component={CookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
