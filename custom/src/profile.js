import React from 'react';
import { Text, View, ScrollView, StatusBar, Image, TouchableOpacity} from 'react-native';
import externalStyle from '../../coustomStyle/src/styleSheet';
import { useTheme } from '@react-navigation/native';

const YourApp = ({navigation}) => {
  const colors = useTheme().colors;

  return (
    <View>
      
      <StatusBar hidden={true} />
      {/* header bar start here.................. */}
      <View style={externalStyle.headerBar}> 
      <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Profile</Text>
      </View>
      {/* header bar end here...... */}
      <ScrollView>
      <View style={{marginTop:20, flexDirection:'row'}}>
        <View>
        <Image 
        style={{width:100, height:120, marginHorizontal:15}}
        source={require('../../assets/src/image.jpg')} />
         </View>

        <View style={{marginTop:20}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>
          Satyam Kumar Shrivastav
        </Text>
        <Text style={{fontSize:18,}}>
          satyam@gmail.com
        </Text>
        </View>
      </View>

       {/* for horizontal line....... */}
      <View style={{marginTop:20, width:'auto', marginHorizontal:20, borderBottomWidth:2, borderBottomColor:'skyblue', }}>
      </View>

      {/* for data shown.......... */}
      <View>
      {/* for name...... */}
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={externalStyle.name}>
          Name
        </Text>
      </View>
      <View>
        <Text style={externalStyle.fullName}>
          Satyam Kumar Shrivastav
        </Text>
      </View>
      </View>
      {/* for Profile...... */}
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={externalStyle.name}>
          Profile
        </Text>
      </View>
      <View>
        <Text style={externalStyle.fullName}>
          Software Engineering
        </Text>
      </View>
      </View>
      {/* Employee id.... */}
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={externalStyle.name}>
          Employee Id
        </Text>
      </View>
      <View>
        <Text style={{ marginTop:20, fontSize:16, marginHorizontal:25,}}>
          HS2022AM
        </Text>
      </View>
      </View>
      {/* Date of Birth */}
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={externalStyle.name}>
          DOB
        </Text>
      </View>
      <View>
        <Text style={{marginTop:20, fontSize:16, marginHorizontal:85,}}>
          15/11/1998
        </Text>
      </View>
      </View>
      {/* Blood Group */}
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={externalStyle.name}>
          Blood Group
        </Text>
      </View>
      <View>
        <Text style={{marginTop:20, fontSize:16, marginHorizontal:25,}}>
          0+
        </Text>
      </View>
      </View>
      {/* Contact no. */}
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={externalStyle.name}>
          Contact No
        </Text>
      </View>
      <View>
        <Text style={{marginTop:20, fontSize:16, marginHorizontal:30,}}>
          9568736366
        </Text>
      </View>
      </View>
      {/* job location */}
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={externalStyle.name}>
          Job Location
        </Text>
      </View>
      <View>
        <Text style={{marginTop:20, fontSize:16, marginHorizontal:20,}}>
          Mohali
        </Text>
      </View>
      </View>
      </View>
      
      {/* edit profile....... */}
       <TouchableOpacity 
       onPress={()=>navigation.navigate('Edit Profile')}
       style={{marginHorizontal:20, height:45, backgroundColor:'#ff8c00', borderRadius:12, marginTop:50, marginBottom:20}}>
         <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', marginTop:10, color:'skyblue'}}>
          Edit Profile
         </Text>
       </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default YourApp;





// import { useTheme } from '@react-navigation/native';
// import React from 'react';
// import { Text, View } from 'react-native';

// const HomeScreen = () => {
//   const colors = useTheme().colors;

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.card,
//       }}>
//       <Text style={{ color: colors.text }}>
//         This is demo of default dark/light theme using navigation.
//       </Text>
//     </View>
//   );
// };

// export default HomeScreen;











// import RadioButtonRN from 'radio-buttons-react-native';
// import React, { useCallback, useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { Colors } from './Color';
// import { get, save } from './Storage';

// const HomeScreen = () => {
//   const [themeValue, setThemeValue] = useState('');
//   const [initialValue, setInitialValue] = useState(0);
//   const themes = useColorScheme();
//   const data = [
//     {
//       label: 'Light Mode',
//       value: 'light',
//     },
//     {
//       label: 'Dark Mode',
//       value: 'dark',
//     },
//     {
//       label: 'System Default',
//       value: 'default',
//     },
//   ];

//   const themeOperations = theme => {
//     switch (theme) {
//       case 'dark':
//         setTheme(theme, false);
//         setInitialValue(2);
//         return;
//       case 'light':
//         setTheme(theme, false);
//         setInitialValue(1);
//         return;
//       case 'default':
//         setTheme(themes, true);
//         setInitialValue(3);
//         return;
//     }
//   };

//   const getAppTheme = useCallback(async () => {
//     const theme = await get('Theme');
//     const isDefault = await get('IsDefault');
//     isDefault ? themeOperations('default') : themeOperations(theme);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const setTheme = useCallback(async (theme, isDefault) => {
//     save('Theme', theme);
//     save('IsDefault', isDefault);
//     setThemeValue(theme);
//   }, []);

//   useEffect(() => {
//     getAppTheme();
//   }, [getAppTheme]);

//   const styles = styling(themeValue);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>
//         This is demo of default dark/light theme with switch/Buttons using asycn
//         storage.
//       </Text>
//       <TextInput
//         style={styles.textInputStyle}
//         placeholder="Type here"
//         placeholderTextColor={Colors?.[themeValue]?.gray}
//       />
//       <TouchableOpacity style={styles.touchableStyle}>
//         <Text style={styles.buttonTextStyle}>Button</Text>
//       </TouchableOpacity>
//       <RadioButtonRN
//         data={data}
//         selectedBtn={e => themeOperations(e?.value)}
//         initial={initialValue}
//         activeColor={Colors?.[themeValue]?.activeColor}
//         deactiveColor={Colors?.[themeValue]?.deactiveColor}
//         boxActiveBgColor={Colors?.[themeValue]?.boxActiveColor}
//         boxDeactiveBgColor={Colors?.[themeValue]?.themeColor}
//         textColor={Colors?.[themeValue]?.white}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

// const styling = theme =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       backgroundColor: Colors?.[theme]?.[themeColor],
//       paddingHorizontal: 20,
//     },
//     textStyle: {
//       color: Colors?.[theme]?.white,
//     },
//     textInputStyle: {
//       borderColor: Colors?.[theme]?.gray,
//       padding: 10,
//       borderWidth: 2,
//       borderRadius: 5,
//       width: '100%',
//       marginTop: 20,
//       color: Colors?.[theme]?.white,
//     },
//     touchableStyle: {
//       backgroundColor: Colors?.[theme]?.sky,
//       padding: 10,
//       borderRadius: 6,
//       width: '100%',
//       height: 57,
//       justifyContent: 'center',
//       marginTop: 20,
//     },
//     buttonTextStyle: {
//       textAlign: 'center',
//       color: Colors?.[theme]?.commonWhite,
//       fontSize: 20,
//       fontWeight: '500',
//     },
//   });



















// import { useTheme } from '@react-navigation/native';
// import React from 'react';
// import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// const HomeScreen = () => {
//   const colors = useTheme().colors;

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.themeColor,
//         padding: 10,
//       }}>
//       <Text style={{ color: colors.white }}>
//         This is demo of default dark/light theme using navigation.
//       </Text>
//       <TextInput
//         style={{
//           borderColor: colors.gray,
//           padding: 10,
//           borderWidth: 2,
//           borderRadius: 5,
//           width: '100%',
//           marginTop: 20,
//           color: colors.white,
//         }}
//         placeholder="Type here"
//       />
//       <TouchableOpacity
//         style={{
//           backgroundColor: colors.sky,
//           padding: 10,
//           borderRadius: 6,
//           width: '100%',
//           height: 57,
//           justifyContent: 'center',
//           marginTop: 20,
//         }}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: colors.commonWhite,
//             fontSize: 20,
//             fontWeight: '500',
//           }}>
//           Button
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomeScreen;