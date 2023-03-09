import React from "react";
import{View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native" 

  class App extends React.Component{
    constructor(){
      super();
      this.state={
        email:"",
        errorusername:"",
      }
    }
    
    submit= ()=>{

      if(this.state.email.length<1){
        this.setState({errorusername:"please enter mail"}) 
        // alert("hello...")
      }
      else {
        this.setState({errorusername:""})
        this.setState({email:""})
        this.props.navigation.navigate("Login")
      } 
    }

    render(){
  return(
    <View style={Styles.container}>
      <Image 
       style={Styles.logo}
       source ={{uri:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hibvigazow9rhyoj1d52"}}
      />
      <TextInput placeholder="Enter your email"  style={Styles.input}
      autoCapitalize="none" 
      value={this.state.email}
       onChangeText={(username)=>this.setState({username})} />
      <Text style={Styles.text}>{this.state.errorusername}</Text>

      {/* login button..................... */}
      <TouchableOpacity style={Styles.button}
        onPress={()=>{this.submit()}}>
        <Text style={Styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
 }
}

const Styles = StyleSheet.create({
  logo:{
    width:"auto",
    height:80,
    marginVertical:60,
    // alignItems:"center"
    marginHorizontal:50,
  },
  input:{
        marginHorizontal:20,
        borderBottomWidth:2,
        borderBottomColor:"skyblue",
        fontSize:20,
        marginTop:20,
      },
      text:{
        color:"red",
        marginHorizontal:20,
        fontSize:18,
        // display:"none"
      },
  forget:{
    color:"skyblue",
    marginLeft:200,
    fontWeight:"bold",
    fontSize:20,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  submit:{
    alignItems:"center",
    fontSize:24,
    textAlign:"center",
    color:"white",
    backgroundColor:`#ff8c00`,
    height:40,
    // marginVertical:10,
    borderRadius:6,
    // marginHorizontal:5,
    fontWeight:"bold",
    // marginTop:40,

  },
  button:{
    // width:100,
    // height:80,
    paddingVertical:20,
    marginHorizontal:100,
    marginVertical:60,
    // alignContent:'center',
    // alignItems:'center',
  },
  sign:{
    color:"skyblue",
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    borderColor:`#ff8c00`,
  },
  icons:{
    marginHorizontal:20,
    marginVertical:50,
    marginLeft:80,
  },
  facebook:{
    fontSize:35,
    color:`#0000cd`,
  },
  linkedin:{
    fontSize:35,
    color:`#0000cd`,
    marginLeft:60,
    marginTop:-40,
  },
  twitter:{
    fontSize:35,
    color:"skyblue",
    marginLeft:120,
    marginTop:-40,
  },
  instagram:{
    fontSize:35,
    color:"darkred",
    marginLeft:180,
    marginTop:-40,
  }


})

export default App



































































// import React, { Component } from 'react';  
// import { View, Text, StyleSheet, Button } from 'react-native';  
// import Icon from 'react-native-vector-icons/Ionicons';  
  
// import {  
//     createSwitchNavigator,  
//     createAppContainer,  
//     createDrawerNavigator,  
//     createStackNavigator  
// } from 'react-navigation';  
// // import {createStackNavigator} from 'react-navigation-stack';
// // import {createDrawerNavigator} from 'react-navigation-drawer';
// export default class App extends Component {  
//     render() {  
//         return <AppContainer />;  
//     }  
// }  
  
// class WelcomeScreen extends Component {  
//     static navigationOptions = {  
//          title: 'Welcome',  
//     };  
//     render() {  
//         return (  
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
//                 <Text>WelcomeScreen</Text>  
//                 <Button  
//                     title="Go to DashboardScreen"  
//                     onPress={() => this.props.navigation.navigate('Dashboard')}  
//                 />  
//             </View>  
//         );  
//     }  
// }  
  
// class DashboardScreen extends Component {  
//     static navigationOptions = {  
//          title: 'Dashboard',  
//     };  
  
//     render() {  
//         return (  
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
//                 <Text>DashboardScreen</Text>  
//             </View>  
//         );  
//     }  
// }  
// const DashboardStackNavigator = createStackNavigator(  
//     {  
//         DashboardNavigator: DashboardScreen  
//     },  
//     {  
//         defaultNavigationOptions: ({ navigation }) => {  
//         return {  
//             headerLeft: (  
//                 <Icon  
//                     style={{ paddingLeft: 10 }}  
//                     onPress={() => navigation.openDrawer()}  
//                     name="md-menu"  
//                     size={30}  
//                 />  
//             )  
//         };  
//         }  
//     }  
// );  
  
// const WelcomeStackNavigator = createStackNavigator(  
//     {  
//         WelcomeNavigator: WelcomeScreen  
//     },  
//     {  
//         defaultNavigationOptions: ({ navigation }) => {  
//             return {  
//                 headerLeft: (  
//                     <Icon  
//                         style={{ paddingLeft: 10 }}  
//                         onPress={() => navigation.openDrawer()}  
//                         name="md-menu"  
//                         size={30}  
//                     />  
//                 )  
//             };  
//         }  
//     }  
// );  
// const AppDrawerNavigator = createDrawerNavigator({  
//     Dashboard: {  
//         screen: DashboardStackNavigator  
//     },  
//     Welcome: {  
//         screen: WelcomeStackNavigator  
//     },  
// });  
  
// const AppSwitchNavigator = createSwitchNavigator({  
//     Dashboard: { screen: AppDrawerNavigator },  
//     Welcome: { screen: WelcomeScreen },  
  
// });  
  
// const AppContainer = createAppContainer(AppSwitchNavigator);  
  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         alignItems: 'center',  
//         justifyContent: 'center'  
//     }  
// });  













// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './homescreen';
// import NotificationsScreen from './notificationscreen';

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button
// //         onPress={() => navigation.navigate('Notifications')}
// //         title="Go to notifications"
// //       />
// //     </View>
// //   );
// // }

// // function NotificationsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button onPress={() => navigation.goBack()} title="Go back home" />
// //     </View>
// //   );
// // }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Homes">
//         <Drawer.Screen name="Homes" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }