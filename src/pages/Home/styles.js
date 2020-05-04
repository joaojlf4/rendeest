import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    backgroundColor: '#fff',
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
    flex: 0.7
  },
  modalP: {
    color: "#666"
  },
  inputView: {
    flexDirection: 'row',
    width: '100%'
  },
  buttonContainer: {
    flex: 0.2,
    height: 50,
    width: 50,
    alignItems: 'center'
  },
  button: {
    marginLeft: 15,
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
  subjectContainer: {
    height: 200,
    paddingHorizontal: 6,
    borderRadius: 14,
    justifyContent: 'flex-start',
  },
  subject: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative', 
    top: -180,
    paddingVertical: 20,
    borderRadius: 16,
    paddingHorizontal: 15
  },
  subjectTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#FFF",
    textAlign: 'center',
    
  },
  subjectDescriptionContainer: { 
    height: 160,
    backgroundColor: 'transparent', 
    width: "100%",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#CCC',
  },
  subjectDescription: {
    textAlign: 'center',
    color: "#666",
    
  },
  
});
