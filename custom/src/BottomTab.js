import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home";
import HistoryScreen from './History';
import AboutScreen from './about';
import ChatScreen from './ChatScreen';
import ProfileScreen from './profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

export default function MyTabs({route, navigation}) {

  return (
    // <NavigationContainer
    //   ref={navigation}
    //   onReady={() => {
    //     const route = navigation.current.getCurrentRoute();
    //     setRouteName(route.username);
    //   }}>
    <Tab.Navigator 
    initialRouteName='Home'
    screenOptions={{
      headerShown:false,
    tabBarStyle:{
      backgroundColor:"#c0c0c0",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      // borderBottomLeftRadius: 30,
      // borderBottomRightRadius: 30,
      paddingBottom:5,
      paddingTop:5,
      height:60,
      headerShown: false,
    },
    tabBarLabelStyle: {
        fontSize: 14,
      },
      // tabBarOptions: {
      //   style: {
      //   backgroundColor: 'red',
      //   borderTopLeftRadius: 25,
      //   borderTopRightRadius: 25,
      //   // position: "absolute",
      //   bottom: 0,
      //   },
      //   }
    }}
    ref={navigation}
      onReady={() => {
        const route = navigation.current.getCurrentRoute();
        setRouteName(route.username);
      }}

    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        headerShown: false,
        tabBarActiveTintColor:"black",     
        tabBarIcon: ({focus})=>{
          return(
            <Svg xmlns="http://www.w3.org/2000/svg" class="ionicon"  viewBox="0 0 512 512"><Path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/><Path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></Svg>
          )
        }   
      }} 
      />
      <Tab.Screen name="Services" component={HistoryScreen} 
       options={{
        headerShown: false,
        tabBarActiveTintColor:"black",
        tabBarIcon: ({focus})=>{
          return(
            <Svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><Path d="M416 48H96a64 64 0 00-64 64v288a64 64 0 0064 64h320a64 64 0 0064-64V112a64 64 0 00-64-64zm24 96H72a8 8 0 01-8-8v-24a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v24a8 8 0 01-8 8z"/></Svg>
          )
        }   
      }} 
      />
      <Tab.Screen name="Chat" component={ChatScreen} 
       options={{
        headerShown: false,
        tabBarActiveTintColor:"black",
        tabBarIcon: ({focus})=>{
          return(
            <Svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><Path d="M398 81.84A227.4 227.4 0 00255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0035.65 118.76l.19.27c.28.41.57.82.86 1.22s.65.92.73 1.05l.22.4c1.13 2 2 4.44 1.23 6.9l-18.42 66.66a29.13 29.13 0 00-1.2 7.63A25.69 25.69 0 0076.83 480a29.44 29.44 0 0010.45-2.29l67.49-24.36.85-.33a14.75 14.75 0 015.8-1.15 15.12 15.12 0 015.37 1c1.62.63 16.33 6.26 31.85 10.6 12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 00-4.78-45c-10.34-48.62-37.76-92.9-77.22-124.65zM87.48 380zM160 288a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"/></Svg>
          )
        }   
      }} 
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
       options={{
        headerShown: false,
        tabBarActiveTintColor:"black",
        tabBarIcon: ({focus})=>{
          return(
            <Svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><Path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"/></Svg>
          )
        }   
      }} 
      />

      {/* <Tab.Screen name="AuthStack" component={AuthStack} 
       options={{
        headerShown: false,
        tabBarActiveTintColor:"white",
      }} 
      />

      <Tab.Screen name="AppStack" component={AppStack} 
       options={{
        headerShown: false,
        tabBarActiveTintColor:"white",
      }} 
      /> */}
      
    </Tab.Navigator>
    // </NavigationContainer>

  );
}

