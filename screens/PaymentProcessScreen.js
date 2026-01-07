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

export default function PaymentProcessScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLinkPress = (url) => modalRef.current.open(url);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Pago de Ficha</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Opciones de pago</Text>
          <Text style={styles.text}>
            Puedes realizar tu pago por cualquiera de los siguientes medios:
          </Text>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Depósito directo en ventanilla bancaria.
            </Text>
          </View>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Depósito directo en ventanilla del Instituto.
            </Text>
          </View>

          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Transferencia bancaria (CLABE:{' '}
              <Text style={styles.bold}>014855655071720028</Text>)
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Fechas límite</Text>
          <Text style={styles.highlight}>
            Los pagos estarán disponibles del 24 de febrero al 11 de junio de
            2025. Asegúrate de conservar tu comprobante.
          </Text>
        </View>



        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F8FB' },
  scrollContainer: { padding: 20 },
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
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C5F8B',
    marginBottom: 10,
  },
  bulletBox: { flexDirection: 'row', marginBottom: 8 },
  bullet: { fontSize: 18, color: '#2C5F8B', marginRight: 8 },
  text: { fontSize: 16, color: '#333', lineHeight: 22 },
  bold: { fontWeight: 'bold', color: '#2C5F8B' },
  highlight: {
    backgroundColor: '#FFF3C4',
    padding: 10,
    borderRadius: 6,
    fontSize: 15,
  },


});
