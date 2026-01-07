import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import { BaseStyles } from '../styles/BaseStyles';

export default function EnrollmentScreen() {
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
        <Text style={BaseStyles.title}>Inscripción</Text>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Fechas</Text>
          <Text style={BaseStyles.text}>
            Del 18 al 22 de agosto de 2025. La carga de materias será realizada por Servicios Escolares.
          </Text>
        </View>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Documentos requeridos</Text>
          <Text style={BaseStyles.text}>• Acta de nacimiento original y copia</Text>
          <Text style={BaseStyles.text}>• CURP</Text>
          <Text style={BaseStyles.text}>• Certificado de bachillerato</Text>
          <Text style={BaseStyles.text}>• Comprobante de pago de inscripción</Text>
          <Text style={BaseStyles.text}>• 2 fotografías tamaño infantil</Text>
        </View>

        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Recomendación</Text>
          <Text style={BaseStyles.highlightText}>
            Revisa que tus documentos estén completos y legibles antes de entregarlos para evitar
            retrasos en tu proceso de inscripción.
          </Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
}
