import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  Animated,
  StyleSheet,
  View,
} from 'react-native';
import CareerCard from '../components/CareerCard';
import { BaseStyles } from '../styles/BaseStyles';

export default function EducationalOfferScreen() {
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.infoTitle}>Oferta Educativa</Text>
          <Text style={styles.subtitle}>
            Conoce los programas académicos que ofrece el
            TecNM Campus Tuxtepec
          </Text>
        </View>

        {/* LICENCIATURAS */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Licenciaturas</Text>
          <View style={styles.sectionLine} />
        </View>

        <CareerCard
          title="Licenciatura en Contador Público"
          description="Formación integral en contabilidad, auditoría y finanzas, enfocada en la correcta gestión fiscal y financiera de organizaciones públicas y privadas, con apego a normas nacionales e internacionales."
          image={require('../assets/carreras/contador.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Licenciatura en Administración"
          description="Desarrollo de habilidades para la planeación, organización y dirección de empresas, con enfoque en recursos humanos, mercadotecnia, finanzas y toma de decisiones estratégicas."
          image={require('../assets/carreras/administracion.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        {/* INGENIERÍAS */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Ingenierías</Text>
          <View style={styles.sectionLineGreen} />
        </View>

        <CareerCard
          title="Ingeniería Bioquímica"
          description="Aplicación de procesos biotecnológicos y químicos en áreas como alimentos, farmacéutica y medio ambiente, contribuyendo a la innovación y solución de problemas industriales."
          image={require('../assets/carreras/bioquimica.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Ingeniería Civil"
          description="Diseño, construcción y mantenimiento de infraestructura urbana y rural, aplicando criterios técnicos, normativos y de sostenibilidad para el desarrollo de la sociedad."
          image={require('../assets/carreras/civil.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Ingeniería Electrónica"
          description="Diseño y análisis de sistemas electrónicos, telecomunicaciones y control, orientados a la automatización, comunicaciones y desarrollo tecnológico."
          image={require('../assets/carreras/electronica.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Ingeniería Electromecánica"
          description="Integración de sistemas eléctricos y mecánicos para el diseño, operación y mantenimiento de equipos industriales, con enfoque en eficiencia y productividad."
          image={require('../assets/carreras/electromecanica.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Ingeniería Informática"
          description="Formación profesional en administración de sistemas informáticos, redes y soluciones tecnológicas, orientada a la optimización de procesos y soporte tecnológico en organizaciones."
          image={require('../assets/carreras/informatica.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Ingeniería en Gestión Empresarial"
          description="Desarrollo de competencias para la planeación estratégica, gestión de proyectos y liderazgo organizacional, integrando conocimientos administrativos y tecnológicos."
          image={require('../assets/carreras/gestion.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Ingeniería en Sistemas Computacionales"
          description="Diseño y desarrollo de software, bases de datos, redes y soluciones computacionales, aplicando metodologías modernas para resolver problemas tecnológicos complejos."
          image={require('../assets/carreras/sistemas.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        <CareerCard
          title="Ingeniería en Desarrollo de Aplicaciones"
          description="Creación de aplicaciones móviles, web y de escritorio utilizando tecnologías actuales, enfocadas en la innovación, experiencia de usuario y soluciones digitales eficientes."
          image={require('../assets/carreras/desarrollo.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F4F8FB',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 10,
  },

  infoTitle: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: '#2C5F8B',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#555',
    textAlign: 'center',
  },

  sectionContainer: {
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 16,
  },

  sectionHeader: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#2C5F8B',
    marginBottom: 4,
  },

  sectionLine: {
    height: 3,
    width: 60,
    backgroundColor: '#2C5F8B',
    borderRadius: 4,
  },

  sectionLineGreen: {
    height: 3,
    width: 60,
    backgroundColor: '#3A7D44',
    borderRadius: 4,
  },
});
