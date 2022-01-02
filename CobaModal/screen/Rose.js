import React from "react";
import {Image, Text, StyleSheet, Button, View, ScrollView} from 'react-native'



const Details = () => {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        <Image style={styles.profileImage} source={{uri: 'https://statics.indozone.id/content/2021/03/13/AqsbmP1/mv-debut-solo-rose-blackpink-on-the-ground-jadi-trending-no-162_700.jpg'}}/>
        <Text style={styles.name}>Roseane Park</Text>
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
    paddingHorizontal: 55,
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