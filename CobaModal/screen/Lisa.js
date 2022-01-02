import React from "react";
import {Image, Text, StyleSheet, Button, View, ScrollView} from 'react-native'



const Details = () => {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        <Image style={styles.profileImage} source={{uri: 'https://cdn.popbela.com/content-images/post/20211005/a9faa77f830288b79ad8b095f95ba5f3_750x500.jpg'}}/>
        <Text style={styles.name}>Lalisa Manoban</Text>
      </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ff8ac9'
  },
  box: {
    marginTop:10,
    alignItems: 'center',
    paddingTop:10
  },
  profileImage:{
    width:350,
    borderRadius: 150 / 20,
    height:350,
    marginBottom:20,
  },
  name:{
    textAlign: 'center', 
    paddingHorizontal: 40,
    borderRadius: 150 / 20,
    paddingVertical: 6,
    fontSize:35,
    marginBottom:10,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    color: '#f2138c',
  }
});
  
export default Details;