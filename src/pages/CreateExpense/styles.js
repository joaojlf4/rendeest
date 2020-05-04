import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },  
  input: {
    borderWidth: 3,
    borderRadius: 14,
    padding: 8,
    paddingHorizontal: 15,
    color: '#333'
  },
  label: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    alignSelf: "center",
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#8842E8',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 14
  }
});