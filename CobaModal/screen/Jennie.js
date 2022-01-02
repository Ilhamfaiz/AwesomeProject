import React from "react";
import {Image, Text, StyleSheet, View, ScrollView} from 'react-native'



const Details = () => {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        <Image style={styles.profileImage} source={{uri: 'https://awsimages.detik.net.id/visual/2021/01/22/jenniiie-blackpink-dok-jennierubyjane.jpeg?w=650'}}/>
        <Text style={styles.name}>Kim Jennie</Text>
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
    paddingHorizontal: 78,
    paddingVertical: 6,
    fontSize:35,
    marginBottom:10,
    borderRadius: 150 / 20,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    color: '#f2138c',
  }
});
  
export default Details;