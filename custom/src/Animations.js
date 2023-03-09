// import React from "react";
// import { View, Text, ActivityIndicator, ScrollView, StatusBar, Button, StyleSheet} from "react-native";
// import externalStyle from '../../coustomStyle/src/styleSheet';
// import Animated, { useSharedValue, useAnimatedStyle, rotateZ} from 'react-native-reanimated';


// const Animations=(props)=>{
//     // function WobbleExample(props) {
//         const rotation = useSharedValue(0);
      
//         const animatedStyle = useAnimatedStyle(() => {
//           return {
//             // transform: [{ rotateZ: `${rotation.value}deg` }],
//             transform: rotateZ(90)
//           };
//         });
    

//     return(
//         <ScrollView>
//       <StatusBar hidden={true} />
//     {/* header bar start here.................. */}
//       <View style={externalStyle.headerBar}>
//         <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Animations</Text>

//       </View>
//     {/* header bar end here...................... */}
//     <>
//       <Animated.View style={[ styles.box, animatedStyle]} />
//       <Button
//         title="wobble"
//         onPress={(props) => {rotation(props)
//           // will be filled in later
//         }}
//       />
//     </>
//     </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     box:{
//         width:50,
//         height:50,
//         backgroundColor:'blue',
//         borderRadius:5,
//         marginTop:50,
//         alignSelf:'center',
//         marginBottom:40,
//     }
// })

// export default Animations






import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
} from 'react-native';

const Animations = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction()); 
  };
  
  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          React Native Rotate Image View Using Animation
        </Text>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{ rotate: RotateData }],
          }}
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
        // source={require('../../assets/src/react_logo.png')}
        />
        <TouchableHighlight
          onPress={startImageRotateFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Start Image Rotate Function
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C2C2',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 50,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 40,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },
});

export default Animations;




// import React, {useRef} from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from 'react-native';

// const Animations = () => {
//   // fadeAnim will be used as the value for opacity. Initial Value: 0
//   const fadeAnim = useRef(new Animated.Value(0));

//   const fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {
//     // Will change fadeAnim value to 0 in 3 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[
//           styles.fadingContainer,
//           {
//             // Bind opacity to animated value
//             opacity: fadeAnim,
//           },
//         ]}>
//         <Text style={styles.fadingText}>Fading View!</Text>
//       </Animated.View>
//       <View style={styles.buttonRow}>
//         <Button title="Fade In View" onPress={fadeIn} />
//         <Button title="Fade Out View" onPress={fadeOut} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: 'powderblue',
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     flexBasis: 100,
//     justifyContent: 'space-evenly',
//     marginVertical: 16,
//   },
// });

// export default Animations;
