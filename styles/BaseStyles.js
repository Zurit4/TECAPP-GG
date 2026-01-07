// 📁 styles/BaseStyles.js
import { StyleSheet } from 'react-native';

export const BaseStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F8FB' },
  scrollContainer: { padding: 20, paddingBottom: 60 },

  title: {
    fontSize: 26,
    color: '#2C5F8B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2C5F8B',
    padding: 18,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardGreen: {
    borderColor: '#3A7D44',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C5F8B',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginBottom: 6,
  },
  bulletBox: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 },
  bullet: { fontSize: 18, color: '#2C5F8B', marginRight: 8 },
  highlightBox: {
    backgroundColor: '#FFF3C4',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FFC107',
    marginBottom: 20,
  },
  highlightTitle: { fontSize: 18, fontWeight: '700', color: '#856404', marginBottom: 6 },
  highlightText: { fontSize: 15, color: '#333' },
  linkButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },

  curpCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#3A7D44',
    elevation: 4,
  },
  curpTitle: { fontSize: 18, fontWeight: '700', color: '#3A7D44' },
  curpDesc: { fontSize: 15, color: '#333', marginVertical: 8 },
  curpBtn: {
    backgroundColor: '#3A7D44',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  curpBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});
