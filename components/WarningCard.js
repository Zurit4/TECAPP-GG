// components/WarningCard.js
import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export default function WarningCard({ text }) {
  const ani = useRef(new Animated.Value(0)).current;
  useEffect(() => { Animated.timing(ani, { toValue: 1, duration: 420, useNativeDriver: true }).start(); }, []);
  const translateY = ani.interpolate({ inputRange: [0,1], outputRange: [10,0] });

  return (
    <Animated.View style={[styles.card, { opacity: ani, transform: [{ translateY }] }]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF7E1', padding: 14, borderRadius: 10, borderLeftWidth: 4, borderLeftColor: '#FFC107', marginTop: 12, shadowColor: '#000', shadowOffset: { width:0, height:2 }, shadowOpacity: 0.06, elevation: 2 },
  text: { color: '#7A5B00', fontWeight: '600' },
});
