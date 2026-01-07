import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function CareerItem({ name, turn }) {
  return (
    <View style={styles.careerItem}>
      <Text style={styles.careerName}>{name}</Text>
      <Text style={styles.careerTurn}>Turno: {turn}</Text>
    </View>
  );
}
