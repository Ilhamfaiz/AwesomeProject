import React, { Component, version } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const HalamanAwal=()=>{
    return(
        <View style={styles.body}>
          <View style={styles.Awal}>
            <Text style={{fontSize:20,color:'#3F9624',fontWeight:'bold'}}>
              Pengatur Waktu Aktivitas Sehat
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#000000'}}>
              Ingatkan Untuk Hidup Lebih Sehat
            </Text>
          </View>
          <View style={styles.tengah}>
            <Image style={{height:415,width:520}} source={require('../image/Logo.png')}></Image>
          </View>
          <View style={styles.akhir}>
            <TouchableOpacity style={[styles.box,{backgroundColor:'#89C03B'}]}>
              <Text style={{color:'#FFFFFF',fontWeight:'normal'}}>
                Daftar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box,{backgroundColor:'#3F9624'}]}>
              <Text style={{color:'#FFFFFF',fontWeight:'normal'}}>
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
    )
}
const styles= StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#FFFFFF"
  },
  Awal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    marginTop: 20,
    backgroundColor: '#'
  },
  tengah: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 300,
    backgroundColor:'#FFFFFF'
  },
  akhir: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    height:200,
    backgroundColor:'#'
  },
  box:{
    height:40,
    width:270,
    borderRadius:30,
    margin:5,
    justifyContent:'center',
    alignItems:'center'
  }


})
export default HalamanAwal