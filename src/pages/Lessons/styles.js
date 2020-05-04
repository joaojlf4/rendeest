import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#333"
  },
  paragraph: {
    color: "#333",
    fontSize: 16,
    marginTop: 15,
  },
  bold: {
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    maxHeight: 200,
    marginTop: 15,
    alignSelf: 'center'
  },
  subtitle: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20
  },
  questionsContainer: {
    
  },
  questionContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: "#1fdc8b",
    borderTopWidth: 2,
    marginTop: 10
  },
  questionEnum: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18
  },
  alternativeContainer: {
    padding: 11,
    borderColor: "#CCC",
    borderWidth: 2,
    borderRadius: 14,
    marginTop: 8
  },
  alternativeText: {
    fontSize: 16,
    color: "#FFF",
  },
});