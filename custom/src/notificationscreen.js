import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image, Linking, StyleSheet} from 'react-native';
import externalStyle from '../../coustomStyle/src/styleSheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function NotificationsScreen({ navigation }) {
    return (
      <View>   
      <StatusBar hidden={true} />
     {/* header bar start here.............. */}
      <View style={externalStyle.headerBar}>
        <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Technologies</Text>
      </View>
      {/* header bar end here............... */}
      <ScrollView>
      <View>
        <Image 
        style={{marginTop:20, alignContent:'center', alignItems:'center', alignSelf:'center', justifyContent:'center'}}
        source={require('../../assets/src/technology.png')}/>
        <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center', backgroundColor:'gray', color:'white', marginTop:20, padding:10}}>Technologies</Text>
      </View>

        <Text style={{textAlign:'center', marginTop:10, fontSize:20, fontWeight:'bold'}}>Front end Engineering</Text>

        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://angularjs.org/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/anglur.png')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://vuejs.org/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/vue.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://reactjs.org/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/react.png')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://html.com/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/html.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.w3.org/Style/CSS/Overview.en.html')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/css.png')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.javascript.com/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/js.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://jquery.com/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/jquery.png')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://getbootstrap.com/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/bootstrap.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.typescriptlang.org/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/typescript.png')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.sencha.com/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/sencha.jpeg')}/>
             </TouchableOpacity>
          </View>
        </View>

        <Text style={{textAlign:'center', marginTop:30, fontSize:20, fontWeight:'bold'}}>Back end Engineering</Text>

        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://go.dev/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/go.png')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.python.org/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/python.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.ruby-lang.org/en/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/ruby.jpeg')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://nodejs.org/en/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/nodejs.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://kotlinlang.org/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/kotlin.jpeg')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.php.net/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/php.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.r-project.org/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/r.jpeg')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.mongodb.com/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/mongodb.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.postgresql.org/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/postgre.jpeg')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.mysql.com/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/mysql.png')}/>
             </TouchableOpacity>
          </View>
        </View>

        <Text style={{textAlign:'center', marginTop:30, fontSize:20, fontWeight:'bold'}}>Mobility</Text>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.swift.org/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/swift.jpeg')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://developer.apple.com/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/objectiveC.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://reactnative.dev/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/react_native.webp')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://flutter.dev/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/flutter.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://www.java.com/en/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/java.jpeg')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://kotlinlang.org/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/kotlin.jpeg')}/>
             </TouchableOpacity>
          </View>
        </View>


        <Text style={{textAlign:'center', color:'black', marginTop:10, fontSize:20, fontWeight:'bold'}}>IOT and Industrial Automation</Text>


        <View style={{marginTop:20, flexDirection:'row'}}>
          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://aws.amazon.com/iot/')}>
              <Image 
              style={{width:150, height:100, marginHorizontal:20, resizeMode:'contain'}}
              source={require('../../assets/src/awsiot.jpeg')}/>
             </TouchableOpacity>
          </View>

          <View>
             <TouchableOpacity
             onPress={()=>Linking.openURL('https://aws.amazon.com/greengrass/')}>
              <Image 
              style={{width:150, height:100, resizeMode:'contain'}}
              source={require('../../assets/src/awsiotgreengrass.png')}/>
             </TouchableOpacity>
          </View>
        </View>


        <View style={{backgroundColor:'black', marginTop:20, height:180}}>
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
export default NotificationsScreen;