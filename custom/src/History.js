import React from 'react';
import { Text, View, ScrollView, StatusBar, Image, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import externalStyle from '../../coustomStyle/src/styleSheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Services = () => {
  return (
    <View>
      <StatusBar hidden={true} />
    {/* header bar start here.................. */}
      <View style={externalStyle.headerBar}>
        <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Our Services</Text>

      </View>
    {/* header bar end here...................... */}
    <ScrollView>
      <View style={{marginHorizontal:20, marginTop:20}}>
        <Text style={{fontSize:15, lineHeight:20}}>HashStudioz is a one-stop solution for all your web requirements. Through our constant delivery of efficient and world-class digital projects, we have become one of the top hardware & software service providers in India. We react quickly to businesses on-demand needs. That's why clients prefer us over competitors. From digital consultancy to AI-oriented app and web solutions, we have built up expertise in the following Services.</Text>
      </View>

      <View style={{marginBottom:20}}>
      {/* first..................... */}
      <View style={externalStyle.services}>
        <Image style={externalStyle.image}
        source={require('../../assets/src/mobile-app-iocn.png')} />

        <Text style={externalStyle.heading}>Mobile App Development</Text>

        <Text style={externalStyle.text}>Our Mobile App developers and experts have built many high performing, digitally innovative and feature-packed apps. You will get a talented pool of developers for both IOS and Android platforms.</Text>

        <TouchableOpacity 
        style={{width:100, height:40, backgroundColor:'orange', alignSelf:'center', borderRadius:10, marginTop:20}}
        onPress={()=>Linking.openURL('https://www.hashstudioz.com/mobile-app-development-company.html')}>
          <Text style={externalStyle.readmore}>Read More...</Text>
        </TouchableOpacity>

      </View>
     {/* second............................. */}
      <View style={externalStyle.services}>
      <Image style={externalStyle.image}
        source={require('../../assets/src/webDev.png')} />

        <Text style={externalStyle.heading}>Web App Development</Text>

        <Text style={externalStyle.text}>World-class web application services, along with consulting and analysis solutions. The Leading B2B and B2C service providers in the varying segment of Consumer, Food Tech, Travel, & more.</Text>

        <TouchableOpacity 
        style={{width:100, height:40, backgroundColor:'orange', alignSelf:'center', borderRadius:10, marginTop:20}}
        onPress={()=>Linking.openURL('https://www.hashstudioz.com/web-application-development.html')}>
          <Text style={externalStyle.readmore}>Read More...</Text>
        </TouchableOpacity>
      </View>

       {/* third............................... */}
      <View style={externalStyle.services}>
      <Image style={externalStyle.image}
        source={require('../../assets/src/IoT-app-development-icon.png')} />

        <Text style={externalStyle.heading}>IoT App Development</Text>

        <Text style={externalStyle.text}>We deliver industry-focused IoT apps with minimal turnaround time. Our expertise includes Big Data Technologies tools, predictive analytics, machine learning, Smart Lock Systems, & more.</Text>

        <TouchableOpacity 
        style={{width:100, height:40, backgroundColor:'orange', alignSelf:'center', borderRadius:10, marginTop:20}}
        onPress={()=>Linking.openURL('https://hashstudioz.com/IOT-development-company.html')}>
          <Text style={externalStyle.readmore}>Read More...</Text>
        </TouchableOpacity>
      </View>
      
      {/* fourth............................... */}
      <View style={externalStyle.services}>
      <Image style={externalStyle.image}
        source={require('../../assets/src/Cloud-app-development-icon.png')} />

        <Text style={externalStyle.heading}>Cloud App Development</Text>

        <Text style={externalStyle.text}>We master the art of developing cloud-based apps and migrating on-premises systems into the cloud. We love to optimize your current cloud solutions by modernizing individual resources.</Text>

        <TouchableOpacity 
        style={{width:100, height:40, backgroundColor:'orange', alignSelf:'center', borderRadius:10, marginTop:20}}
        onPress={()=>Linking.openURL('https://www.hashstudioz.com/cloud-application-development-services.html')}>
          <Text style={externalStyle.readmore}>Read More...</Text>
        </TouchableOpacity>
      </View>
       
       {/* fifth.................................... */}
      <View style={externalStyle.services}>
      <Image style={externalStyle.image}
        source={require('../../assets/src/chat-bot-icon.png')} />

        <Text style={externalStyle.heading}>Chatbot Services</Text>

        <Text style={externalStyle.text}>We are delivering quality rich chatbot development services to brands and businesses. To boost your revenue stream and stay connected with your customers 24*7.</Text>

        <TouchableOpacity 
        style={{width:100, height:40, backgroundColor:'orange', alignSelf:'center', borderRadius:10, marginTop:30}}
        onPress={()=>Linking.openURL('https://www.hashstudioz.com/chat-bot.html')}>
          <Text style={externalStyle.readmore}>Read More...</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View style={{marginTop:20, height:180}}>
      <Text style={{color:'black', fontSize:20, textAlign:'center', marginTop:20, fontWeight:'bold'}}>Find Us On...</Text>
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

const Styles= StyleSheet.create({
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

export default Services;