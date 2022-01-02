import React from "react";
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Login = ({ navigation }) => {
    return (
        <View style={styles.body}>
           <View style={styles.Satu}>
               <Image style={{height:20,width:40}} source={require('../image/Arrow.png')}></Image>
           </View>
           <View style={styles.Dua}>
               <Text style={{fontSize:36,fontWeight:'bold',color:'#F8774A'}}>
                   Login
               </Text>
           </View>
           <View style={styles.pembuka}>
           <Text style={{fontSize:15,fontWeight:'normal',color:'#000000'}}>
                   Halaman utama agar dapat login kedalam aplikasi
               </Text>
           </View>
           <View style={styles.Tiga}>
               <TextInput style={styles.inputBox} 
               placeholder='Masukkan Username' 
               underlineColorAndroid='rgba(0,0,0,0)' 
               selectionColor="#fff"
               placeholderTextColor="#ffffff">

               </TextInput>
               <TextInput style={styles.inputBox} 
               placeholder='Masukkan Password' 
               underlineColorAndroid='rgba(0,0,0,0)' 
               secureTextEntry={true} 
               placeholderTextColor="#ffffff">
                   
               </TextInput>
           </View>
           <View style={styles.Empat}>
               <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("Home")}
               >
                   <Text style={styles.buttonText}>
                       Get Started
                   </Text>
                   
               </TouchableOpacity>
           </View>
           <View style={styles.Lima}>
               <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("Home")}
               >
                   <Text style={styles.buttonText}>
                       Belum punya Akun?
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
    Satu: {
        justifyContent: 'center',
        height: 50,
        marginTop: 25,
        marginLeft: 20,
        backgroundColor: '#FFFFFF'
    },
    Dua: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop: 0,
        backgroundColor: '#FFFFFF'
    },
    pembuka: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop:-20,
        backgroundColor: '#FFFFFF'
    },
    Tiga: {
        alignItems: 'center',
        height: 250,
        marginTop: 80,
        backgroundColor: '#FFFFFF'

    },
    Empat: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginTop:-100,
        backgroundColor:"#FFFFFF"
    },
    Lima: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop:-90,
        backgroundColor:"#FFFFFF"
    },
    inputBox:{
        width:400,
        backgroundColor:'#F8774A',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#000000',
        marginVertical: 5
    },
    button: {
        width:500,
        backgroundColor:'#F8774A',
        borderRadius: 0,
        marginVertical: 0,
        paddingVertical: 100
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    inputBox:{
        width:300,
        backgroundColor:'#F8774A',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#000000',
        marginVertical: 5
    },
    button: {
        width:200,
        backgroundColor:'#FFFFFF',
        marginTop: 10,
        borderRadius: 500,
        marginVertical: 20,
        paddingVertical: 10
    },
    buttonText: {
        fontSize:13,
        fontWeight:'500',
        color:'#000000',
        textAlign:'center'
    }

    
})
export default Login
