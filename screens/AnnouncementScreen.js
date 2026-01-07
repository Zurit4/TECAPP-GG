import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import ExternalLinkModal from '../components/ExternalLinkModal';

export default function AnnouncementScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLinkPress = (url) => modalRef.current.open(url);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Convocatoria de Admisión 2025</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Semestre Agosto - Diciembre 2025</Text>
          <Text style={styles.text}>
            El Tecnológico Nacional de México Campus Tuxtepec invita a todos los interesados a participar en el proceso de admisión al semestre Agosto-Diciembre 2025.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Fechas importantes</Text>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Registro y pago: 24 febrero - 11 junio 2025</Text>
          </View>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Examen de admisión: 18 julio 2025</Text>
          </View>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Resultados: 5 agosto 2025</Text>
          </View>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Inscripciones: 5 - 22 agosto 2025</Text>
          </View>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Inicio de clases: 25 agosto 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Requisitos principales</Text>
          <Text style={styles.text}>• Correo electrónico Gmail</Text>
          <Text style={styles.text}>• CURP verificada</Text>
          <Text style={styles.text}>• Documentación completa</Text>
        </View>

{/* Sección CURP */}

        <View style={styles.curpCard}>
          <Text style={styles.curpTitle}>Consulta tu CURP</Text>
          <Text style={styles.curpDesc}>
            Puedes obtener o verificar tu CURP directamente desde el portal
            oficial del Gobierno de México.
          </Text>
          <TouchableOpacity
            style={styles.curpBtn}
            onPress={() => handleLinkPress('https://www.gob.mx/curp/')}
          >
            <Text style={styles.curpBtnText}>Consultar CURP</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>  
        <View style={styles.cardHighlight}>
          <Text style={styles.highlightTitle}>Importante</Text>
          <Text style={styles.highlightText}>
            Revisa la convocatoria completa para conocer todos los requisitos, fechas y pasos del proceso.
          </Text>
        </View>
      
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => handleLinkPress('https://www.tuxtepec.tecnm.mx/procedimiento.html')}
        >
          <Text style={styles.linkButtonText}>Ver convocatoria completa</Text>
        </TouchableOpacity>

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
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#2C5F8B', marginBottom: 10 },
  text: { fontSize: 15, color: '#333', lineHeight: 22, marginBottom: 4 },
  bulletBox: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 },
  bullet: { fontSize: 18, color: '#2C5F8B', marginRight: 8 },
  cardHighlight: {
    backgroundColor: '#FFF3C4',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FFC107',
    marginBottom: 20,
  },
  highlightTitle: { fontSize: 18, fontWeight: '700', color: '#856404', marginBottom: 6 },
  highlightText: { fontSize: 15, color: '#333' },
  linkButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
    curpCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#3A7D44',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  curpTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3A7D44',
    marginBottom: 8,
  },
  curpDesc: {
    fontSize: 15,
    color: '#333',
    marginBottom: 12,
  },
  curpBtn: {
    backgroundColor: '#3A7D44',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  curpBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
