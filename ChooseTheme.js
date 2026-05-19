import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function ChooseThemeScreen() {
  const [theme, setTheme] = useState('light');
  const isEnabled = theme === 'dark';

  useEffect(() => {
    const loadTheme = async () => {
      const value = await AsyncStorage.getItem("theme-color");
      if (value) {
        setTheme(value);
      }
    };
    loadTheme();
  }, []);

  const toggleSwitch = () => {
    const currentTheme = isEnabled ? 'light' : 'dark';
    setTheme(currentTheme);
    AsyncStorage.setItem("theme-color", currentTheme);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000' : '#fff' }]}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
