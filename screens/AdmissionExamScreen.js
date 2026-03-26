import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
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
  const StepItem = ({ text }) => (
  <View style={styles.stepItem}>
    <View style={styles.stepIcon}>
      <Text style={styles.stepIconText}>✔</Text>
    </View>
    <Text style={styles.stepText}>{text}</Text>
  </View>
);

  return (
    <ScrollView
      style={BaseStyles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* TÍTULO */}
      <Text style={BaseStyles.title}>Examen de Admisión</Text>

      {/* INTRO */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>¿En qué consiste?</Text>
        <Text style={BaseStyles.text}>
          Evaluación en línea obligatoria para ingresar al Instituto Tecnológico de Tuxtepec.
        </Text>
      </View>

      {/* BLOQUE DESTACADO */}
      <View style={styles.highlightCard}>
        <Text style={styles.highlightTitle}>⚠️ IMPORTANTE</Text>
        <Text style={styles.highlightText}>11 de julio de 2026</Text>
        <Text style={styles.highlightText}>17:00 a 20:00 hrs</Text>

        <Text style={styles.highlightNote}>
          Es el único horario disponible para realizar el examen.
        </Text>
      </View>

      {/* ACCESO */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Acceso al examen</Text>

        <InfoItem text="Usuario: Número de ficha (folio)" />
        <InfoItem text="Contraseña: CURP" />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            modalRef.current.open(
              'https://tuxtepec.evaluatec.tecnm.mx'
            )
          }
        >
          <Text style={styles.primaryText}>
            Entrar a EVALUATEC
          </Text>
        </TouchableOpacity>
      </View>

      {/* RECOMENDACIONES */}
      <View style={BaseStyles.card}>
  <Text style={BaseStyles.sectionTitle}>Recomendaciones</Text>

  <StepItem text="Conectarte 15 minutos antes" />
  <StepItem text="Usar computadora (no celular)" />
  <StepItem text="Internet estable (evitar WiFi)" />
  <StepItem text="Usar Google Chrome" />

  <Text style={styles.noteText}>
    El examen inicia automáticamente, si entras tarde tendrás menos tiempo.
  </Text>
</View>

      {/* ÁREAS */}
<View style={BaseStyles.card}>
  <Text style={BaseStyles.sectionTitle}>Áreas del examen</Text>

  <StepItem text="Estructura del lenguaje" />
  <StepItem text="Comprensión lectora" />
  <StepItem text="Pensamiento analítico" />
  <StepItem text="Matemáticas" />
  <StepItem text="Lógica matemática" />
  <StepItem text="Habilidad matemática" />
</View>

      {/* TEMARIOS */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Temarios</Text>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            modalRef.current.open(
              'https://tecnmtuxtepec-my.sharepoint.com'
            )
          }
        >
          <Text style={styles.secondaryText}>
            Ver temarios del examen
          </Text>
        </TouchableOpacity>
      </View>

      {/* VIDEO */}
<View style={BaseStyles.card}>
  <Text style={BaseStyles.sectionTitle}>Video guía</Text>

  <TouchableOpacity
    style={styles.videoContainer}
    onPress={() =>
      modalRef.current.open(
        'https://www.youtube.com/watch?v=x5F9Rqr5-SM'
      )
    }
    activeOpacity={0.8}
  >
    <Image
      source={{
        uri: 'https://img.youtube.com/vi/x5F9Rqr5-SM/hqdefault.jpg',
      }}
      style={styles.videoThumbnail}
    />

    <View style={styles.playOverlay}>
      <Text style={styles.playIcon}>▶</Text>
    </View>
  </TouchableOpacity>
</View>

      {/* RESULTADOS */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Resultados</Text>

        <Text style={BaseStyles.text}>
          4 de agosto de 2026 en medios oficiales del Instituto.
        </Text>
      </View>

      {/* AVISO FINAL */}
      <WarningCard
        text="Es obligatorio presentar el examen.
Si no lo realizas, deberás comunicarte al correo:
fichas_desarrollo@tuxtepec.tecnm.mx"
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
  videoContainer: {
  height: 180,
  borderRadius: 12,
  overflow: 'hidden',
  marginTop: 10,
},

videoThumbnail: {
  width: '100%',
  height: '100%',
},

playOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.4)',
},

playIcon: {
  fontSize: 40,
  color: '#FFF',
},

  highlightCard: {
    backgroundColor: '#2C5F8B',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
  highlightTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  highlightText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  highlightNote: {
    color: '#E8F4F8',
    marginTop: 8,
    fontSize: 13,
  },

  noteText: {
    marginTop: 8,
    color: '#555',
    fontSize: 13,
  },

  primaryButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  primaryText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },

  secondaryButton: {
    backgroundColor: '#3A7D44',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryText: {
    color: '#FFF',
    fontWeight: '600',
  },

  videoButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  videoText: {
    color: '#FFF',
    fontWeight: '700',
  },
  stepItem: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F0F6FA',
  padding: 12,
  borderRadius: 10,
  marginTop: 8,
  borderLeftWidth: 4,
  borderLeftColor: '#2C5F8B',
},

stepIcon: {
  width: 28,
  height: 28,
  borderRadius: 14,
  backgroundColor: '#2C5F8B',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
},

stepIconText: {
  color: '#FFF',
  fontWeight: 'bold',
},

stepText: {
  flex: 1,
  fontSize: 15,
  color: '#333',
  fontWeight: '500',
},
});