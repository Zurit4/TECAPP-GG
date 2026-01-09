import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';

import InfoItem from '../components/InfoItem';
import WarningCard from '../components/WarningCard';
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

        {/* TÍTULO */}
        <Text style={BaseStyles.title}>Curso de Homogeneización</Text>

        {/* INTRO */}
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>¿PARA QUÉ SIRVE ESTE CURSO?</Text>
          <Text style={styles.introText}>
            El curso de homogeneización tiene como objetivo reforzar los
            conocimientos básicos necesarios para que los aspirantes inicien
            sus estudios universitarios con una base sólida.
          </Text>
        </View>

        {/* OBJETIVO */}
        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Objetivo del curso</Text>
          <Text style={BaseStyles.text}>
            Nivelar conocimientos fundamentales en áreas como matemáticas,
            física y comunicación escrita, facilitando el desempeño académico
            durante el primer semestre.
          </Text>
        </View>

        {/* FECHAS */}
        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Fechas importantes</Text>
          <InfoItem text="Pago del curso: 24 febrero – 4 julio 2025 ($1,500.00 MXN)" />
          <InfoItem text="Curso presencial: 7 – 18 julio 2025" />
        </View>

        {/* DURACIÓN */}
        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Duración</Text>
          <Text style={BaseStyles.text}>
            El curso se llevará a cabo del 7 al 18 de julio de 2025 y la
            asistencia es presencial y obligatoria.
          </Text>
        </View>

        {/* FORMAS DE PAGO */}
        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Formas de pago</Text>
          <InfoItem text="Depósito en ventanilla bancaria" />
          <InfoItem text="Transferencia bancaria (CLABE: 014855655071720028)" />
          <InfoItem text="Pago con tarjeta en ventanilla del Instituto" />
        </View>

        {/* COSTO */}
        <View style={styles.costCard}>
          <Text style={styles.costTitle}>Costo del curso</Text>
          <Text style={styles.costAmount}>$1,500.00 MXN</Text>
        </View>

        {/* AVISO OBLIGATORIO */}
        <WarningCard text="La asistencia al curso de homogeneización es obligatoria para todos los aspirantes aceptados y es requisito indispensable para continuar con el proceso de inscripción." />

        {/* IMPORTANTE */}
        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Importante</Text>
          <Text style={BaseStyles.highlightText}>
            No cumplir con la asistencia o el pago del curso puede impedir que
            el aspirante continúe con su inscripción al Instituto.
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

  costCard: {
    backgroundColor: '#E9F6EC',
    borderRadius: 12,
    padding: 18,
    borderWidth: 2,
    borderColor: '#1B8E36',
    alignItems: 'center',
    marginBottom: 20,
  },
  costTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#1B8E36',
    marginBottom: 4,
  },
  costAmount: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: '#1B8E36',
  },
});
