import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { nextStep, prevStep, reset } from '../redux/recipeSlice';
import * as Speech from 'expo-speech';
import Confetti from '../components/Confetti';

export default function CookingScreen() {
  const dispatch = useAppDispatch();
  const { currentStep, steps, finished } = useAppSelector(state => state.recipe);

  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Speech.speak(steps[currentStep], { rate: 0.9 });
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0.3, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, [currentStep]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cooking Assistant</Text>

      {!finished ? (
        <>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.step}>Step {currentStep + 1}: {steps[currentStep]}</Text>
          </Animated.View>

          <View style={styles.btns}>
            <TouchableOpacity
              style={[styles.btn, currentStep === 0 && styles.disabledBtn]}
              onPress={() => dispatch(prevStep())}
              disabled={currentStep === 0}
            >
              <Icon name="arrow-left-bold" size={28} color={currentStep === 0 ? '#ccc' : '#fff'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => dispatch(nextStep())}
            >
              <Icon name="arrow-right-bold" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.finishedText}>🎉 You finished all steps! 🎉</Text>
          <Confetti />
          <TouchableOpacity
            style={[styles.btn, styles.resetBtn]}
            onPress={() => dispatch(reset())}
          >
            <Icon name="restart" size={28} color="#fff" />
            <Text style={styles.resetText}>Start Over</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff0f5', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#4a235a' },
  step: { fontSize: 22, textAlign: 'center', marginVertical: 20, color: '#4a235a', fontWeight: '600' },
  btns: { flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginTop: 20 },
  btn: {
    backgroundColor: '#ff6f91',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledBtn: {
    backgroundColor: '#f7aef8',
  },
  finishedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6f91',
    marginBottom: 30,
    textAlign: 'center',
  },
  resetBtn: {
    backgroundColor: '#f48fb1',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  resetText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 10,
    fontSize: 18,
  },
});
