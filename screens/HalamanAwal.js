import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const HalamanAwal = ({ navigation }) => {
    return (
        <View style={styles.body}>
           <View style={styles.Satu}>
               <Image style={{height:417,width:418}} source={require('../image/Logo.png')}></Image>
           
           </View>
           <View style={styles.Kedua}>
           <Text style={{fontSize:20,fontWeight:'bold',color:'#000000'}}>
           Welcome !
           </Text>
           </View>
           <View style={styles.pencetan}>
               <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("Login")}
               >
                   <Text style={styles.buttonText}>
                       Get Started
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
        height: 100,
        marginTop: 120,
        marginLeft: 0,
        backgroundColor: '#FFFFFF'
    },
    Kedua: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop:100,
        backgroundColor: '#FFFFFF'
    },


    button: {
        width:200,
        backgroundColor:'#F8774A',
        borderRadius: 500,
        paddingVertical: 20,
        marginLeft: 110,
        marginTop:150,
    },
    buttonText: {
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }

    
})
export default HalamanAwal
