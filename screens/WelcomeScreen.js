import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';


import IttuxLogo from '../components/img/ittuxtr.png';

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}> 
      <Image 
        source={IttuxLogo}   
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Bienvenido a TECNM Tuxtepec</Text>
      <Text style={styles.subtitle}>Proceso de Admisión 2025</Text>
      <TouchableOpacity 
        style={styles.greenButton}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a36a9ff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#1a36a9ff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 35,
    lineHeight: 20,
  },
  greenButton: {
    backgroundColor: '#3A7D44',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    minWidth: 150,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#1a36a9ff',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
