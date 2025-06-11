// App.tsx

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaView, Switch, View, Text, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { lightTheme, darkTheme } from './src/theme';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Provider store={store}>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: darkMode ? darkTheme.background : lightTheme.background },
        ]}
      >
        <View style={styles.toggleRow}>
          <Text
            style={{
              color: darkMode ? darkTheme.text : lightTheme.text,
              marginRight: 8,
            }}
          >
            Dark Mode
          </Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
    alignItems: 'center',
  },
});
