import React from "react";
import { StyleSheet } from "react-native";

const externalStyle = StyleSheet.create({
    headerBar:{
        height:60,
        width:'100%',
        backgroundColor:'#ff8c00',
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
    },
    forBackImage:{
        width:80,
        height:70,
    },
    backImage:{
        width:20,
        height:20,
        marginTop:15,
        marginLeft:20,
    },
    headerText:{
        width:200,
        height:70,
        marginLeft:80,
        marginTop:-70,
        // backgroundColor:"pink",
    },
    Headertitle:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        // backgroundColor:"pink",
        marginTop:15,
    },

    // services screen...........
    services:{
        width:'90%', 
        height:250, 
        backgroundColor:'#87ceeb', 
        marginTop:20, 
        marginHorizontal:20,
    },
    image:{
        width:45, 
        height:45, 
        alignContent:'center', 
        alignItems:'center',
        justifyContent: 'center', 
        alignSelf: 'center', 
        marginTop:10,
    },
    heading:{
        fontSize:20, 
        fontWeight:'bold', 
        textAlign:'center', 
        marginTop:10
    },
    text:{
        marginHorizontal:20, 
        fontSize:12, 
        marginTop:10
    },
    readmore:{
        marginTop:10, 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:16
    },
    // profile screen styling.............

    name:{
        marginTop:20, 
        fontSize:18, 
        marginHorizontal:20,
        fontWeight:'bold',
    }, 
    fullName:{
        marginTop:20, 
        fontSize:16, 
        marginHorizontal:70,
    }
})


export default externalStyle