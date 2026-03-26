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

        {/* COSTOS */}
        <View style={styles.importantCard}>
          <Text style={styles.importantTitle}>💰 Costos de inscripción</Text>

          <View style={styles.costCard}>
            <Text style={styles.costLabel}>Modalidad Escolarizada</Text>
            <Text style={styles.costValue}>$2,100.00 MXN</Text>
          </View>

          <View style={styles.costCard}>
            <Text style={styles.costLabel}>
              Escolarizado Sabatino y Extensión Loma Bonita
            </Text>
            <Text style={styles.costValueHigh}>$3,500.00 MXN</Text>
          </View>
        </View>

        {/* FECHAS (TIMELINE) */}
        <Text style={styles.sectionHeader}>Fechas importantes</Text>

        <View style={styles.dateCard}>
          <Text style={styles.dateIcon}>💳</Text>
          <View style={styles.dateContent}>
            <Text style={styles.dateTitle}>Pago</Text>
            <Text style={styles.dateText}>17 - 21 agosto 2026</Text>
          </View>
        </View>

        <View style={styles.dateCard}>
          <Text style={styles.dateIcon}>📂</Text>
          <View style={styles.dateContent}>
            <Text style={styles.dateTitle}>Entrega de documentos</Text>
            <Text style={styles.dateText}>10 - 14 agosto 2026</Text>
          </View>
        </View>

        <View style={styles.dateCard}>
          <Text style={styles.dateIcon}>📚</Text>
          <View style={styles.dateContent}>
            <Text style={styles.dateTitle}>Carga de materias</Text>
            <Text style={styles.dateText}>17 - 21 agosto 2026</Text>
          </View>
        </View>

        {/* INFO EXTRA */}
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

        <WarningCard text="Los formatos oficiales de inscripción se obtienen en la copiadora del Instituto." />

        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Recomendación</Text>
          <Text style={BaseStyles.highlightText}>
            Revisa que todos tus documentos estén completos, legibles y sin
            errores antes de entregarlos.
          </Text>
        </View>

      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  /* INTRO */
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

  /* COSTOS */
  importantCard: {
    backgroundColor: '#F4F8FB',
    borderRadius: 12,
    padding: 18,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    marginBottom: 20,
  },
  importantTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#2C5F8B',
    marginBottom: 15,
  },

  costCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderLeftWidth: 6,
    borderLeftColor: '#3A7D44',
    elevation: 2,
  },

  costLabel: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#2C5F8B',
  },

  costValue: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 19,
    color: '#3A7D44',
  },

  costValueHigh: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 19,
    color: '#3A7D44',
  },

  /* FECHAS */
  sectionHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#2C5F8B',
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3A7D44',
    paddingLeft: 8,
  },

  dateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderLeftWidth: 5,
    borderLeftColor: '#2C5F8B',
    elevation: 2,
  },

  dateIcon: {
    fontSize: 22,
    marginRight: 12,
  },

  dateContent: {
    flex: 1,
  },

  dateTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#2C5F8B',
  },

  dateText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#555',
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