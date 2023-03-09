import { useNavigation } from "@react-navigation/native";
import React, {Component, useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert, Platform, PermissionsAndroid} from "react-native";
import MapView, {Polyline, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Drawerexample from './navigationDrawer'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from "react-native-reanimated";
import externalStyle from '../../coustomStyle/src/styleSheet';
import MapViewDirections from 'react-native-maps-directions';
import {Dimensions} from 'react-native';
import Geolocation from "react-native-geolocation-service";

const GOOGLE_MAPS_APIKEY = 'AIzaSyCT-9m0cbqLGJtgKAIatvN8Z7AeWl7PB70';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
   };

    this.mapView = null;
  }

  // componentDidMount(){
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         coordinates: this.state.coordinates.concat({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude
  //         })
  //       });
  //     },
  //     error => {
  //       Alert.alert(error.message.toString());
  //     },
  //     {
  //       showLocationDialog: true,
  //       enableHighAccuracy: true,
  //       timeout: 20000,
  //       maximumAge: 0
  //     }
  //   );
  // }

  componentDidMount(){
    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        });
      },
      error => {
        // console.log(error);
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0
      }
    );
  }

    requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
       authorizationLevel: 'whenInUse',
     });
    }
  
    if (Platform.OS === 'android') {
       PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }


  mapViewThis(){
    return(
      <MapView
    provider={PROVIDER_GOOGLE}
    // customMapStyle={mapStyle}
    style={{flex: 1}}
    region={{
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
    <Marker
        coordinate={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
        }}>
    </Marker>
    <Polyline
      coordinates={this.state.coordinates}
      strokeColor="#bf8221"
      strokeColors={[ '#bf8221', '#ffe066', '#ffe066', '#ffe066', '#ffe066', ]}
      strokeWidth={3}
    />
</MapView>
    )
  }

  render(){
  return (
    <View style={Styles.container}>
      <StatusBar hidden={true} />
      
        {/* header bar start here.................. */}
      <View style={externalStyle.headerBar}>
        <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Home</Text>

      </View>
        {/* header bar end here....................  */}
        <ScrollView>

        <View style={Styles.map}>
        {this.mapViewThis()}
        </View>
       
      <Text style={{ color: "red", fontSize: 24, textAlign: "center" }}>Hello!</Text>
      <Text style={{ color: "green", fontSize: 30, textAlign: "center" }}>Welcome to home page 
      {/* {route.params.username} 🎉 */}
      </Text>
      <Text style={{fontSize:20, marginHorizontal:15, marginTop:20, textAlign:"center"}}>You can see employee list to click on List button</Text>
      <TouchableOpacity style={Styles.button}
      onPress={()=>this.props.navigation.navigate("FlatList")}>
        <Text style={Styles.formik}>List</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",  
    },
    button:{
      backgroundColor:"orange",
      marginHorizontal:80,
      marginVertical:30,
      borderRadius:5,
    },
    formik:{
      fontSize:25,
      textAlign:"center",
      color:"white",
    },
    map:{
      width:350,
      height:400,
      marginLeft:5,

    }
})

export default  App















// import { useNavigation } from "@react-navigation/native";
// import React, {Component, useState, useEffect} from "react";
// import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar} from "react-native";
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import Drawerexample from './navigationDrawer'
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { color } from "react-native-reanimated";
// import externalStyle from '../../coustomStyle/src/styleSheet';
// import MapViewDirections from 'react-native-maps-directions';
// import {Dimensions} from 'react-native';
// import Geolocation from "react-native-geolocation-service";

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 41.40338;
// const LONGITUDE = 2.17403;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const GOOGLE_MAPS_APIKEY = 'AIzaSyCT-9m0cbqLGJtgKAIatvN8Z7AeWl7PB70';

// class App extends Component{
//   constructor(props) {
//     super(props);

//     this.state = {
//       coordinates: [
//         {
//           latitude: 37.3317876,
//           longitude: -122.0054812,
//         },
//         {
//           latitude: 37.771707,
//           longitude: -122.4053769,
//         },
//       ],
     
//     };

//     this.mapView = null;
//   }

  
//   onMapPress = (e) => {
//     this.setState({
//       coordinates: [
//         ...this.state.coordinates,
//         e.nativeEvent.coordinate,
//       ],
//     });
//   }

//   // console.log(route.params);

//   mapViewThis(){
//     return(
//       <MapView
//       provider={PROVIDER_GOOGLE}
//       initialRegion={{
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }}
//       style={StyleSheet.absoluteFill}
//       ref={c => this.mapView = c}
//       onPress={this.onMapPress}
//     >
    
//       {this.state.coordinates.map((coordinate, index) =>
//         <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
//       )}
//       {(this.state.coordinates.length >= 2) && (
//         <MapViewDirections
//           origin={this.state.coordinates[0]}
//           waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): undefined}
//           destination={this.state.coordinates[this.state.coordinates.length-1]}
//           apikey={GOOGLE_MAPS_APIKEY}
//           strokeWidth={3}
//           strokeColor="hotpink"
//           optimizeWaypoints={true}
//           onStart={(params) => {
//             console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
//           }}
//           onReady={result => {
//             console.log(`Distance: ${result.distance} km`)
//             console.log(`Duration: ${result.duration} min.`)

//             this.mapView.fitToCoordinates(result.coordinates, {
//               edgePadding: {
//                 right: (width / 20),
//                 bottom: (height / 20),
//                 left: (width / 20),
//                 top: (height / 20),
//               }
//             });
//           }}
//           onError={(errorMessage) => {
//             // console.log('GOT AN ERROR');
//           }}
//         />
//       )}
//     </MapView>
//     )
//   }
//   render(){
  
//   return (
//     <View style={Styles.container}>
//       <StatusBar hidden={true} />
//       <ScrollView>
//         {/* header bar start here.................. */}
//       <View style={externalStyle.headerBar}>
//         <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Home</Text>

//       </View>
//     {/* header bar end here...................... */}
//       {/* <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={Styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }} >

//         </MapView> */}

//         <View style={Styles.map}>
//         {this.mapViewThis()}
//         </View>
       
//       <Text style={{ color: "red", fontSize: 24, textAlign: "center" }}>Hello!</Text>
//       <Text style={{ color: "green", fontSize: 30, textAlign: "center" }}>Welcome to home page 
//       {/* {route.params.username} 🎉 */}
//       </Text>
//       <Text style={{fontSize:20, marginHorizontal:15, marginTop:20, textAlign:"center"}}>You can see employee list to click on List button</Text>
//       <TouchableOpacity style={Styles.button}
//       onPress={()=>this.state.navigation.navigate("FlatList")}>
//         <Text style={Styles.formik}>List</Text>
//       </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }
// }

// const Styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",  
//     },
//     button:{
//       backgroundColor:"orange",
//       marginHorizontal:80,
//       marginVertical:30,
//       borderRadius:5,
//     },
//     formik:{
//       fontSize:25,
//       textAlign:"center",
//       color:"white",
//     },
//     map:{
//       width:350,
//       height:400,
//       marginLeft:5,

//     }
// })

// export default  App


































// import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar} from "react-native";
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import Drawerexample from './navigationDrawer'
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { color } from "react-native-reanimated";
// import externalStyle from '../../coustomStyle/src/styleSheet';


// const App=({route, navigation})=> {

//   // console.log(route.params);


  
//   return (
//     <View style={Styles.container}>
//       <StatusBar hidden={true} />
//       <ScrollView>
//         {/* header bar start here.................. */}
//       <View style={externalStyle.headerBar}>
//         <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Home</Text>

//       </View>
//     {/* header bar end here...................... */}
//       <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={Styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }} >

//         </MapView>
       
//       <Text style={{ color: "red", fontSize: 24, textAlign: "center" }}>Hello!</Text>
//       <Text style={{ color: "green", fontSize: 30, textAlign: "center" }}>Welcome to home page 
//       {/* {route.params.username} 🎉 */}
//       </Text>
//       <Text style={{fontSize:20, marginHorizontal:15, marginTop:20, textAlign:"center"}}>You can see employee list to click on List button</Text>
//       <TouchableOpacity style={Styles.button}
//       onPress={()=>navigation.navigate("FlatList")}>
//         <Text style={Styles.formik}>List</Text>
//       </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// const Styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",  
//     },
//     button:{
//       backgroundColor:"orange",
//       marginHorizontal:80,
//       marginVertical:30,
//       borderRadius:5,
//     },
//     formik:{
//       fontSize:25,
//       textAlign:"center",
//       color:"white",
//     },
//     map:{
//       width:350,
//       height:350,
//       marginLeft:5,

//     }
// })

// export default  App
