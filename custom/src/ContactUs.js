import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Linking, StatusBar, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import externalStyle from '../../coustomStyle/src/styleSheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { ScrollView } from 'react-native-gesture-handler';

function ContactUs({ navigation }) {

  // const {name, setName} = useState('')
  // const {email, setEmail} = useState('')
  // const {message, setMessage} = useState('')

  // const handleEmail = (e)=>{
  //   setEmail(e.target.value);
  // }
    return (
      <View>
      <StatusBar hidden={true} />
     {/* header bar start here.............. */}
      <View style={externalStyle.headerBar}>
                
            <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Contact Us</Text>
      </View>
      {/* header bar end here............... */}
      <ScrollView>
      <Image
       style={Styles.logo}
       source ={{uri:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hibvigazow9rhyoj1d52"}}
      />

     <Text style={Styles.username}>Name</Text>
      <TextInput 
      placeholder="Enter your name"  
      style={Styles.input}
      autoCapitalize="none"
      // value={name}
      // onChangeText={(text)=>setName(text)}
      >
      </TextInput>

      <Text style={Styles.username}>Email Address</Text>
      <TextInput 
      placeholder="Enter your email" 
      style={Styles.input}
      autoCapitalize="none"
      // value={email}
      // onChange={handleEmail}
      // onChangeText={(text)=>setEmail(text)}
      >
      </TextInput>

      <Text style={Styles.username}>Message</Text>
      <TextInput 
      placeholder="Enter your message" 
      style={Styles.input} 
      autoCapitalize="none"
      // value={message}
      // onChangeText={(text)=>setMessage(text)}
       >
      </TextInput>

      <TouchableOpacity style={Styles.button}
        // onPress={()=>{submit()}}
        >
        <Text style={Styles.signup}>Submit</Text>
      </TouchableOpacity>

      <View>
        <View style={{backgroundColor:'gray'}} >
        <Text style={{ color:'white', fontSize:25, textAlign:'center', fontWeight:'bold'}}>Our Offices</Text>
        </View>
        <View>
          <Image 
          style={{width:300, height:250, marginTop:30, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
          source={require('../../assets/src/ouroffice_Noida.png')}  />
          <Text style={{color:'skyblue', fontSize:30, fontWeight:'bold', textAlign:'center', }}>HQ-Noida,India</Text>
          <Text style={{color:'orange', fontSize:20, textAlign:'center'}}>20, Logix Infotech Park, D-5, Sector 59, Noida</Text>
        </View>

        <View>
          <Image 
          style={{width:300, height:250, marginTop:30, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
          source={require('../../assets/src/ouroffice_dehradun.png')}  />
          <Text style={{color:'skyblue', fontSize:30, fontWeight:'bold', textAlign:'center', }}>Dehradun</Text>
          <Text style={{color:'orange', fontSize:20, textAlign:'center'}}>Plot No. 45B, Doon IT Park, Sahastradhara Road, Dehradun, Uttarakhand 248013, India</Text>
        </View>

        <View>
          <Image 
          style={{width:300, height:250, marginTop:30, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
          source={require('../../assets/src/ouroffice_mohali.png')}  />
          <Text style={{color:'skyblue', fontSize:30, fontWeight:'bold', textAlign:'center', }}>Mohali</Text>
          <Text style={{color:'orange', fontSize:20, textAlign:'center'}}>C-212, 6th Floor, Phase 8b,Industrial Area, Mohali</Text>
        </View>

        <View>
          <Image 
          style={{width:300, height:250, marginTop:30, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
          source={require('../../assets/src/ouroffice_gurugram.png')}  />
          <Text style={{color:'skyblue', fontSize:30, fontWeight:'bold', textAlign:'center', }}>Gurugram</Text>
          <Text style={{color:'orange', fontSize:20, textAlign:'center'}}>2273, Sector - 8, IMT Manesar Gurugram, Haryana</Text>
        </View>

        <View>
          <Image 
          style={{width:300, height:250, marginTop:30, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
          source={require('../../assets/src/ouroffice_usa.png')}  />
          <Text style={{color:'skyblue', fontSize:30, fontWeight:'bold', textAlign:'center', }}>USA</Text>
          <Text style={{color:'orange', fontSize:20, textAlign:'center'}}>161 W Altadena Dr, Unit 501 STE Altadena, CA 91001-4735</Text>
        </View>

        <View>
          <Image 
          style={{width:300, height:250, marginTop:30, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
          source={require('../../assets/src/ouroffice_Chennai.png')}  />
          <Text style={{color:'skyblue', fontSize:30, fontWeight:'bold', textAlign:'center', }}>Cheenai</Text>
          <Text style={{color:'orange', fontSize:20, textAlign:'center', marginBottom:20}}>No 207, A Block, 306, Raheja Towers, Anna Salai, Chennai</Text>
        </View>
      </View>

      <View style={{backgroundColor:'black', height:180}}>
      <Text style={{color:'white', fontSize:20, textAlign:'center', marginTop:20, fontWeight:'bold'}}>Find Us On...</Text>
      <View style={Styles.icons}>
      <TouchableOpacity 
      onPress={()=>Linking.openURL('https://www.facebook.com/hashstudioz')}>
      <FontAwesome5 style={Styles.facebook} name={'facebook'} brand/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>Linking.openURL('https://www.linkedin.com/company/hashstudioz')}>
      <FontAwesome5 style={Styles.linkedin} name={'linkedin'} brand/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>Linking.openURL('https://twitter.com/hashstudioz')}>
      <FontAwesome5 style={Styles.twitter} name={'twitter'} solid/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>Linking.openURL('https://www.instagram.com/hashstudioz/')}>
      <FontAwesome5 style={Styles.instagram} name={'instagram'} solid/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>Linking.openURL('https://web.whatsapp.com/')}>
      <FontAwesome5 style={Styles.whataapp} name={'whatsapp'} solid/>
      </TouchableOpacity>
      
      </View>
      </View>
      </ScrollView>
      </View>
    );
  }
  const Styles = StyleSheet.create({
    logo:{
      width:"auto",
      height:80,
      marginVertical:20,
      marginHorizontal:50,
    },
    username:{
      marginHorizontal:20,
      fontSize:18,
      marginVertical:8,
    },
    input:{
      margin:15,
      borderWidth:3,
      borderColor:"skyblue",
      fontSize:15,
    },
    signup:{
      alignItems:"center",
      fontSize:24,
      textAlign:"center",
      color:"white",
      backgroundColor:`#ff8c00`,
      height:40,
      borderRadius:6,
      fontWeight:"bold",
    },
    button:{
      marginHorizontal:100,
      paddingVertical:20, 
    },
    icons:{
      marginHorizontal:20,
      // marginVertical:80,
      // marginLeft:80,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical:20,
  
    },
    facebook:{
      fontSize:30,
      color:`#1e90ff`,
      marginRight:25,
    },
    linkedin:{
      fontSize:30,
      color:`blue`,
      // marginLeft:60,
      marginRight:20,
      
    },
    twitter:{
      fontSize:30,
      color:"skyblue",
      
    },
    instagram:{
      fontSize:30,
      color:"darkred",
      marginLeft:20,
      
    },
    whataapp:{
      fontSize:30,
      color:"green",
      marginLeft:25,
    }
  })
export default ContactUs;