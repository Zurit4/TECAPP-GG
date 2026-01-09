import { StyleSheet } from 'react-native';
import { Typography } from './Typography';

export const BaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FB',
  },

  scrollContainer: {
    padding: 20,
    paddingBottom: 60,
  },

  /* ───────────── TITULOS ───────────── */

  title: {
    fontSize: 26,
    color: '#2C5F8B',
    textAlign: 'center',
    marginBottom: 20,
    ...Typography.title,
  },

  sectionTitle: {
    fontSize: 18,
    color: '#2C5F8B',
    marginBottom: 10,
    ...Typography.sectionTitle,
  },

  /* ───────────── TEXTO ───────────── */

  text: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginBottom: 6,
    ...Typography.body,
  },

  bulletBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },

  bullet: {
    fontSize: 18,
    color: '#2C5F8B',
    marginRight: 8,
    ...Typography.sectionTitle,
  },

  /* ───────────── TARJETAS ───────────── */

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

  /* ───────────── HIGHLIGHT / AVISO ───────────── */

  highlightBox: {
    backgroundColor: '#FFF3C4',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FFC107',
    marginBottom: 20,
  },

  highlightTitle: {
    fontSize: 18,
    color: '#856404',
    marginBottom: 6,
    ...Typography.sectionTitle,
  },

  highlightText: {
    fontSize: 15,
    color: '#333',
    ...Typography.body,
  },

  /* ───────────── BOTONES ───────────── */

  linkButton: {
    backgroundColor: '#2C5F8B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  linkButtonText: {
    color: '#FFF',
    fontSize: 16,
    ...Typography.button,
  },

  /* ───────────── CURP ───────────── */

  curpCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#3A7D44',
    elevation: 4,
    marginBottom: 20,
  },

  curpTitle: {
    fontSize: 18,
    color: '#3A7D44',
    marginBottom: 4,
    ...Typography.sectionTitle,
  },

  curpDesc: {
    fontSize: 15,
    color: '#333',
    marginVertical: 8,
    ...Typography.body,
  },

  curpBtn: {
    backgroundColor: '#3A7D44',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  curpBtnText: {
    color: '#FFF',
    fontSize: 16,
    ...Typography.button,
  },
});
