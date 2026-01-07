import React, { useRef } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Animated,View } from 'react-native';
import ExternalLinkModal from '../components/ExternalLinkModal';
import { BaseStyles } from '../styles/BaseStyles';

export default function AdmissionExamScreen() {
  const modalRef = useRef();

  return (
    <Animated.View style={[BaseStyles.container]}>
      <ScrollView contentContainerStyle={BaseStyles.scrollContainer}>
        <Text style={BaseStyles.title}>Examen de Admisión</Text>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Información importante</Text>
          <Text style={BaseStyles.text}>Fecha: 18 julio 2025</Text>
          <Text style={BaseStyles.text}>
            Plataforma: https://tuxtepec.evaluatec.tecnm.mx
          </Text>
          <Text style={BaseStyles.text}>Disponible un día antes del examen</Text>
          <Text style={BaseStyles.text}>Resultados: 5 agosto 2025</Text>
        </View>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Requisitos</Text>
          <Text style={BaseStyles.text}>• Ficha de examen impresa</Text>
          <Text style={BaseStyles.text}>
            • Dispositivo con cámara funcional y conexión estable a Internet
          </Text>
          <Text style={BaseStyles.text}>
            • Navegador actualizado (Google Chrome o Microsoft Edge)
          </Text>
        </View>

        <TouchableOpacity
          style={styles.action}
          onPress={() =>
            modalRef.current.open('https://tuxtepec.evaluatec.tecnm.mx')
          }
        >
          <Text style={styles.actionText}>Ir a la plataforma EVALUATEC</Text>
        </TouchableOpacity>
<Text></Text>
        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Aviso</Text>
          <Text style={BaseStyles.highlightText}>
            Si no realizas el examen, contacta a fichas_desarrollo@tuxtepec.tecnm.mx
          </Text>
        </View>

        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  action: {
    backgroundColor: '#2C5F8B',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 14,
  },
  actionText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
