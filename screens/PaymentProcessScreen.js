import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function PaymentProcessScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const copyCLABE = async () => {
    await Clipboard.setStringAsync('014855655071720028');
    setCopied(true);
    Alert.alert('CLABE copiada', 'La CLABE fue copiada al portapapeles.');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Pago de Ficha</Text>

        {/* MONTO */}
        <View style={styles.amountCard}>
          <Text style={styles.amountTitle}>Monto a pagar</Text>

          <View style={styles.amountRow}>
            <Text style={styles.amountLabel}>Escolarizado</Text>
            <Text style={styles.amountValue}>$900.00 MXN</Text>
          </View>

          <View style={styles.amountRow}>
            <Text style={styles.amountLabel}>Escolarizado Sabatino</Text>
            <Text style={styles.amountValue}>$900.00 MXN</Text>
          </View>
        </View>

        {/* MÉTODOS DE PAGO */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Alternativas de pago</Text>

          {/* DEPÓSITO */}
          <View style={styles.methodCard}>
            <Text style={styles.methodTitle}>Depósito bancario</Text>
            <Text style={styles.text}>
              Banco Santander y Banco Telecomm
            </Text>
            <Text style={styles.text}>
              Cuenta:{'\n'}
              <Text style={styles.bold}>
                TNM / Instituto Tecnológico de Tuxtepec
              </Text>
            </Text>
            <Text style={styles.text}>
              No. de cuenta:{'\n'}
              <Text style={styles.bold}>65-507172002</Text>
            </Text>
          </View>

          {/* TRANSFERENCIA */}
          <View style={styles.methodCardGreen}>
            <Text style={styles.methodTitle}>
              Transferencia interbancaria
            </Text>

            <Text style={styles.text}>
              Cuenta:{'\n'}
              <Text style={styles.bold}>
                TNM / Instituto Tecnológico de Tuxtepec
              </Text>
            </Text>

            <Text style={styles.text}>CLABE interbancaria</Text>

            <View style={styles.clabeBox}>
              <Text style={styles.clabeText}>
                014855655071720028
              </Text>

              <TouchableOpacity
                style={[
                  styles.copyButton,
                  copied && styles.copyButtonDone,
                ]}
                onPress={copyCLABE}
              >
                <Text style={styles.copyButtonText}>
                  {copied ? 'Copiado ✓' : 'Copiar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TARJETA */}
          <View style={styles.methodCard}>
            <Text style={styles.methodTitle}>
              Pago con tarjeta
            </Text>
            <Text style={styles.text}>
              Crédito o débito en las instalaciones del TecNM Tuxtepec
            </Text>
            <Text style={styles.text}>
              Lunes a viernes de 9:00 a 15:30 hrs
            </Text>
            <Text style={styles.note}>
              Excepto el último día del mes
            </Text>
          </View>
        </View>

        {/* CANJE */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            Canje de comprobante
          </Text>

          <Text style={styles.text}>
            Acude al Departamento de Recursos Financieros para
            canjear tu comprobante por el recibo oficial.
          </Text>

          <Text style={styles.bullet}>• Nombre completo</Text>
          <Text style={styles.bullet}>• Número de pre ficha</Text>
        </View>

        {/* NOTA */}
        <View style={styles.highlightCard}>
          <Text style={styles.highlightTitle}>Nota</Text>
          <Text style={styles.highlightText}>
            Si realizas el pago con tarjeta directamente en el
            departamento, no es necesario realizar el canje.
          </Text>
        </View>

        {/* AVISO */}
        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>Aviso importante</Text>
          <Text style={styles.warningText}>
            • Cada comprobante de pago es personal e intransferible.
          </Text>
          <Text style={styles.warningText}>
            • No hay reembolsos después de realizar el pago.
          </Text>
        </View>
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

  amountCard: {
    backgroundColor: '#E9F6EC',
    borderRadius: 14,
    padding: 18,
    borderWidth: 2,
    borderColor: '#1B8E36',
    marginBottom: 20,
  },
  amountTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#1B8E36',
    marginBottom: 10,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  amountLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
  },
  amountValue: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#1B8E36',
  },

  sectionCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 20,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    marginBottom: 20,
  },

  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#2C5F8B',
    marginBottom: 12,
  },

  methodCard: {
    backgroundColor: '#F4F8FB',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#2C5F8B',
  },
  methodCardGreen: {
    backgroundColor: '#E9F6EC',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#1B8E36',
  },

  methodTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#2C5F8B',
    marginBottom: 6,
  },

  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  bold: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#2C5F8B',
  },

  note: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#555',
  },

  clabeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#1B8E36',
    marginTop: 8,
  },
  clabeText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#1B8E36',
  },
  copyButton: {
    backgroundColor: '#1B8E36',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  copyButtonDone: {
    backgroundColor: '#3A7D44',
  },
  copyButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#FFF',
  },

  bullet: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
    marginTop: 4,
  },

  highlightCard: {
    backgroundColor: '#FFF3C4',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#FFC107',
    marginBottom: 20,
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

  warningCard: {
    backgroundColor: '#FDECEA',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#DC3545',
  },
  warningTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#DC3545',
    marginBottom: 6,
  },
  warningText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#333',
  },
});
