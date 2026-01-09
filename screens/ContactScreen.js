import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Linking,
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
    modalRef.current.open(
      'https://wa.me/522871104437?text=Hola,%20tengo%20una%20duda%20sobre%20el%20proceso%20de%20admisión.'
    );
  };

  const openEmail = () => {
    Linking.openURL('mailto:fichas_desarrollo@tuxtepec.tecnm.mx');
  };

  return (
    <Animated.View style={[BaseStyles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={BaseStyles.scrollContainer}>

        {/* TÍTULO */}
        <Text style={BaseStyles.title}>Contacto y Soporte</Text>

        {/* INTRO */}
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>¿Necesitas ayuda?</Text>
          <Text style={styles.introText}>
            Si tienes dudas sobre el proceso de admisión, inscripción o
            documentación, comunícate con nosotros por los siguientes medios
            oficiales.
          </Text>
        </View>

        {/* HORARIO */}
        <View style={BaseStyles.highlightBox}>
          <Text style={BaseStyles.highlightTitle}>Horario de atención</Text>
          <Text style={BaseStyles.highlightText}>
            Lunes a viernes de 9:00 a 17:00 hrs.
          </Text>
        </View>

        {/* DEPARTAMENTOS */}
        <View style={BaseStyles.card}>
          <Text style={BaseStyles.sectionTitle}>Departamentos</Text>

          <View style={styles.deptItem}>
            <Text style={styles.deptName}>Servicios Escolares</Text>
            <Text style={styles.deptInfo}>287 875 1000 Ext. 2001</Text>
          </View>

          <View style={styles.deptItem}>
            <Text style={styles.deptName}>Desarrollo Académico</Text>
            <Text style={styles.deptInfo}>287 875 1000 Ext. 2002</Text>
          </View>

          <View style={styles.deptItem}>
            <Text style={styles.deptName}>Recursos Financieros</Text>
            <Text style={styles.deptInfo}>287 875 1000 Ext. 2003</Text>
          </View>
        </View>

        {/* BOTONES DE CONTACTO */}
        <View style={styles.actionsBox}>
          <TouchableOpacity style={styles.whatsappBtn} onPress={openWhatsApp}>
            <Text style={styles.actionText}>Enviar mensaje por WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.emailBtn} onPress={openEmail}>
            <Text style={styles.actionText}>Enviar correo electrónico</Text>
          </TouchableOpacity>
        </View>

        {/* AVISO */}
        <View style={styles.noteBox}>
          <Text style={styles.noteText}>
            Utiliza estos medios únicamente para dudas relacionadas con el
            proceso de admisión y trámites oficiales.
          </Text>
        </View>

        <ExternalLinkModal ref={modalRef} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  introCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    marginBottom: 20,
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
    lineHeight: 22,
  },

  deptItem: {
    backgroundColor: '#F4F8FB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2C5F8B',
  },
  deptName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#2C5F8B',
  },
  deptInfo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },

  actionsBox: {
    marginTop: 10,
    marginBottom: 20,
  },
  whatsappBtn: {
    backgroundColor: '#25D366',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  emailBtn: {
    backgroundColor: '#0072C6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#FFF',
  },

  noteBox: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#F0C36D',
  },
  noteText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
