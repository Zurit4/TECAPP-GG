import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import ExternalLinkModal from '../components/ExternalLinkModal';

export default function FullProcessScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const steps = [
    {
      title: 'Solicitud del aspirante',
      dates: '24 febrero - 11 junio 2025',
      desc: 'Registro en el SIE con datos personales, académicos y generación de preficha.',
    },
    {
      title: 'Pago de derecho al proceso',
      dates: '24 febrero - 11 junio 2025',
      desc: 'Pago de $900.00 MXN en bancos autorizados o ventanilla del Instituto.',
    },
    {
      title: 'Ficha de examen',
      dates: '24 febrero - 11 junio 2025',
      desc: 'Subir fotografía y descargar ficha en el SIE, entregar copias en Servicios Escolares.',
    },
    {
      title: 'Examen de admisión',
      dates: '18 julio 2025',
      desc: 'Examen en línea mediante la plataforma EVALUATEC.',
    },
    {
      title: 'Curso de homogeneización',
      dates: '7 - 18 julio 2025',
      desc: 'Pago de $1,500.00 MXN y asistencia presencial obligatoria.',
    },
    {
      title: 'Pago de inscripción',
      dates: '5 - 8 agosto 2025',
      desc: 'Pago de $2,100.00 MXN y entrega de documentos requeridos.',
    },
    {
      title: 'Entrega de documentos',
      dates: '11 - 15 agosto 2025',
      desc: 'Incluye certificado, CURP, acta de nacimiento, entre otros.',
    },
    {
      title: 'Inscripción',
      dates: '18 - 22 agosto 2025',
      desc: 'Carga de materias por Servicios Escolares.',
    },
    {
      title: 'Inicio de clases',
      dates: '25 agosto 2025',
      desc: 'Presentarse según el horario asignado.',
    },
  ];

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Proceso Completo de Admisión 2025</Text>

        {steps.map((step, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.stepTitle}>{index + 1}. {step.title}</Text>
            <Text style={styles.stepDates}>{step.dates}</Text>
            <Text style={styles.stepDesc}>{step.desc}</Text>
          </View>
        ))}

        <View style={styles.cardInfo}>
          <Text style={styles.sectionTitle}>Más información</Text>
          <Text style={styles.text}>
            Puedes consultar el procedimiento completo desde el sitio oficial del Instituto.
          </Text>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => modalRef.current.open('https://www.tuxtepec.tecnm.mx/procedimiento.html')}
          >
            <Text style={styles.linkButtonText}>Ver procedimiento oficial</Text>
          </TouchableOpacity>
        </View>

        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F8FB' },
  scrollContainer: { padding: 20, paddingBottom: 60 },
  title: {
    fontSize: 26,
    color: '#2C5F8B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    padding: 18,
    marginBottom: 15,
    elevation: 4,
  },
  stepTitle: { fontSize: 18, fontWeight: '700', color: '#2C5F8B' },
  stepDates: { color: '#3A7D44', fontWeight: '600', marginBottom: 6 },
  stepDesc: { fontSize: 15, color: '#333', lineHeight: 22 },
  cardInfo: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3A7D44',
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#3A7D44', marginBottom: 8 },
  text: { fontSize: 15, color: '#333', marginBottom: 12 },
  linkButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
