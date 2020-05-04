import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  rankTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  rankDescription: {
    textAlign: 'center',
    marginTop: 7,
    color: "#666"
  },
  ranking: {
    borderWidth: 2,
    borderColor: "#CCC",
    borderRadius: 16,
    marginTop: 16
  },
  userCard: {
    height: 60,
    borderBottomWidth: 3,
    borderColor: "#CCC",
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  userXp: {
    color: "#666",
    textAlign: "right"
  },
  pictureAndName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});