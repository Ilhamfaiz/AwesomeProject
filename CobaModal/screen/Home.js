import React from "react";
import { View, ScrollView,  Image, StyleSheet, Text, TouchableOpacity } from 'react-native';



const Home = ({navigation}) => {
    return (
     <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Image style={styles.profileImage} source={{uri: 'https://cdn06.pramborsfm.com/storage/app/media/tr:w-700,f-jpg/Prambors/Editorial/BLACKPINK-20201129064920.jpg'}}/>
            <Text style={styles.name}>BLACKPINK</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]} onPress = {()=> navigation.navigate ('Jisoo')}>
              <Image style={styles.icon} source={{uri: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=44SyZaXz&v=1591589877'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress = {()=> navigation.navigate ('Lisa')}>
              <Image style={styles.icon} source={{uri: 'https://cdn.popbela.com/content-images/post/20211005/a9faa77f830288b79ad8b095f95ba5f3_750x500.jpg'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress = {()=> navigation.navigate ('Jennie')}>
              <Image style={styles.icon} source={{uri: 'https://awsimages.detik.net.id/visual/2021/01/22/jenniiie-blackpink-dok-jennierubyjane.jpeg?w=650'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress = {()=> navigation.navigate ('Rose')}>
              <Image style={styles.icon} source={{uri: 'https://statics.indozone.id/content/2021/03/13/AqsbmP1/mv-debut-solo-rose-blackpink-on-the-ground-jadi-trending-no-162_700.jpg'}}/>
            </TouchableOpacity>
            
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
      borderRadius: 150 / 20,
      width:375,
      height:375,
      marginBottom:20,
    },
    name:{
      paddingHorizontal: 85,
      borderRadius: 150 / 20,
      paddingVertical: 6,
      fontSize:35,
      marginBottom:10,
      fontWeight: 'bold',
      backgroundColor: '#000000',
      color: '#f2138c',
    },
    buttonContainer:{
      flexDirection:'row',
      marginTop:20,
    },
    button: {
      flex: 1,
      width:70,
      height:75,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      borderRadius:30,
      margin:10,
      shadowColor: 'black',
      shadowOpacity: .30,
      shadowOffset: {
        height:3,
        width:-3
      },
      elevation:4,
    },
    icon: {
      borderRadius: 150 / 20,
      width:77,
      height:70,
    },
  });

export default Home;