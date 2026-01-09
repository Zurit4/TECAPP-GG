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
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});
