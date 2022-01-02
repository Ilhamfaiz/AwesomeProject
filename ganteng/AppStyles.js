import {StyleSheet} from 'react-native'
export default StyleSheet.create({
welcome: {
    fontWeight: 'normal', 
    fontSize: 30, 
    paddingBottom: 20, 
    color: "white"
},
text_big: {
    fontWeight: 'normal', 
    fontSize: 22, 
    paddingBottom: 20, 
    color: "black"
 },
 container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "black"
 },
 button1: {
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingTop: 20
  },
  button2: {
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingTop: 20
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    flex:1,
    marginHorizontal:-20,
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 30
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
 }
);