import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  Platform,
  UIManager,
} from 'react-native';
import { BaseStyles } from '../styles/BaseStyles';
import ExternalLinkModal from '../components/ExternalLinkModal';



export default function FullProcessScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();
  const [openStep, setOpenStep] = useState(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleStep = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenStep(openStep === index ? null : index);
  };

  const steps = [
    {
      title: 'Solicitud del aspirante',
      dates: '23 febrero - 3 julio 2026',
      desc: 'Registro en el SIE con datos personales, académicos y generación de preficha.',
    },
    {
      title: 'Pago de derecho al proceso',
      dates: '23 febrero - 10 julio 2026',
      desc: 'Pago de $900.00 MXN en bancos autorizados o ventanilla del Instituto.',
    },
    {
      title: 'Ficha de examen',
      dates: '23 febrero - 10 julio 2026',
      desc: 'Subir fotografía y descargar ficha en el SIE, entregar copias en Servicios Escolares.',
    },
    {
      title: 'Examen de admisión',
      dates: '11 julio 2026 - 17:00 a 20:00 hrs' ,
      desc: 'Examen en línea mediante la plataforma EVALUATEC.',
    },
     {
      title: 'Curso de homogeneización escolarizado',
      dates: '6 - 17 julio 2026',
      desc: 'Pago de $1,500.00 MXN y asistencia presencial obligatoria.',
    },
    {
      title: 'Curso de homogeneización sabatino',
      dates: '4,11,18,25 julio 2026',
      desc: 'Pago de $1,500.00 MXN y asistencia presencial obligatoria.',
    },
     {
      title: 'Curso de homogeneización extención Loma Bonita',
      dates: '4,11,18,25 julio 2026',
      desc: 'Pago de $1,500.00 MXN y asistencia virtual obligatoria.',
    },
    {
      title: 'Curso de induccion en linea para todas las modalidades',
      dates: '20 - 26 julio 2026',
      desc: 'Asistencia virtual obligatoria, plataforma virtual/google classroom, contar con correo dominio gmail.',
    },
    {
      title: 'Pago de inscripción',
      dates: '17 - 21 agosto 2026',
      desc: 'Pago de $2,100.00 MXN escolarizado, $3,500.00 MXN escolarizado sabatino y entrega de documentos requeridos.',
    },
    {
      title: 'Entrega de documentos',
      dates: '10 - 14 agosto 2026',
      desc: 'Incluye certificado, CURP, acta de nacimiento, entre otros.',
    },
    {
      title: 'Inscripción',
      dates: '17- 21 agosto 2026',
      desc: 'Carga de materias por Servicios Escolares.',
    },
    {
      title: 'Inicio de clases',
      dates: '25 agosto 2026',
      desc: 'Presentarse según el horario asignado.',
    },
  ];

  return (
    <Animated.View style={[BaseStyles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={BaseStyles.scrollContainer}>
        <Text style={BaseStyles.title}>Proceso Completo de Admisión 2026</Text>

        {steps.map((step, index) => {
          const isOpen = openStep === index;

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              onPress={() => toggleStep(index)}
            >
              <View style={[styles.stepCard, isOpen && styles.stepCardOpen]}>
                <View style={styles.stepHeader}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepDates}>{step.dates}</Text>
                  </View>
                </View>

                {isOpen && (
                  <Text style={styles.stepDesc}>{step.desc}</Text>
                )}

                <Text style={styles.expandText}>
                  {isOpen ? 'Ver menos ▲' : 'Ver más ▼'}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* INFO EXTRA */}
        <View style={[BaseStyles.card, BaseStyles.cardGreen]}>
          <Text style={BaseStyles.sectionTitle}>Más información</Text>
          <Text style={BaseStyles.text}>
            Puedes consultar el procedimiento completo desde el sitio oficial del Instituto.
          </Text>

          <TouchableOpacity
            style={BaseStyles.linkButton}
            onPress={() =>
              modalRef.current.open(
                'https://www.tuxtepec.tecnm.mx/procedimiento.html'
              )
            }
          >
            <Text style={BaseStyles.linkButtonText}>
              Ver procedimiento oficial
            </Text>
          </TouchableOpacity>
        </View>

        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  stepCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    padding: 16,
    marginBottom: 14,
    elevation: 3,
  },
  stepCardOpen: {
    borderColor: '#3A7D44',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepNumber: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#2C5F8B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepTitle: {
    fontSize: 17,
    color: '#2C5F8B',
    fontWeight: '700',
  },
  stepDates: {
    fontSize: 14,
    color: '#3A7D44',
    fontWeight: '600',
    marginTop: 2,
  },
  stepDesc: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginTop: 12,
  },
  expandText: {
    textAlign: 'right',
    marginTop: 10,
    color: '#2C5F8B',
    fontWeight: '600',
    fontSize: 14,
  },
});
