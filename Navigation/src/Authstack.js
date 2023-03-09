import 'react-native-gesture-handler';
import React from "react";
import Login from "../../custom/src/login";
import App1 from "../../custom/src/signup";
import Home from "../../custom/src/home";
import List from "../../custom/src/flatList";
import Forgot from "../../custom/src/forgotPassowrd";
import BottomTab from '../../custom/src/BottomTab';
import Error from '../../custom/src/Error';
import EditProfile from '../../custom/src/EditProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from './Appstack';
import Extra from '../../custom/src/Extra';
import ChatScreen from '../../custom/src/ChatScreen';

const Stack = createNativeStackNavigator();

const App =()=>{
  
  return(
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login"
        options={{headerShown: false}} component={Login}/>

        <Stack.Screen name="Signup"  component={App1}/>

        <Stack.Screen name="Home" screenOptions={{ headerShown: false }}  component={Home}/>

        <Stack.Screen name="FlatList" component={List}/>

        <Stack.Screen name="ForgotPassword" component={Forgot}/>

        <Stack.Screen name="BottomTab" screenOptions={{ headerShown: false }} component={BottomTab}/>

        <Stack.Screen name="DrawerNavigation" options={{headerShown: false}} component={MyDrawer}/>

        <Stack.Screen name="Error Screen" options={{headerShown: false}} component={Error}/>

        <Stack.Screen name="Edit Profile"  component={EditProfile}/>

        <Stack.Screen name="Concepts" component={Extra}/>

        <Stack.Screen name='Chat Screen' component={ChatScreen} />
  
      </Stack.Navigator>
  )
}

export default App
