import React from 'react';
import { Text, View, ScrollView, StatusBar, ImageBackground, Image, TouchableOpacity, Alert, StyleSheet, Linking} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import externalStyle from '../../coustomStyle/src/styleSheet';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = ({...props}) => {
    const navigation = useNavigation();

     const createTwoButtonAlert = () => {
        // const {navigation} = {...props};
        Alert.alert(
          "Logout",
          "Are you sure you want to logout.",
          [
    
            { text: "NO", onPress: () => { } },
            { text: 'YES', onPress: () => { navigation.navigate('Login') } }
    
          ]
        );
      }
  return (
    <View style={{flex:1, justifyContent: 'flex-end'}}>
      <ScrollView>
        <View>
    <DrawerContentScrollView 
    // contentContainerStyle={{backgroundColor:'#ff8c00'}}
    >
        <ImageBackground 
        source={require('../../assets/src/onbaord_bg.png')} 
        style={{padding:80, marginTop:-10}} resizeMode='cover'>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Profile')}>
        <Image
        source={require('../../assets/src/image.jpg')} 
        style={{width:120, height:140, marginHorizontal:0,}}/>
        <Text style={{fontSize:16, color:'white', marginTop:10}}>Satyam Kumar Shrivastav</Text>
        </TouchableOpacity>
        </ImageBackground>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
    </View>
    <View style={{marginTop:120,}}>
    <View>
        {/* <Text>Our Custom Text</Text> */}
        <TouchableOpacity style={{color:"skyblue"}}
      onPress={()=>createTwoButtonAlert()}>
        <Text style={{color:"skyblue", fontSize:20, textAlign:"center", fontWeight:"bold", marginBottom:10}}>LOGOUT</Text>
      </TouchableOpacity>
    </View>

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
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

  },
  facebook:{
    fontSize:20,
    color:'#1e90ff',
    marginRight:25,
  },
  linkedin:{
    fontSize:20,
    color:`blue`,
    // marginLeft:60,
    marginRight:20,
    
  },
  twitter:{
    fontSize:20,
    color:"skyblue",
    
  },
  instagram:{
    fontSize:20,
    color:"darkred",
    marginLeft:20,
  },
  whataapp:{
    fontSize:20,
    color:"green",
    marginLeft:25,
  }

})

export default CustomDrawer;










































// import React, { Component } from 'react';
// import { Text, View, ScrollView, StatusBar, ImageBackground, Image, TouchableOpacity, Alert, StyleSheet, Linking} from 'react-native';
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import externalStyle from '../../coustomStyle/src/styleSheet';
// import { useNavigation } from '@react-navigation/native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Firebase from "../../Firebase/src/Firebase";

// class CustomDrawer extends Component{
//     constructor(...props) {
//     super(...props);
//     this.state = { 
//       uid: ''
//     }
//   }

//     // const navigation = useNavigation();

//       createTwoButtonAlert = () => {
//         // const {navigation} = {...props};
//         Firebase.auth().signOut().then(() => {
//           this.props.navigation.navigate('Login')
//         })
//         .catch(error => this.setState({ errorMessage: error.message }))
//         Alert.alert(
//           "Logout",
//           "Are you sure you want to logout.",
//           [
    
//             { text: "NO", onPress: () => { } },
//             { text: 'YES', onPress: () => { this.props.navigation.navigate('Login') } }
//             // { text: 'YES', onPress: () => { this.signOut() } }
//           ]
//         );
//       }
//       render() {
//         this.state = { 
//           userName: Firebase.auth().currentUser.userName,
//           uid: Firebase.auth().currentUser.uid
//         }  
//   return (
//     <View style={{flex:1, justifyContent: 'flex-end'}}>
//       <ScrollView>
//         <View>
//     <DrawerContentScrollView 
//     // contentContainerStyle={{backgroundColor:'#ff8c00'}}
//     >
//         <ImageBackground 
//         source={require('../../assets/src/onbaord_bg.png')} 
//         style={{padding:80, marginTop:-10}} resizeMode='cover'>
//           <TouchableOpacity
//           onPress={()=>this.props.navigation.navigate('Profile')}>
//         <Image
//         source={require('../../assets/src/image.jpg')} 
//         style={{width:120, height:140, marginHorizontal:0,}}/>
//         <Text style={{fontSize:16, color:'white', marginTop:10}}>Satyam Kumar Shrivastav</Text>
//         </TouchableOpacity>
//         </ImageBackground>
//         <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//     </View>
//     <View style={{marginTop:120,}}>
//     <View>
//         {/* <Text>Our Custom Text</Text> */}
//         <TouchableOpacity style={{color:"skyblue"}}
//       onPress={()=>createTwoButtonAlert()}>
//         <Text style={{color:"skyblue", fontSize:20, textAlign:"center", fontWeight:"bold", marginBottom:10}}>LOGOUT</Text>
//       </TouchableOpacity>
//     </View>

//     <View style={Styles.icons}>

//       <TouchableOpacity 
//       onPress={()=>Linking.openURL('https://www.facebook.com/hashstudioz')}>
//       <FontAwesome5 style={Styles.facebook} name={'facebook'} brand/>
//       </TouchableOpacity>

//       <TouchableOpacity
//       onPress={()=>Linking.openURL('https://www.linkedin.com/company/hashstudioz')}>
//       <FontAwesome5 style={Styles.linkedin} name={'linkedin'} brand/>
//       </TouchableOpacity>

//       <TouchableOpacity
//       onPress={()=>Linking.openURL('https://twitter.com/hashstudioz')}>
//       <FontAwesome5 style={Styles.twitter} name={'twitter'} solid/>
//       </TouchableOpacity>

//       <TouchableOpacity
//       onPress={()=>Linking.openURL('https://www.instagram.com/hashstudioz/')}>
//       <FontAwesome5 style={Styles.instagram} name={'instagram'} solid/>
//       </TouchableOpacity>

//       <TouchableOpacity
//       onPress={()=>Linking.openURL('https://web.whatsapp.com/')}>
//       <FontAwesome5 style={Styles.whataapp} name={'whatsapp'} solid/>
//       </TouchableOpacity>
      
//       </View>
//       </View>
//       </ScrollView>
//     </View>
//   );
// }
// }

// const Styles = StyleSheet.create({
//   icons:{
//     marginHorizontal:20,
//     flexDirection:'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',

//   },
//   facebook:{
//     fontSize:20,
//     color:'#1e90ff',
//     marginRight:25,
//   },
//   linkedin:{
//     fontSize:20,
//     color:`blue`,
//     // marginLeft:60,
//     marginRight:20,
    
//   },
//   twitter:{
//     fontSize:20,
//     color:"skyblue",
    
//   },
//   instagram:{
//     fontSize:20,
//     color:"darkred",
//     marginLeft:20,
//   },
//   whataapp:{
//     fontSize:20,
//     color:"green",
//     marginLeft:25,
//   }

// })

// export default CustomDrawer;