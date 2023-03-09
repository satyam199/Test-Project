import React, {useEffect} from "react";
import{View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Linking, ScrollView, StatusBar, ActivityIndicator } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { SocialIcon } from 'react-social-icons'; 
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
// import { initializeApp, firebase } from "firebase/app";
import Firebase from "../../Firebase/src/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


  class App extends React.Component{
    
    constructor(){
      super();
      this.state={
        email:"",
        password:"",
        isLoading: false
      }
    }
    componentDidMount() {
        SplashScreen.hide();  
    }
    
    // submit= async()=>{

    //   try {
    //     AsyncStorage.setItem("item", this.state.email);
        
    //   } 
    //   catch (err) {
    //     Alert.alert("error")
        
    //   }

    //   if(this.state.email.length<1){
    //     this.setState({erroremail:"please enter email"}) 
    //     // alert("hello...")
    //   }
    //   else {
    //     this.setState({erroremail:""})
    //   }
    //   if(this.state.password.length<1){
    //     this.setState({errorpassword:"please enter password"})
    //   }
    //   else{
    //     this.setState({errorpassword:""})
    //     Alert.alert("You are login!",this.state.email)
    //     this.setState({email:""})
    //     this.setState({password:""})
    //     this.props.navigation.navigate("DrawerNavigation",{
    //       email: this.state.email,
    //     });
        
    //   }  
      
    // }

    //  getItemList = async()=>{

    //   try {
    //    const data = await AsyncStorage.getItem("item")
    //    this.getemail(data)
        
    //   } catch (err) {
        
    //   }

    // } 

    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
    userLogin = () => {
      if(this.state.email === '' && this.state.password === '') {
        Alert.alert('Enter details to signin!')
      } else {
        this.setState({
          isLoading: true,
        })
        Firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '', 
            password: ''
          })
          this.props.navigation.navigate('DrawerNavigation')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }
    }

    render(){  
      if(this.state.isLoading){
        return(
          <View style={Styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }    
  return(
    <View style={Styles.container}>
      <StatusBar hidden={true} />
     <ScrollView>
      <Image 
       style={Styles.logo}
       source ={{uri:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hibvigazow9rhyoj1d52"}}
      />
      <TextInput placeholder="Enter your email"  style={Styles.input}
      autoCapitalize="none" 
      value={this.state.email}
      onChangeText={(val) => this.updateInputVal(val, 'email')} />
      {/* <Text style={Styles.text}>{this.state.erroremail}</Text> */}

      <TextInput placeholder="Enter your password"  style={Styles.input2} 
      autoCapitalize="none"
      value={this.state.password}
      secureTextEntry={true}
      onChangeText={(val) => this.updateInputVal(val, 'password')}  />
      {/* <Text style={Styles.text2}>{this.state.errorpassword}</Text> */}
    

      {/* forget password............................ */}
      <TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate("ForgotPassword")}}>
        <Text style={Styles.forget}>forgot password!</Text>
      </TouchableOpacity>

      {/* login button..................... */}
      <TouchableOpacity style={Styles.button}
        onPress={()=>{this.userLogin()}}
        >
        <Text style={Styles.login}>LogIn</Text>
      </TouchableOpacity>

      {/* sign up...................... */}
      <TouchableOpacity>
        <Text style={Styles.sign} 
        onPress={()=>{this.props.navigation.navigate("Signup")}}>SignUp</Text>
        
      </TouchableOpacity>

      <View style={{marginTop:30}}>
        <TouchableOpacity
        style={{width:250, height:40, flexDirection:"row",borderRadius:10, borderColor:'skyblue', borderWidth:1,justifyContent: 'center',alignItems: 'center', alignSelf: 'center'}}
        onPress={()=>this.props.navigation.navigate('Error Screen')}>
          <FontAwesome5 style={Styles.facebook} name={'facebook'} brand/>
        <Text style={{color:'#1e90ff', fontWeight:'bold', fontSize:16, marginTop:4}}>Contineue as Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{width:250, height:40, flexDirection:"row",borderRadius:10, borderColor:'#ff8c00', borderWidth:1,justifyContent: 'center',alignItems: 'center', alignSelf: 'center', marginTop:10}}
        onPress={()=>this.props.navigation.navigate('Error Screen')}>
          <FontAwesome5 style={Styles.google} name={'google'} brand/>
        <Text style={{color:'#ff4500', fontWeight:'bold', fontSize:16, marginTop:4}}>Contineue as Google</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
    </View>
  )
 }
}

const Styles = StyleSheet.create({
  logo:{
    width:"auto",
    height:80,
    marginVertical:40,
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
      input2:{
        marginHorizontal:20,
        marginTop:30,
        borderBottomWidth:2,
        borderBottomColor:"skyblue",
        fontSize:20,
      },
      text:{
        color:"red",
        marginHorizontal:20,
        fontSize:18,
      },
      text2:{
        color:"red",
        marginHorizontal:20,
        fontSize:18,
      },
  forget:{
    color:"skyblue",
    fontWeight:"bold",
    fontSize:18,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  login:{
    alignItems:"center",
    fontSize:24,
    textAlign:"center",
    color:"white",
    backgroundColor:`#ff8c00`,
    height:40,
    borderRadius:6,
    fontWeight:"bold",
  },
  button:{
    paddingVertical:20,
    marginHorizontal:100,
  },
  sign:{
    color:"skyblue",
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    borderColor:`#ff8c00`,
  },
  facebook:{
    fontSize:30,
    color:`#1e90ff`,
    marginRight:5,
    marginTop:2,
  },
  google:{
    fontSize:26,
    color:'#ff4500',
    marginRight:5,
    marginTop:2,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }

})

export default App














































































// import React, {useEffect} from "react";
// import{View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Linking, ScrollView, StatusBar, } from "react-native"
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { SocialIcon } from 'react-social-icons'; 
// import SplashScreen from 'react-native-splash-screen';
// import auth from '@react-native-firebase/auth';
// // import { initializeApp, firebase } from "firebase/app";
// import firebase from "../../Firebase/src/Firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


//   class App extends React.Component{
    
//     constructor(){
//       super();
//       this.state={
//         email:"",
//         getemail:"",
//         password:"",
//         erroremail:"",
//         errorpassword:"",
//       }
//     }
//     componentDidMount() {
//         SplashScreen.hide();
//         // firebase.initializeApp()
       
        
//     }

//     // handlelogin = async() =>{
//     //   try {
//     //     // console.log('hello...')
//     //     // console.log('Email=>', this.state.email, 'password=>', this.state.password)
//     //     const isUserCreated = await auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//     //     console.log(isUserCreated)
//     //   } catch (error) {
//     //     console.log(error)
//     //   }
//     // }
    
//     submit= async()=>{

//       try {
//         AsyncStorage.setItem("item", this.state.email);
        
//       } 
//       catch (err) {
//         Alert.alert("error")
        
//       }

//       if(this.state.email.length<1){
//         this.setState({erroremail:"please enter email"}) 
//         // alert("hello...")
//       }
//       else {
//         this.setState({erroremail:""})
//       }
//       if(this.state.password.length<1){
//         this.setState({errorpassword:"please enter password"})
//       }
//       else{
//         this.setState({errorpassword:""})
//         Alert.alert("You are login!",this.state.email)
//         this.setState({email:""})
//         this.setState({password:""})
//         this.props.navigation.navigate("DrawerNavigation",{
//           email: this.state.email,
//         });
        
//       }  
      
//     }

//      getItemList = async()=>{

//       try {
//        const data = await AsyncStorage.getItem("item")
//        this.getemail(data)
        
//       } catch (err) {
        
//       }

//     } 

//     render(){
      
//   return(
//     <View style={Styles.container}>
//       <StatusBar hidden={true} />
//      <ScrollView>
//       <Image 
//        style={Styles.logo}
//        source ={{uri:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hibvigazow9rhyoj1d52"}}
//       />
//       <TextInput placeholder="Enter your email"  style={Styles.input}
//       autoCapitalize="none" 
//       value={this.state.email}
//        onChangeText={(email)=>this.setState({email})} />
//       {/* <Text style={Styles.text}>{this.state.erroremail}</Text> */}

//       <TextInput placeholder="Enter your password"  style={Styles.input2} 
//       autoCapitalize="none"
//       value={this.state.password}
//       secureTextEntry={true}
//        onChangeText={(password)=>this.setState({password})}  />
//       {/* <Text style={Styles.text2}>{this.state.errorpassword}</Text> */}
    

//       {/* forget password............................ */}
//       <TouchableOpacity 
//       onPress={()=>{this.props.navigation.navigate("ForgotPassword")}}>
//         <Text style={Styles.forget}>forgot password!</Text>
//       </TouchableOpacity>

//       {/* login button..................... */}
//       <TouchableOpacity style={Styles.button}
//         onPress={()=>{this.submit()}}
//         >
//         <Text style={Styles.login}>LogIn</Text>
//       </TouchableOpacity>

//       {/* sign up...................... */}
//       <TouchableOpacity>
//         <Text style={Styles.sign} 
//         onPress={()=>{this.props.navigation.navigate("Signup")}}>SignUp</Text>
        
//       </TouchableOpacity>

//       <View style={{marginTop:30}}>
//         <TouchableOpacity
//         style={{width:250, height:40, flexDirection:"row",borderRadius:10, borderColor:'skyblue', borderWidth:1,justifyContent: 'center',alignItems: 'center', alignSelf: 'center'}}
//         onPress={()=>this.props.navigation.navigate('Error Screen')}>
//           <FontAwesome5 style={Styles.facebook} name={'facebook'} brand/>
//         <Text style={{color:'#1e90ff', fontWeight:'bold', fontSize:16, marginTop:4}}>Contineue as Facebook</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//         style={{width:250, height:40, flexDirection:"row",borderRadius:10, borderColor:'#ff8c00', borderWidth:1,justifyContent: 'center',alignItems: 'center', alignSelf: 'center', marginTop:10}}
//         onPress={()=>this.props.navigation.navigate('Error Screen')}>
//           <FontAwesome5 style={Styles.google} name={'google'} brand/>
//         <Text style={{color:'#ff4500', fontWeight:'bold', fontSize:16, marginTop:4}}>Contineue as Google</Text>
//         </TouchableOpacity>

//       </View>
//       </ScrollView>
//     </View>
//   )
//  }
// }

// const Styles = StyleSheet.create({
//   logo:{
//     width:"auto",
//     height:80,
//     marginVertical:40,
//     // alignItems:"center"
//     marginHorizontal:50,
//   },
//   input:{
//         marginHorizontal:20,
//         borderBottomWidth:2,
//         borderBottomColor:"skyblue",
//         fontSize:20,
//         marginTop:20,
//       },
//       input2:{
//         marginHorizontal:20,
//         marginTop:30,
//         borderBottomWidth:2,
//         borderBottomColor:"skyblue",
//         fontSize:20,
//       },
//       text:{
//         color:"red",
//         marginHorizontal:20,
//         fontSize:18,
//       },
//       text2:{
//         color:"red",
//         marginHorizontal:20,
//         fontSize:18,
//       },
//   forget:{
//     color:"skyblue",
//     fontWeight:"bold",
//     fontSize:18,
//     alignSelf: 'flex-end',
//     marginHorizontal: 20,
//   },
//   login:{
//     alignItems:"center",
//     fontSize:24,
//     textAlign:"center",
//     color:"white",
//     backgroundColor:`#ff8c00`,
//     height:40,
//     borderRadius:6,
//     fontWeight:"bold",
//   },
//   button:{
//     paddingVertical:20,
//     marginHorizontal:100,
//   },
//   sign:{
//     color:"skyblue",
//     fontSize:24,
//     fontWeight:"bold",
//     textAlign:"center",
//     borderColor:`#ff8c00`,
//   },
//   facebook:{
//     fontSize:30,
//     color:`#1e90ff`,
//     marginRight:5,
//     marginTop:2,
//   },
//   google:{
//     fontSize:26,
//     color:'#ff4500',
//     marginRight:5,
//     marginTop:2,
//   },

// })

// export default App