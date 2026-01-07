// components/StepCard.js
import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export default function StepCard({ number, title, description, dates }) {
  const ani = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(ani, { toValue: 1, duration: 420, useNativeDriver: true }).start();
  }, []);

  const translateY = ani.interpolate({ inputRange: [0, 1], outputRange: [8, 0] });
  const opacity = ani;

  return (
    <Animated.View style={[styles.card, { transform: [{ translateY }], opacity }]}>
      <View style={styles.left}>
        <View style={styles.circle}>
          <Text style={styles.number}>{number}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {dates ? <Text style={styles.dates}>{dates}</Text> : null}
        <Text style={styles.desc}>{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 12,
          shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3, borderWidth: 1, borderColor: '#E7EEF6' },
  left: { justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  circle: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#2C5F8B', justifyContent: 'center', alignItems: 'center' },
  number: { color: '#FFF', fontWeight: '700' },
  content: { flex: 1 },
  title: { color: '#2C5F8B', fontSize: 16, fontWeight: '700', marginBottom: 4 },
  dates: { color: '#3A7D44', fontWeight: '600', marginBottom: 6 },
  desc: { color: '#444', fontSize: 14 },
});
