import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
      flexGrow: 1,
      flexDirection: 'column',
      alignItems:'center'
    },
    item: {
      margin: 10,
      backgroundColor: '#00ffff',
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    text: {
      color: '#000000',
      fontSize: 25,
      fontStyle:'italic',
      margin: 10,
      fontFamily: 'Roboto-MediumItalic'
    },
    button: {
      width: 200,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 15
    },
    input: {
      borderWidth: 2,
      width: 300,
      borderColor: '#555',
      borderRadius: 10,
      paddingLeft: 10,
      textAlign:'center',
      fontSize: 20,
      margin: 10
    },
    centered_view: {
      backgroundColor: '#00000099',
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    warning_modal: {
      width:300,
      height: 400,
      backgroundColor: '#fff',
      alignItems:"center",
      borderRadius: 20
    },
    warning_title: {
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      height: 50,
      justifyContent:'center',
      alignItems:'center',
      width: '100%',
      backgroundColor:'#ff0',
    },
    warning_body: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    warning_button: {
      backgroundColor: '#00ffff',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
    },
    image: {
      width: 100,
      height: 100,
      margin: 10
    }
  });