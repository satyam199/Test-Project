import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image, Linking} from 'react-native';
import externalStyle from '../../coustomStyle/src/styleSheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const YourApp = (navigation) => {
  return (
    <View>
     <StatusBar hidden={true} />
     {/* header bar start here.............. */}
      <View style={externalStyle.headerBar}>
                {/* <View style={externalStyle.headerText}>
                  <Text style={externalStyle.Headertitle}>About Us</Text>
            </View> */}
            <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>About HashStudioz</Text>
      </View>
      {/* header bar end here............... */}
      <ScrollView>
      <View>
        <Image
        style={{width:260, height:300, alignSelf:'center', alignItems:'center', alignContent:'center', justifyContent:'center', marginTop:20}}
        source={require('../../assets/src/about-img.png')}  />
      </View>
      <View style={{marginHorizontal:20, marginTop:20}}>
         <Text style={{fontSize:15, lineHeight:20}}>
         We are a global leader in product development, having a wide range of technology experts under the same roof. You would be surprised to meet our enthusiastic team of blockchain, cloud, Mobility & Automation.
         </Text>
         <Text style={{fontSize:15, lineHeight:20, marginTop:20,}}>
         We are designers, engineers, developers, analysts, programmers, testers, cloud experts, blockchain specialists, automation freaks & smart workers who have developed applications that are now being used by millions of consumers worldwide.
         </Text>
         <Text style={{fontSize:15, lineHeight:25, marginTop:20}}>
         We know how to build successful software products and welcome startup minds to discuss their product feasibility & scalability.
         </Text>
      </View>

      <Text style={{fontSize:20, fontWeight:'bold', marginTop:20, textAlign:'center'}}>Process We Follow</Text>

      <View style={{backgroundColor:'gray', height:400, marginTop:20}}>
        <Image 
        style={{width:360, height:200, marginTop:20, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
        source={require('../../assets/src/process_follow.png')}/>

        <Text style={{marginHorizontal:20, color:'white', marginTop:20, fontSize:18, }}>Our process includes practices, and tools, which improves our ability to deliver products at a high velocity. Our updated tech experts allow us to evolve and improve products at a faster pace than other product development companies.</Text>
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

export default YourApp;