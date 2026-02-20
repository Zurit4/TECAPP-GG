import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import ExternalLinkModal from '../components/ExternalLinkModal';



import IttuxLogo from '../components/img/ittuxtr.png';

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const modalRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const openMaps = () => {
    modalRef.current?.open(
          'https://www.google.com/maps/search/?api=1&query=TecNM+Campus+Tuxtepec',
    );
  };
    


  return (
    <>
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}> 
      <Image 
        source={IttuxLogo}   
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Bienvenido a TECNM Tuxtepec</Text>
      <Text style={styles.subtitle}>Proceso de Admisión 2026</Text>
      <TouchableOpacity 
        style={styles.greenButton}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>
    {/* Footer con dirección y enlace a Google Maps */}
    <View style={styles.footer}>
      <TouchableOpacity onPress={openMaps} activeOpacity={0.7}>
        <Text style={styles.address}>Calzada Dr. Víctor Bravo Ahuja Num. 561, Col. Predio el Paraíso, C.P. 68350, San Juan Bautista Tuxtepec,Oaxaca
        </Text>
      </TouchableOpacity>
    </View>
    </Animated.View>

    <ExternalLinkModal ref={modalRef} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#1a36a9ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#1a36a9ff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 35,
    lineHeight: 20,
  },
  greenButton: {
    backgroundColor: '#3A7D44',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    minWidth: 150,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#1a36a9ff',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    paddingHorizontal: 25,
  },
  address: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#2C5F8B',
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 16,
  },
});
