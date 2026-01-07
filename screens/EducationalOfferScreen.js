import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Animated, StyleSheet } from 'react-native';
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
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Text style={styles.infoTitle}>Oferta Educativa</Text>

        {/* LICENCIATURAS */}
        <Text style={styles.sectionHeader}>Licenciaturas</Text>

        <CareerCard
          title="Licenciatura en Contador Público"
          description="Formación en contabilidad, auditoría, finanzas y fiscalización."
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
          description="Gestión estratégica de recursos humanos, mercadotecnia y dirección de empresas."
          image={require('../assets/carreras/administracion.jpg')}
          details={{
            modalidad: 'Escolarizada',
            turno: 'Matutino y Vespertino',
            periodicidad: 'Semestral',
            sede: 'Única (Tuxtepec)',
          }}
        />

        {/* INGENIERÍAS */}
        <Text style={styles.sectionHeader}>Ingenierías</Text>

        <CareerCard
          title="Ingeniería Bioquímica"
          description="Procesos biotecnológicos aplicados en alimentos, farmacéutica y medio ambiente."
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
          description="Diseño, construcción y mantenimiento de obras civiles y de infraestructura."
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
          description="Circuitos, telecomunicaciones, sistemas digitales y control electrónico."
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
          description="Integración de sistemas eléctricos y mecánicos aplicados a la industria."
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
          description="Administración de sistemas, redes y soluciones tecnológicas para empresas."
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
          description="Planeación estratégica, administración de proyectos y liderazgo organizacional."
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
          description="Desarrollo de software, bases de datos, inteligencia artificial y redes."
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
          description="Creación de aplicaciones móviles, web y de escritorio con tecnologías modernas."
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
  infoTitle: {
    fontSize: 28,
    color: '#2C5F8B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3A7D44',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
  },
});
