// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator, NavigationDrawerStructure } from '@react-navigation/drawer';
// import NotificationsScreen from '../../custom/src/notificationscreen';
// import ContactUs from '../../custom/src/ContactUs';
// import BottomTab from '../../custom/src/BottomTab';
// import CustomDrawer from '../../component/src/CustomDrawer';
// import Animations from '../../custom/src/Animations';
// import { Ionicons } from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Extra from '../../custom/src/Extra';
// import about from '../../custom/src/about'


// const Drawer = createDrawerNavigator();

// export default function MyDrawer() {
//   // createTwoButtonAlert = () => {
//   //   const {navigation} = {...props};
//   //   Alert.alert(
//   //     "Logout",
//   //     "Are you sure you want to logout.",
//   //     [

//   //       { text: "NO", onPress: () => { } },
//   //       { text: 'YES', onPress: () => { navigation.navigate('Login') } }

//   //     ]
//   //   );
//   // }
//     return (
//         // <NavigationContainer>
//       <Drawer.Navigator drawerContent={props=> <CustomDrawer{...props}/>}
//       screenOptions={{
//         // headerShown:false,
//         // headerLeft: () => (
//         //   <NavigationDrawerStructure navigationProps={navigation} />
//         // ),
//         headerStyle: {
//           backgroundColor: '#ff8c00', //Set Header color
//         },
//         // headerShown:false,
//         position : 'apslute',
//         headerTransparent:true,
//         headerTintColor: 'skyblue', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//           display:'none',
//         },
//         drawerBackgroundColor: `blue`,
//         drawerActiveBackgroundColor:'#ff8c00',
//         HeaderStyle:{
//           borderWidth: 1,
//           borderColor:'#000'
//         },
//       }}
//         >
//         <Drawer.Screen name="Home" component={BottomTab} 
//         // options={{
//         //   drawerIcon:({color})=>{
//         //     <Ionicons name='home-sharp' size={20} color={color} />
//         //   }
//         // }}
//         />
//         <Drawer.Screen name="Technologies" component={NotificationsScreen} />

//         <Drawer.Screen name="Contact Us" component={ContactUs} />

//         <Drawer.Screen name="About Us" component={about} />

//         {/* <Drawer.Screen name="Animations" component={Animations} /> */}
        
//         {/* <Drawer.Screen name="Concepts" component={Extra} /> */}


//       </Drawer.Navigator>
//     //   </NavigationContainer>
//     );
//   }




















  import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, NavigationDrawerStructure } from '@react-navigation/drawer';
import NotificationsScreen from '../../custom/src/notificationscreen';
import ContactUs from '../../custom/src/ContactUs';
import BottomTab from '../../custom/src/BottomTab';
import CustomDrawer from '../../component/src/CustomDrawer';
import Animations from '../../custom/src/Animations';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Extra from '../../custom/src/Extra';
import about from '../../custom/src/about'


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  // createTwoButtonAlert = () => {
  //   const {navigation} = {...props};
  //   Alert.alert(
  //     "Logout",
  //     "Are you sure you want to logout.",
  //     [

  //       { text: "NO", onPress: () => { } },
  //       { text: 'YES', onPress: () => { navigation.navigate('Login') } }

  //     ]
  //   );
  // }
    return (
        // <NavigationContainer>
      <Drawer.Navigator drawerContent={props=> <CustomDrawer{...props}/>}
      screenOptions={{
        // headerShown:false,
        // headerLeft: () => (
        //   <NavigationDrawerStructure navigationProps={navigation} />
        // ),
        headerStyle: {
          backgroundColor: '#ff8c00', //Set Header color
        },
        // headerShown:false,
        position : 'apslute',
        headerTransparent:true,
        headerTintColor: 'skyblue', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
          display:'none',
        },
        drawerBackgroundColor: `blue`,
        drawerActiveBackgroundColor:'#ff8c00',
        HeaderStyle:{
          borderWidth: 1,
          borderColor:'#000'
        },
      }}
        >
        <Drawer.Screen name="Home" component={BottomTab} 
        // options={{
        //   drawerIcon:({color})=>{
        //     <Ionicons name='home-sharp' size={20} color={color} />
        //   }
        // }}
        />
        <Drawer.Screen name="Technologies" component={NotificationsScreen} />

        <Drawer.Screen name="Contact Us" component={ContactUs} />

        <Drawer.Screen name="About Us" component={about} />

        {/* <Drawer.Screen name="Animations" component={Animations} /> */}
        
        {/* <Drawer.Screen name="Concepts" component={Extra} /> */}


      </Drawer.Navigator>
    //   </NavigationContainer>
    );
  }












// import  React, { Component } from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator, NavigationDrawerStructure } from '@react-navigation/drawer';
// import NotificationsScreen from '../../custom/src/notificationscreen';
// import ContactUs from '../../custom/src/ContactUs';
// import BottomTab from '../../custom/src/BottomTab';
// import CustomDrawer from '../../component/src/CustomDrawer';
// import Animations from '../../custom/src/Animations';
// import { Ionicons } from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Extra from '../../custom/src/Extra';
// import about from '../../custom/src/about'


// const Drawer = createDrawerNavigator();

// export default class MyDrawer extends Component {
//   constructor() {
//     super();
//   }
//   render(){
//     return (
//         // <NavigationContainer>
//       <Drawer.Navigator drawerContent = {props=> <CustomDrawer {...props}/>}
//       screenOptions={{
//         // headerShown:false,
//         // headerLeft: () => (
//         //   <NavigationDrawerStructure navigationProps={navigation} />
//         // ),
//         headerStyle: {
//           backgroundColor: '#ff8c00', //Set Header color
//         },
//         // headerShown:false,
//         position : 'apslute',
//         headerTransparent:true,
//         headerTintColor: 'skyblue', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//           display:'none',
//         },
//         drawerBackgroundColor: `blue`,
//         drawerActiveBackgroundColor:'#ff8c00',
//         HeaderStyle:{
//           borderWidth: 1,
//           borderColor:'#000'
//         },
//       }}
//         >
//         <Drawer.Screen name="Home" component={BottomTab} 
//         // options={{
//         //   drawerIcon:({color})=>{
//         //     <Ionicons name='home-sharp' size={20} color={color} />
//         //   }
//         // }}
//         />
//         <Drawer.Screen name="Technologies" component={NotificationsScreen} />

//         <Drawer.Screen name="Contact Us" component={ContactUs} />

//         <Drawer.Screen name="About Us" component={about} />

//         {/* <Drawer.Screen name="Animations" component={Animations} /> */}
        
//         {/* <Drawer.Screen name="Concepts" component={Extra} /> */}


//       </Drawer.Navigator>
//     //   </NavigationContainer>
//     );
//   }
// }