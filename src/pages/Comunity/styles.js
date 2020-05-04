import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: 'bold'
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  postCard: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    maxHeight: 120,
    borderRadius: 14,
    flexDirection: 'row'
  },
  avaliation: {
    height: '100%',
    width: '15%',
    paddingVertical: 4,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: "center"
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 5
  },
  contentTitle: {
    color: "#333",
    fontSize: 20,
    fontWeight: 'bold'
  },
  write: {
    marginTop: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    height: 50,
  },
});