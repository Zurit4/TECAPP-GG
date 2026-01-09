import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WarningCard({ text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Aviso importante</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FDECEA',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#DC3545',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#DC3545',
    marginBottom: 6,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});
