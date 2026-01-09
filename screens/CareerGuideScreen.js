import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { BaseStyles } from '../styles/BaseStyles';

/* =======================
   DATA
======================= */

const OPTIONS = [
  {
    id: 1,
    label: 'Me gusta programar, usar computadoras y la tecnología',
    area: 'tech',
  },
  {
    id: 2,
    label: 'Me interesa construir, diseñar y crear obras',
    area: 'build',
  },
  {
    id: 3,
    label: 'Me gustan los negocios, la administración y la gestión',
    area: 'business',
  },
  {
    id: 4,
    label: 'Me interesa la ciencia, el laboratorio y la investigación',
    area: 'science',
  },
];

const CAREERS = [
  {
    name: 'Ingeniería en Sistemas Computacionales',
    area: 'tech',
    enfoque: 'Software y sistemas',
    campo: 'Desarrollo, bases de datos, redes, IA',
  },
  {
    name: 'Ingeniería Informática',
    area: 'tech',
    enfoque: 'Gestión tecnológica',
    campo: 'Soporte, administración de sistemas',
  },
  {
    name: 'Ingeniería en Desarrollo de Aplicaciones',
    area: 'tech',
    enfoque: 'Apps modernas',
    campo: 'Apps móviles, web y escritorio',
  },
  {
    name: 'Ingeniería Electrónica',
    area: 'tech',
    enfoque: 'Hardware',
    campo: 'Circuitos, telecomunicaciones',
  },
  {
    name: 'Ingeniería Electromecánica',
    area: 'tech',
    enfoque: 'Industria',
    campo: 'Sistemas eléctricos y mecánicos',
  },
  {
    name: 'Ingeniería Civil',
    area: 'build',
    enfoque: 'Construcción',
    campo: 'Obras e infraestructura',
  },
  {
    name: 'Ingeniería Bioquímica',
    area: 'science',
    enfoque: 'Ciencia aplicada',
    campo: 'Alimentos, salud, ambiente',
  },
  {
    name: 'Ingeniería en Gestión Empresarial',
    area: 'business',
    enfoque: 'Dirección',
    campo: 'Proyectos y liderazgo',
  },
  {
    name: 'Licenciatura en Administración',
    area: 'business',
    enfoque: 'Empresas',
    campo: 'Recursos humanos y finanzas',
  },
  {
    name: 'Licenciatura en Contador Público',
    area: 'business',
    enfoque: 'Contabilidad',
    campo: 'Auditoría y fiscalización',
  },
];

/* =======================
   SCREEN
======================= */

export default function CareerFinderScreen() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [showCompare, setShowCompare] = useState(false);

  const selectedArea = OPTIONS.find(o => o.id === selectedOption).area;

  const recommendedCareers = CAREERS.filter(
    career => career.area === selectedArea
  );

  return (
    <ScrollView style={BaseStyles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>¿Qué carrera es para mí?</Text>
      <Text style={styles.subtitle}>
        Selecciona la opción que más se parezca a ti
      </Text>

      {/* OPCIONES */}
      {OPTIONS.map(option => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.optionCard,
            selectedOption === option.id && styles.optionActive,
          ]}
          onPress={() => setSelectedOption(option.id)}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === option.id && styles.optionTextActive,
            ]}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}

      {/* RESULTADOS */}
      <Text style={styles.sectionTitle}>Carreras recomendadas</Text>

      {recommendedCareers.map((career, index) => (
        <View key={index} style={styles.careerCard}>
          <Text style={styles.careerName}>{career.name}</Text>
          <Text style={styles.careerDesc}>
            <Text style={styles.bold}>Enfoque:</Text> {career.enfoque}
          </Text>
          <Text style={styles.careerDesc}>
            <Text style={styles.bold}>Campo laboral:</Text> {career.campo}
          </Text>
        </View>
      ))}

      {/* COMPARAR */}
      <TouchableOpacity
        style={styles.compareButton}
        onPress={() => setShowCompare(true)}
      >
        <Text style={styles.compareButtonText}>Comparar carreras</Text>
      </TouchableOpacity>

      {/* MODAL COMPARACIÓN */}
      <Modal visible={showCompare} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Comparación rápida</Text>

            {recommendedCareers.map((career, index) => (
              <View key={index} style={styles.compareRow}>
                <Text style={styles.compareName}>{career.name}</Text>
                <Text style={styles.compareText}>{career.enfoque}</Text>
                <Text style={styles.compareText}>{career.campo}</Text>
              </View>
            ))}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCompare(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

/* =======================
   STYLES
======================= */

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 80,
  },

  title: {
    fontSize: 26,
    fontFamily: 'Montserrat-Bold',
    color: '#2C5F8B',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    color: '#555',
    marginBottom: 16,
  },

  optionCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 14,
    borderWidth: 2,
    borderColor: '#DDD',
    marginBottom: 10,
  },
  optionActive: {
    backgroundColor: '#E9F6EC',
    borderColor: '#1B8E36',
  },
  optionText: {
    fontFamily: 'Montserrat-Regular',
    color: '#333',
  },
  optionTextActive: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#1B8E36',
  },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#2C5F8B',
  },

  careerCard: {
    backgroundColor: '#E9F6EC',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#1B8E36',
    marginBottom: 12,
  },
  careerName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#1B8E36',
    marginBottom: 4,
  },
  careerDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#333',
  },
  bold: {
    fontFamily: 'Montserrat-SemiBold',
  },

  compareButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  compareButtonText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#2C5F8B',
    marginBottom: 12,
    textAlign: 'center',
  },
  compareRow: {
    marginBottom: 10,
  },
  compareName: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#1B8E36',
  },
  compareText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#333',
  },

  closeButton: {
    backgroundColor: '#DC3545',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
  },
});
