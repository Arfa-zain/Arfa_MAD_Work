import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
  fontSize: 26,
  fontFamily: 'Inter_700Bold',   
  fontWeight: 'bold',
  color: '#222',
  marginBottom: 20,
  textAlign: 'center',
},
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    width: '80%',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});