import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
} from 'react-native';


export default function CareerCard({ title, description, image, details }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpand} activeOpacity={0.9}>
      <View style={[styles.card, expanded && styles.cardExpanded]}>
        <Image source={image} style={styles.image} />

        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.toggleText}>
            {expanded ? 'Ver menos ▲' : 'Ver más ▼'}
          </Text>
        </View>

        <Text style={styles.description}>{description}</Text>

        {expanded && (
          <View style={styles.detailsBox}>
            <Text style={styles.detail}>
              <Text style={styles.detailLabel}>Carrera: </Text>
              {title}
            </Text>
            <Text style={styles.detail}>
              <Text style={styles.detailLabel}>Modalidad: </Text>
              {details.modalidad}
            </Text>
            <Text style={styles.detail}>
              <Text style={styles.detailLabel}>Turno: </Text>
              {details.turno}
            </Text>
            <Text style={styles.detail}>
              <Text style={styles.detailLabel}>Periodicidad: </Text>
              {details.periodicidad}
            </Text>
            <Text style={styles.detail}>
              <Text style={styles.detailLabel}>Sede: </Text>
              {details.sede}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 18,
    marginHorizontal: 16, 
    borderWidth: 3,
    borderColor: '#1B8E36',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardExpanded: {
    borderColor: '#2C5F8B', // Azul al expandirse
    elevation: 6,
    shadowOpacity: 0.15,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#2C5F8B',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2C5F8B',
    flex: 1,
    marginRight: 10,
  },
  toggleText: {
    color: '#1B8E36',
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginTop: 6,
  },
  detailsBox: {
    marginTop: 12,
    backgroundColor: '#E9F6EC', // verde muy suave
    borderRadius: 10,
    padding: 12,
    borderWidth: 3,
    borderColor: '#1B8E36',
    marginHorizontal: 5, 
  },
  detail: {
    fontSize: 13.5,
    marginBottom: 4,
    color: '#333',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#2C5F8B',
  },
});
