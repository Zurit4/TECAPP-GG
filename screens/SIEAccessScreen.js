import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import ExternalLinkModal from '../components/ExternalLinkModal';

export default function SIEAccessScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const openLink = (url) => modalRef.current.open(url);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Solicitud de Ficha</Text>

        {/* INTRO */}
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>TRÁMITE PARA NUEVO INGRESO</Text>
          <Text style={styles.introText}>
            Estos son los pasos que deberás realizar si eres aspirante de nuevo
            ingreso al TecNM Campus Tuxtepec.
          </Text>
          <Text style={styles.browserTip}>
            Recomendación: utiliza el navegador Mozilla Firefox.
          </Text>
        </View>

        {/* PASOS */}
        <View style={styles.stepCard}>
          <Text style={styles.stepTitle}>Paso 1 · Ingresar al SIE</Text>
          <Text style={styles.stepText}>
            Ingresa a la página oficial del SIE y selecciona el menú
            “SIE Aspirante”. Captura tu CURP (sin clave de acceso).
          </Text>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={() =>
              openLink(
                'https://tuxtepec.sistemasie.app/cgi-bin/sie.pl?Opc=PINDEXASPIRANTE&psie=intertec&dummy=0'
              )
            }
          >
            <Text style={styles.linkButtonText}>Ir al portal del SIE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.stepCard}>
          <Text style={styles.stepTitle}>Paso 2 · Captura de datos</Text>
          <Text style={styles.stepText}>
            Captura tus DATOS GENERALES dando clic en la opción
            “Modificar datos”.
          </Text>
        </View>

        <View style={styles.stepCard}>
          <Text style={styles.stepTitle}>Paso 3 · Solicitar pre-ficha</Text>
          <Text style={styles.stepText}>
            Da clic en “SOLICITAR PRE-FICHA” y selecciona el programa de estudios
            que deseas cursar.
          </Text>
        </View>

        <View style={styles.stepCardGreen}>
          <Text style={styles.stepTitleGreen}>Paso 4 · Realizar el pago</Text>
          <Text style={styles.stepText}>
            Realiza el pago correspondiente y conserva el comprobante
            (captura de pantalla o recibo).
          </Text>
        </View>

        <View style={styles.stepCard}>
          <Text style={styles.stepTitle}>Paso 5 · Esperar validación</Text>
          <Text style={styles.stepText}>
            Después del pago deberás esperar 24 horas. Posteriormente ingresa
            nuevamente al SIE, selecciona “Ficha asignada”, sube tu fotografía
            e imprime tu ficha.
          </Text>
        </View>

        <View style={styles.stepCard}>
          <Text style={styles.stepTitle}>Paso 6 · Entrega de ficha</Text>
          <Text style={styles.stepText}>
            Imprime la ficha en 3 tantos y fírmala. Entrega:
          </Text>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Servicios Escolares</Text>
          </View>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Desarrollo Académico</Text>
          </View>

          <Text style={styles.stepText}>
            Horario: lunes a viernes de 9:00 a 16:00 hrs.  
            La copia restante será tu comprobante para el curso de
            homogeneización.
          </Text>
        </View>

        {/* NOTA */}
        <View style={styles.highlightCard}>
          <Text style={styles.highlightTitle}>Nota importante</Text>
          <Text style={styles.highlightText}>
            A partir del 22 de diciembre entramos en periodo vacacional,
            reanudando actividades el 7 de enero de 2026.
          </Text>
        </View>

        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F8FB' },
  scrollContainer: { padding: 20, paddingBottom: 80 },

  title: {
    fontSize: 26,
    fontFamily: 'Montserrat-Bold',
    color: '#2C5F8B',
    textAlign: 'center',
    marginBottom: 20,
  },

  introCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 20,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    marginBottom: 22,
    elevation: 3,
  },
  introTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#2C5F8B',
    marginBottom: 6,
  },
  introText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
    marginBottom: 6,
  },
  browserTip: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#3A7D44',
  },

  stepCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    elevation: 2,
  },

  stepCardGreen: {
    backgroundColor: '#E9F6EC',
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: '#1B8E36',
    elevation: 2,
  },

  stepTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#2C5F8B',
    marginBottom: 6,
  },

  stepTitleGreen: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#1B8E36',
    marginBottom: 6,
  },

  stepText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },

  bulletBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 4,
  },

  bullet: {
    fontSize: 18,
    color: '#2C5F8B',
    marginRight: 6,
  },

  bulletText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
  },

  linkButton: {
    marginTop: 14,
    backgroundColor: '#2C5F8B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  linkButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 16,
  },

  highlightCard: {
    backgroundColor: '#FFF3C4',
    borderRadius: 14,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#FFC107',
    marginTop: 10,
  },

  highlightTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#856404',
    marginBottom: 6,
  },

  highlightText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
  },
});
