import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import { BaseStyles } from '../styles/BaseStyles';

export default function HomogenizationScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[BaseStyles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={BaseStyles.scrollContainer}>
        <Text style={BaseStyles.title}>Curso de Homogeneización</Text>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>¿Qué es el curso?</Text>
          <Text style={BaseStyles.text}>
            El curso de homogeneización es una actividad académica que tiene como propósito nivelar
            los conocimientos básicos de los aspirantes en matemáticas, física y comunicación escrita.
          </Text>
        </View>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Duración</Text>
          <Text style={BaseStyles.text}>Del 7 al 18 de julio de 2025.</Text>
        </View>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Costo</Text>
          <Text style={BaseStyles.text}>$1,500.00 MXN</Text>
        </View>

        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Importante</Text>
          <Text style={BaseStyles.highlightText}>
            La asistencia es obligatoria y forma parte del proceso de ingreso. Es requisito para
            continuar con la inscripción.
          </Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
}
