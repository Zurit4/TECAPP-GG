import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Animated,
  StyleSheet,
} from 'react-native';
import { BaseStyles } from '../styles/BaseStyles';
import ExternalLinkModal from '../components/ExternalLinkModal';

export default function ContactScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const openWhatsApp = () => {
    modalRef.current.open('https://wa.me/522871104437?text=Hola,%20tengo%20una%20duda%20sobre%20el%20proceso%20de%20admisión.'); //Se le puede cambiar el texto pero es un mensaje automatizado para el usuario
  };

  const openEmail = () => {
    Linking.openURL('mailto:fichas_desarrollo@tuxtepec.tecnm.mx');
  };

  return (
    <Animated.View style={[BaseStyles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={BaseStyles.scrollContainer}>
        <Text style={BaseStyles.title}>Contacto y Soporte</Text>

        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Teléfonos</Text>
          <Text style={BaseStyles.text}>Servicios Escolares: 287 875 1000 Ext. 2001</Text>
          <Text style={BaseStyles.text}>Desarrollo Académico: 287 875 1000 Ext. 2002</Text>
          <Text style={BaseStyles.text}>Recursos Financieros: 287 875 1000 Ext. 2003</Text>
        </View>

        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Horario de atención</Text>
          <Text style={BaseStyles.highlightText}>Lunes a viernes de 9:00 a 17:00 hrs.</Text>
        </View>

        <TouchableOpacity style={styles.whatsappBtn} onPress={openWhatsApp}>
          <Text style={styles.btnText}>Enviar mensaje por WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.emailBtn} onPress={openEmail}>
          <Text style={styles.btnText}>Enviar correo</Text>
        </TouchableOpacity>

        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  whatsappBtn: {
    backgroundColor: '#25D366',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  emailBtn: {
    backgroundColor: '#0072C6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
