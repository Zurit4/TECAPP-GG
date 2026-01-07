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

  const handleLinkPress = (url) => {
    modalRef.current.open(url);
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Acceso al SIE</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Pasos para el registro</Text>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Ingresar al portal del SIE.</Text>
          </View>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Seleccionar la opción “Aspirante”.</Text>
          </View>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Llenar los datos personales y académicos correctamente.
            </Text>
          </View>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Generar tu número de preficha y guardarlo para continuar el
              proceso.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={() =>
              handleLinkPress('https://tuxtepec.sistemasie.app/cgi-bin/sie.pl?Opc=PINDEXASPIRANTE&psie=intertec&dummy=0')
            }
          >
            <Text style={styles.linkButtonText}>Ir al portal del SIE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Nota importante</Text>
          <Text style={styles.highlight}>
            Asegúrate de ingresar con un correo Gmail y verificar que tus datos
            sean correctos antes de guardar la preficha.
          </Text>
        </View>

        {/* Sección CURP */}
        <View style={styles.curpCard}>
          <Text style={styles.curpTitle}>Consulta tu CURP</Text>
          <Text style={styles.curpDesc}>
            Puedes obtener o verificar tu CURP directamente desde el portal
            oficial del Gobierno de México.
          </Text>
          <TouchableOpacity
            style={styles.curpBtn}
            onPress={() => handleLinkPress('https://www.gob.mx/curp/')}
          >
            <Text style={styles.curpBtnText}>Consultar CURP</Text>
          </TouchableOpacity>
        </View>

        {/* Modal de confirmación */}
        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FB',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 26,
    color: '#2C5F8B',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#2C5F8B',
    fontWeight: '700',
    marginBottom: 10,
  },
  bulletBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    color: '#2C5F8B',
    marginRight: 8,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  highlight: {
    backgroundColor: '#FFF3C4',
    padding: 10,
    borderRadius: 6,
    fontSize: 15,
    color: '#333',
    textAlign: 'justify',
  },
  linkButton: {
    marginTop: 15,
    backgroundColor: '#2C5F8B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  curpCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#3A7D44',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  curpTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3A7D44',
    marginBottom: 8,
  },
  curpDesc: {
    fontSize: 15,
    color: '#333',
    marginBottom: 12,
  },
  curpBtn: {
    backgroundColor: '#3A7D44',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  curpBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
