// components/InfoItem.js
import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export default function InfoItem({ text }) {
  const ani = useRef(new Animated.Value(0)).current;
  useEffect(() => { Animated.timing(ani, { toValue: 1, duration: 360, useNativeDriver: true }).start(); }, []);
  const translateX = ani.interpolate({ inputRange: [0,1], outputRange: [8,0] });

  return (
    <Animated.View style={[styles.row, { opacity: ani, transform: [{ translateX }] }]}>
      <View style={styles.dot} />
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#3A7D44', marginRight: 10 },
  text: { color: '#333', fontSize: 15, flex: 1 },
});
