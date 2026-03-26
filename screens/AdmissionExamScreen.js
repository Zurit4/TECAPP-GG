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
          Es una evaluación en línea obligatoria para ingresar al TecNM Tuxtepec.
        </Text>
      </View>

      {/* INFORMACIÓN CLAVE */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Información importante</Text>

        <InfoItem text="Fecha: 11 de julio de 2026" />
        <InfoItem text="Horario: 17:00 a 20:00 hrs" />
        <InfoItem text="Duración fija, inicia automáticamente" />
        <InfoItem text="Resultados: 4 de agosto de 2026" />
      </View>

      {/* ACCESO AL EXAMEN */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Acceso al examen</Text>

        <InfoItem text="Ingresar con tu número de ficha (folio)" />
        <InfoItem text="Contraseña: tu CURP" />

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
      </View>

      {/* RECOMENDACIONES */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Recomendaciones</Text>

        <InfoItem text="Conectarte 15 minutos antes" />
        <InfoItem text="Usar computadora (no celular)" />
        <InfoItem text="Internet estable (no WiFi inestable)" />
        <InfoItem text="Usar Google Chrome" />
      </View>

      {/* REQUISITOS */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>
          Requisitos
        </Text>

        <InfoItem text="Ficha de examen impresa" />
        <InfoItem text="Cámara funcional" />
        <InfoItem text="Navegador actualizado" />
      </View>

      {/* ÁREAS */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>
          Áreas del examen
        </Text>

        <InfoItem text="Comprensión lectora" />
        <InfoItem text="Estructura del lenguaje" />
        <InfoItem text="Pensamiento analítico" />
        <InfoItem text="Matemáticas" />
        <InfoItem text="Lógica matemática" />
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

      {/* VIDEO DEMO */}
      <View style={BaseStyles.card}>
        <Text style={BaseStyles.sectionTitle}>Video demostrativo</Text>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            modalRef.current.open(
              'https://www.youtube.com/watch?v=x5F9Rqr5-SM'
            )
          }
        >
          <Text style={styles.secondaryText}>
            Ver cómo usar la plataforma
          </Text>
        </TouchableOpacity>
      </View>

      {/* AVISO */}
      <WarningCard
        text="Es obligatorio presentar el examen en la fecha indicada.
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
  actionButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  actionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
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
});