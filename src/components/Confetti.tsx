import React from 'react';
import LottieView from 'lottie-react-native';

export default function Confetti() {
  return (
    <LottieView
      source={require('../assets/confetti.json')} // Download a free confetti json animation or create your own
      autoPlay
      loop={false}
      style={{ width: 200, height: 200, alignSelf: 'center' }}
    />
  );
}
