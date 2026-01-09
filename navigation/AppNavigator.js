import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de todas las pantallas
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import FullProcessScreen from '../screens/FullProcessScreen';
import AnnouncementScreen from '../screens/AnnouncementScreen';
import EducationalOfferScreen from '../screens/EducationalOfferScreen';
import SIEAccessScreen from '../screens/SIEAccessScreen';
import PaymentProcessScreen from '../screens/PaymentProcessScreen';
import AdmissionExamScreen from '../screens/AdmissionExamScreen';
import HomogenizationScreen from '../screens/HomogenizationScreen';
import EnrollmentScreen from '../screens/EnrollmentScreen';
import ContactScreen from '../screens/ContactScreen';
import CareerGuideScreen from '../screens/CareerGuideScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Bienvenida */}
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />

      {/* Menú principal */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />

      {/* Secciones */}
      <Stack.Screen 
        name="FullProcess" 
        component={FullProcessScreen} 
        options={{ title: 'Proceso Completo' }} 
      />
      <Stack.Screen 
        name="Announcement" 
        component={AnnouncementScreen} 
        options={{ title: 'Convocatoria' }} 
      />
      <Stack.Screen 
        name="CareerGuide" 
        component={CareerGuideScreen} 
        options={{ title: 'Guía de Carreras' }} 
      />
      <Stack.Screen 
        name="EducationalOffer" 
        component={EducationalOfferScreen} 
        options={{ title: 'Oferta Educativa' }} 
      />
      <Stack.Screen 
        name="SIEAccess" 
        component={SIEAccessScreen} 
        options={{ title: 'Acceso al SIE' }} 
      />
      <Stack.Screen 
        name="PaymentProcess" 
        component={PaymentProcessScreen} 
        options={{ title: 'Pago de Ficha' }} 
      />
      <Stack.Screen 
        name="AdmissionExam" 
        component={AdmissionExamScreen} 
        options={{ title: 'Examen de Admisión' }} 
      />
      <Stack.Screen 
        name="Homogenization" 
        component={HomogenizationScreen} 
        options={{ title: 'Homogeneización' }} 
      />
      <Stack.Screen 
        name="Enrollment" 
        component={EnrollmentScreen} 
        options={{ title: 'Inscripción' }} 
      />
      <Stack.Screen 
        name="Contact" 
        component={ContactScreen} 
        options={{ title: 'Contacto' }} 
      />
    </Stack.Navigator>
  );
}
