// import React from "react";
// import { View, Text } from "react-native";
// import Animated from "react-native-reanimated";

// const Arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   }
  
//   console.log(Arr.filter(isPrime));

// const Extra = ()=>{
//     return(
//     // <View>
//     //     <Text>hELLO</Text>
        
//     // </View>
//     <Animated.View
//             entering={FadeInUp}
//             exiting={FadeOutUp}
//         >
//             lorem ipsum
//         </Animated.View>
//     );
// }


// export default Extra


// import React, { Component } from 'react';
// import { Text, View, Animated, Dimensions, Button } from 'react-native';
  
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       right: new Animated.Value(
//         Dimensions.get('window').width - 200),
//       radius: new Animated.Value(0),
//     };
//   }
  
//   leftToRight = () => {
//     Animated.parallel([
//       Animated.timing(this.state.radius, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: false,
//       }),
//       Animated.timing(this.state.right, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   };
  
//   rightToLeft = () => {
//     Animated.parallel([
//       Animated.timing(this.state.radius, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: false,
//       }),
//       Animated.timing(this.state.right, {
//         toValue: Dimensions.get('window').width - 200,
//         duration: 1000,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   };
  
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Animated.View
//           style={{
//             marginTop: '30%',
//             backgroundColor: 'red',
//             height: 200,
//             width: 200,
//             right: this.state.right,
//             position: 'absolute',
//             justifyContent: 'center',
//             borderRadius: this.state.radius,
//           }}>
//           <Text
//             style={{
//               textAlign: 'center',
//               color: 'white',
//             }}>
//             Animated View
//           </Text>
//         </Animated.View>
//         <View
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             height: '20%',
//             justifyContent: 'space-evenly',
//           }}>
//           <Button title="Left to right" 
//             onPress={() => this.leftToRight()} />
//           <Button title="right to left" 
//             onPress={() => this.rightToLeft()} />
//         </View>
//       </View>
//     );
//   }
// }
  
// export default App;









// import React, {Component} from 'react';
// import {StyleSheet, View, Animated} from 'react-native';

// class App extends Component {

//     animatedValue = new Animated.Value(0);

//     componentDidMount() {
//         Animated.timing(this.animatedValue,
//             {
//                 toValue: 1,
//                 duration: 1000,
//             }).start();
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Animated.View style={[styles.square, {
//                     backgroundColor: this.animatedValue.interpolate(
//                         {
//                             inputRange: [0, 1, 2, 3, 4, 5],
//                             outputRange: [
//                                 'rgba(255, 0, 0, 1)',
//                                 'rgba(0, 255, 0, 1)',
//                                 'rgba(255, 0, 0, 1)',
//                                 'rgba(0, 255, 0, 1)',
//                                 'rgba(255, 0, 0, 1)',
//                                 'rgba(0, 255, 0, 1)',
//                             ]
//                         })
//                 }]}/>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     square: {
//         position: 'absolute',
//         width: 200,
//         height: 200,
//         backgroundColor: 'green',
//         borderRadius:50,
//     },
// });

// export default App;

















import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

class App extends Component {

    animatedValue = new Animated.Value(0);
    // const [animatePress, setAnimatePress] = useState(new Animated.Value(1))

    componentDidMount() {
        Animated.timing(this.animatedValue,
            {
                toValue: 300,
                duration: 3000,
                // useNativeDriver: true
            }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loadBar}>
                    <Animated.View style={[styles.loadAmount, 
                        {width: this.animatedValue}
                        ]}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    loadBar: {
        width: 300,
        height: 10,
        borderRadius:50,
        backgroundColor: 'white',
    },
    loadAmount: {
        position: 'absolute',
        width: 0,
        height: 10,
        borderRadius:50,
        backgroundColor: 'green',
    },
});

export default App;