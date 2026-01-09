import React, { useRef } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import InfoItem from '../components/InfoItem';
import WarningCard from '../components/WarningCard';
import ExternalLinkModal from '../components/ExternalLinkModal';

import { BaseStyles } from '../styles/BaseStyles';

export default function AdmissionExamScreen() {
  const modalRef = useRef(null);

  return (
    <ScrollView
      style={BaseStyles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* TÍTULO */}
      <Text style={BaseStyles.title}>Examen de Admisión</Text>

      {/* INTRO */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>
          ¿En qué consiste el examen?
        </Text>
        <Text style={BaseStyles.text}>
          El examen de admisión es una evaluación en línea que permite medir
          conocimientos generales del aspirante. Es un requisito obligatorio
          para continuar con el proceso de ingreso al TecNM Campus Tuxtepec.
        </Text>
        <Text style={BaseStyles.text}>
          La evaluación se realiza en una plataforma oficial y solo estará
          disponible en el periodo indicado.
        </Text>
      </View>

      {/* INFORMACIÓN IMPORTANTE */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Información importante</Text>

        <InfoItem text="Fecha del examen: 18 de julio de 2025" />
        <InfoItem text="Plataforma: tuxtepec.evaluatec.tecnm.mx" />
        <InfoItem text="Disponible únicamente un día antes del examen" />
        <InfoItem text="Resultados: 5 de agosto de 2025" />
      </View>

      {/* REQUISITOS */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>
          Requisitos para presentar el examen
        </Text>

        <InfoItem text="Ficha de examen impresa" />
        <InfoItem text="Dispositivo con cámara funcional" />
        <InfoItem text="Conexión a Internet estable" />
        <InfoItem text="Navegador actualizado (Chrome o Edge)" />
      </View>

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() =>
          modalRef.current.open(
            'https://tuxtepec.evaluatec.tecnm.mx'
          )
        }
      >
        <Text style={styles.actionText}>
          Ir a la plataforma EVALUATEC
        </Text>
      </TouchableOpacity>

      {/* AVISO */}
      <WarningCard
        text="Si no realizas el examen en la fecha indicada,
        deberás comunicarte al correo
        fichas_desarrollo@tuxtepec.tecnm.mx
        para recibir orientación."
      />

      <ExternalLinkModal ref={modalRef} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  actionButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  actionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
