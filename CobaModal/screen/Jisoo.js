import React from "react";
import {Image, Text, StyleSheet, View, ScrollView} from 'react-native'




const Details = () => {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        <Image style={styles.profileImage} source={{uri: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=44SyZaXz&v=1591589877'}}/>
        <Text style={styles.name}>Park Jisoo</Text>
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
    height:350,
    marginBottom:20,
    borderRadius: 150 / 20,
  },
  name:{
    paddingHorizontal: 85,
    paddingVertical: 6,
    fontSize:35,
    borderRadius: 150 / 20,
    marginBottom:10,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    color: '#f2138c',
  },
  komen:{
    fontSize:15,
    marginBottom:10,
  },
  input: {
    paddingVertical: 1,
    paddingHorizontal: 120,
    height: 40,
    margin: 12,
    marginBottom:1,
    borderWidth: 1,
    padding: 20,
  },
});
  
export default Details;