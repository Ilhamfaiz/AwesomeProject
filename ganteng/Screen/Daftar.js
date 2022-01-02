import React from 'react'
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'

const Daftar = () => {
    return (
        <View style={styles.body}>
           <View style={styles.Satu}>
               <Image style={{height:30,width:20}} source={require('../image/Kembali.png')}></Image>
           </View>
           <View style={styles.Dua}>
               <Text style={{fontSize:36,fontWeight:'bold',color:'#89C03B'}}>
                   Daftar
               </Text>
               <Text style={{fontSize:15,fontWeight:'normal',color:'#000000'}}>
                   Silahkan daftar akun pada di bawah ini
               </Text>
           </View>
           <View style={styles.Tiga}>
               <TextInput style={styles.inputBox} 
               placeholder='Masukkan Alamat Email' 
               underlineColorAndroid='rgba(0,0,0,0)' 
               placeholderTextColor = "#ffffff" 
               selectionColor="#fff" 
               keyboardType="email-address" 
               onSubmitEditing={()=> this.password.focus()}>

               </TextInput>
               <TextInput style={styles.inputBox} 
               placeholder='Masukkan Nama pengguna' 
               underlineColorAndroid='rgba(0,0,0,0)' 
               selectionColor="#fff"
               placeholderTextColor="#ffffff">

               </TextInput>
               <TextInput style={styles.inputBox} 
               placeholder='Masukkan Kata Sandi' 
               underlineColorAndroid='rgba(0,0,0,0)' 
               secureTextEntry={true} 
               placeholderTextColor="#ffffff">
                   
               </TextInput>

           </View>
           <View style={styles.Empat}>
               <TouchableOpacity style={styles.button}>
                   <Text style={styles.buttonText}>
                       Buat Akun
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
    Tiga: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 382,
        marginTop: 0,
        backgroundColor: '#FFFFFF'

    },
    Empat: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        marginTop:-50,
        backgroundColor:"#FFFFFF"
    },
    inputBox:{
        width:300,
        backgroundColor:'#89C03B',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#000000',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#3F9624',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }

    
})
export default Daftar



