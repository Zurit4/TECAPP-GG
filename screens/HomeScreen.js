import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { allOptions } from '../constants/options';
import IttuxLogo from '../components/img/ittuxtr.png';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      {/* Encabezado con logo */}
      <View style={styles.header}>
        <Image
          source={IttuxLogo}
          style={styles.headerLogo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>INSTITUTO TECNOLÓGICO DE TUXTEPEC</Text>
        <View style={styles.headerDivider} />
      </View>

      {/* Botones */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          {allOptions.map((option, index) => {
            const scaleAnim = useRef(new Animated.Value(1)).current;

            const handlePressIn = () => {
              Animated.spring(scaleAnim, {
                toValue: 0.95,
                useNativeDriver: true,
              }).start();
            };

            const handlePressOut = () => {
              Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
              }).start();
            };

            const handlePress = () => {
              navigation.navigate(option.screenName);
            };

            const Touchable =
              Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

            return (
              <View key={index} style={styles.cardWrapper}>
                <Touchable
                  onPress={handlePress}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  useForeground={true}
                >
                  <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
                    <Image
                      source={option.image}
                      style={styles.cardImage}
                      resizeMode="cover"
                    />
                  </Animated.View>
                </Touchable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#2C5F8B',
  },
  header: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerLogo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C5F8B',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headerDivider: {
    height: 4,
    width: '30%',
    backgroundColor: '#3A7D44',
    marginTop: 15,
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardWrapper: {
    width: '45%',
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
  },
  card: {
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 9,
    borderColor: '#3A7D44',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
});