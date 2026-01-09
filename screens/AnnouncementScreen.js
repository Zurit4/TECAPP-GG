import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { BaseStyles } from '../styles/BaseStyles';
import ExternalLinkModal from '../components/ExternalLinkModal';

export default function AnnouncementScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLinkPress = (url) => modalRef.current.open(url);

  return (
    <Animated.View style={[BaseStyles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={BaseStyles.scrollContainer}>
        <Text style={BaseStyles.title}>Convocatoria de Admisión 2025</Text>

        {/* HERO */}
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Semestre</Text>
          <Text style={styles.heroSubtitle}>Agosto – Diciembre 2025</Text>
          <Text style={styles.heroText}>
            El Tecnológico Nacional de México Campus Tuxtepec invita a los aspirantes
            a participar en el proceso de admisión.
          </Text>
        </View>

        {/* FECHAS IMPORTANTES */}
        <Text style={styles.blockTitle}>Fechas importantes</Text>

        {[
          ['Registro y pago', '24 febrero – 11 junio 2025'],
          ['Examen de admisión', '18 julio 2025'],
          ['Resultados', '5 agosto 2025'],
          ['Inscripciones', '5 – 22 agosto 2025'],
          ['Inicio de clases', '25 agosto 2025'],
        ].map((item, index) => (
          <View key={index} style={styles.dateCard}>
            <View style={styles.dateDot} />
            <View style={{ flex: 1 }}>
              <Text style={styles.dateTitle}>{item[0]}</Text>
              <Text style={styles.dateText}>{item[1]}</Text>
            </View>
          </View>
        ))}

        {/* REQUISITOS */}
        <Text style={styles.blockTitle}>Requisitos principales</Text>

        <View style={styles.requirementsBox}>
          {[
            'Correo electrónico Gmail',
            'CURP verificada',
            'Documentación completa',
          ].map((req, index) => (
            <View key={index} style={styles.requirementChip}>
              <Text style={styles.requirementText}>✓ {req}</Text>
            </View>
          ))}
        </View>

        {/* CURP */}
        <View style={BaseStyles.curpCard}>
          <Text style={BaseStyles.curpTitle}>Consulta tu CURP</Text>
          <Text style={BaseStyles.curpDesc}>
            Obtén o verifica tu CURP directamente desde el portal oficial del Gobierno de México.
          </Text>
          <TouchableOpacity
            style={BaseStyles.curpBtn}
            onPress={() => handleLinkPress('https://www.gob.mx/curp/')}
          >
            <Text style={BaseStyles.curpBtnText}>Consultar CURP</Text>
          </TouchableOpacity>
        </View>

        {/* AVISO */}
        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Importante</Text>
          <Text style={BaseStyles.highlightText}>
            Revisa la convocatoria completa para conocer todos los requisitos,
            fechas y pasos del proceso de admisión.
          </Text>
        </View>

        {/* CTA FINAL */}
        <TouchableOpacity
          style={[BaseStyles.linkButton, { marginTop: 10 }]}
          onPress={() =>
            handleLinkPress('https://www.tuxtepec.tecnm.mx/procedimiento.html')
          }
        >
          <Text style={BaseStyles.linkButtonText}>
            Ver convocatoria completa
          </Text>
        </TouchableOpacity>

        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: '#2C5F8B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    elevation: 5,
  },
  heroTitle: {
    fontSize: 14,
    color: '#E8F4F8',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  heroSubtitle: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heroText: {
    fontSize: 15,
    color: '#E8F4F8',
    lineHeight: 22,
  },
  blockTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C5F8B',
    marginBottom: 12,
  },
  dateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#3A7D44',
    elevation: 3,
  },
  dateDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3A7D44',
    marginRight: 12,
  },
  dateTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C5F8B',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  requirementsBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  requirementChip: {
    backgroundColor: '#E9F6EC',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: '#3A7D44',
  },
  requirementText: {
    fontSize: 14,
    color: '#2C5F8B',
    fontWeight: '600',
  },
});
