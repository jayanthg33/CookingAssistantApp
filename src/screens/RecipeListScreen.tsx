import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RecipeList'>;

export default function RecipeListScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Recipe</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Cooking')}
      >
        <Text style={styles.cardTitle}>Delicious Curry</Text>
        <Icon name="food" size={40} color="#ff6f91" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#4a235a' },
  card: {
    backgroundColor: '#f7aef8',
    width: '80%',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#ff6f91',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4a235a',
  },
});
