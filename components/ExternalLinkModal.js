// components/ExternalLinkModal.js
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const ExternalLinkModal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');

  useImperativeHandle(ref, () => ({
    open: (link) => {
      setUrl(link);
      setVisible(true);
    },
    close: () => setVisible(false),
  }));

  const hostOrUrl = (u) => {
    try {
      const parsed = new URL(u);
      return parsed.hostname + (parsed.pathname === '/' ? '' : parsed.pathname);
    } catch {
      return u;
    }
  };

  const handleContinue = async () => {
    setVisible(false);
    // abrir enlace
    Linking.openURL(url).catch(() => {
      // opcional: manejo de error
    });
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Image source={require('./img/ittuxtr.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Vas a salir de la aplicación</Text>
          <Text style={styles.message}>Estás a punto de visitar:</Text>
          <Text style={styles.urlText}>{hostOrUrl(url)}</Text>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.btnCancel} onPress={() => setVisible(false)}>
              <Text style={styles.btnCancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContinue} onPress={handleContinue}>
              <Text style={styles.btnContinueText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default ExternalLinkModal;

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', justifyContent: 'center', alignItems: 'center' },
  modal: { width: '86%', backgroundColor: '#fff', borderRadius: 12, padding: 18, alignItems: 'center', elevation: 8 },
  logo: { width: 86, height: 86, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: '700', color: '#2C5F8B', marginBottom: 6, textAlign: 'center' },
  message: { color: '#444', marginBottom: 6, textAlign: 'center' },
  urlText: { color: '#3A7D44', fontWeight: '600', marginBottom: 14, textAlign: 'center' },
  buttonsRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-between' },
  btnCancel: { flex: 1, padding: 12, borderRadius: 8, marginRight: 8, backgroundColor: '#E6E6E6', alignItems: 'center' },
  btnCancelText: { color: '#333', fontWeight: '600' },
  btnContinue: { flex: 1, padding: 12, borderRadius: 8, marginLeft: 8, backgroundColor: '#2C5F8B', alignItems: 'center' },
  btnContinueText: { color: '#fff', fontWeight: '700' },
});
