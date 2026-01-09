import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import FullProcessScreen from './screens/FullProcessScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import EducationalOfferScreen from './screens/EducationalOfferScreen';
import SIEAccessScreen from './screens/SIEAccessScreen';
import PaymentProcessScreen from './screens/PaymentProcessScreen';
import AdmissionExamScreen from './screens/AdmissionExamScreen';
import HomogenizationScreen from './screens/HomogenizationScreen';
import EnrollmentScreen from './screens/EnrollmentScreen';
import ContactScreen from './screens/ContactScreen';
import CareerGuideScreen from './screens/CareerGuideScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FullProcess" component={FullProcessScreen} options={{ title: 'Proceso Completo' }} />
        <Stack.Screen name="Announcement" component={AnnouncementScreen} options={{ title: 'Convocatoria' }} />
        <Stack.Screen name="CareerGuide" component={CareerGuideScreen} options={{ title: 'Guía de Carreras' }} />
        <Stack.Screen name="EducationalOffer" component={EducationalOfferScreen} options={{ title: 'Oferta Educativa' }} />
        <Stack.Screen name="SIEAccess" component={SIEAccessScreen} options={{ title: 'Acceso al SIE' }} />
        <Stack.Screen name="PaymentProcess" component={PaymentProcessScreen} options={{ title: 'Pago de Ficha' }} />
        <Stack.Screen name="AdmissionExam" component={AdmissionExamScreen} options={{ title: 'Examen de Admisión' }} />
        <Stack.Screen name="Homogenization" component={HomogenizationScreen} options={{ title: 'Homogeneización' }} />
        <Stack.Screen name="Enrollment" component={EnrollmentScreen} options={{ title: 'Inscripción' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contacto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
