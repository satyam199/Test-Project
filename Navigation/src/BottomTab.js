// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "../../custom/src/home";
// import HistoryScreen from '../../custom/src/History'
// import AboutScreen from '../../custom/src/about'
// import ProfileScreen from '../../custom/src/profile';

// const Tab = createBottomTabNavigator();


// export default function MyTabs() {

//   return (
    
//     <Tab.Navigator 
//     initialRouteName='Home'
//     screenOptions={{
//     tabBarStyle:{
//       backgroundColor:"#2d2d2d",
//       paddingBottom:10,
//       paddingTop:12,
//       height:70,
//       headerShown: false,
      
//     }
//     }}
//     >
//       <Tab.Screen name="Home" component={Home} 
//       options={{
//         headerShown: false,
//         tabBarActiveTintColor:"white",   
//       }} 
//       />
//       <Tab.Screen name="History" component={HistoryScreen} 
//        options={{
//         headerShown: false,
//         tabBarActiveTintColor:"white",
//       }} 
//       />
//       <Tab.Screen name="About" component={AboutScreen} 
//        options={{
//         headerShown: false,
//         tabBarActiveTintColor:"white",
//       }} 
//       />
//       <Tab.Screen name="Setting" component={ProfileScreen} 
//        options={{
//         headerShown: false,
//         tabBarActiveTintColor:"white",
//       }} 
//       />
      
//     </Tab.Navigator>

//   );
// }

