import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native';

import InfoItem from '../components/InfoItem';
import WarningCard from '../components/WarningCard';
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

        {/* TÍTULO */}
        <Text style={BaseStyles.title}>Proceso de Inscripción</Text>

        {/* INTRO */}
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>INSCRIPCIÓN AL TECNM TUXTEPEC</Text>
          <Text style={styles.introText}>
            La inscripción es el último paso del proceso de admisión. En esta
            etapa se validan tus documentos y se formaliza tu ingreso al
            Instituto Tecnológico de Tuxtepec.
          </Text>
        </View>

        {/* FECHAS Y COSTO */}
        <View style={styles.importantCard}>
          <Text style={styles.importantTitle}>Fechas y costo</Text>

          <View style={styles.importantRow}>
            <Text style={styles.label}>💵 Costo de inscripción</Text>
            <Text style={styles.value}>$2,100.00 MXN</Text>
          </View>

          <View style={styles.importantRow}>
            <Text style={styles.label}>📅 Pago</Text>
            <Text style={styles.value}>17 – 21 agosto 2026</Text>
          </View>

          <View style={styles.importantRow}>
            <Text style={styles.label}>📄 Entrega de documentos</Text>
            <Text style={styles.value}>10 – 14 agosto 2026</Text>
          </View>

          <View style={styles.importantRow}>
            <Text style={styles.label}>📚 Carga de materias</Text>
            <Text style={styles.value}>17 – 21 agosto 2026</Text>
          </View>
        </View>

        {/* CARGA DE MATERIAS */}
        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Carga de materias</Text>
          <Text style={BaseStyles.text}>
            La carga de materias será realizada directamente por el
            Departamento de Servicios Escolares, de acuerdo con el programa
            educativo asignado.
          </Text>
        </View>

        {/* DOCUMENTOS */}
        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Documentos requeridos</Text>

          <View style={styles.docItem}>
            <Text style={styles.docText}>Solicitud de inscripción</Text>
          </View>

          <View style={styles.docItem}>
            <Text style={styles.docText}>
              Acta de nacimiento (original y copia)
            </Text>
          </View>

          <View style={styles.docItem}>
            <Text style={styles.docText}>CURP</Text>
          </View>

          <View style={styles.docItem}>
            <Text style={styles.docText}>Certificado de bachillerato</Text>
          </View>

          <View style={styles.docItem}>
            <Text style={styles.docText}>
              Comprobante de pago de inscripción
            </Text>
          </View>

          <View style={styles.docItem}>
            <Text style={styles.docText}>
              2 fotografías tamaño infantil
            </Text>
          </View>
        </View>

        {/* AVISO FORMATOS */}
        <WarningCard text="Los formatos oficiales de inscripción se obtienen en la copiadora del Instituto." />

        {/* RECOMENDACIÓN */}
        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Recomendación</Text>
          <Text style={BaseStyles.highlightText}>
            Revisa que todos tus documentos estén completos, legibles y sin
            errores antes de entregarlos, para evitar retrasos en tu proceso
            de inscripción.
          </Text>
        </View>

      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  introCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    marginBottom: 20,
  },
  introTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#2C5F8B',
    marginBottom: 6,
  },
  introText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },

  /* TARJETA IMPORTANTE */
  importantCard: {
    backgroundColor: '#E9F6EC',
    borderRadius: 12,
    padding: 18,
    borderWidth: 2,
    borderColor: '#1B8E36',
    marginBottom: 20,
  },
  importantTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#1B8E36',
    marginBottom: 12,
  },
  importantRow: {
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#333',
  },
  value: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#1B8E36',
  },

  /* DOCUMENTOS */
  docItem: {
    backgroundColor: '#F4F8FB',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#2C5F8B',
  },
  docText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
  },
});
