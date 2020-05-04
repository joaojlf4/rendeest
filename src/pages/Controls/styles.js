import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  }, 
  expenses: {
    marginBottom: 0,
    height: '65%',
    backgroundColor: '#e5e5e5',
    width: '100%',
  },
  overview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  quantity: {
    color: '#f0f0f0',
    fontSize: 32, 
    fontWeight: 'bold',
    marginTop: 15

  },
  position: {
    fontSize: 18,
    marginTop: 7,
    textAlign: 'center',
    maxWidth: '80%'
  },
  expense: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 16,
    marginVertical: 12,
    marginHorizontal: 12,
    backgroundColor: '#FFF',
    height: 80,
    width: 337,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  priceAndTitle: {
    marginLeft: 12
  },
  plusButton: {
    position: 'absolute',
    right: 20,
    top: 40
  },
  plusImage: {
    height: 28,
    width: 28
  },
  date: { 
    color: '#48DB46',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modal: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: '90%',
    height: '90%',
    alignSelf: "center",
    backgroundColor: '#FFF',
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15
  },
  modalInput: {
    borderWidth: 3,
    borderRadius: 14,
    padding: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    flex: 0.8
  },
  modalP: {
    color: "#666"
  },
  inputView: {
    flexDirection: 'row',
    width: '100%'
  },
  buttonContainer: {
    flex: 0.2
  },
  button: {
    marginLeft: 4,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#9000ff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 'bold'
  },
});