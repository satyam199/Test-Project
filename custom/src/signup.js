import React, { useState, useEffect, Component } from "react";
import{View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, StatusBar, ActivityIndicator } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from 'react-native-element-dropdown';
// import axios from "axios";
import axios, * as others from 'axios';
import Firebase from '../../Firebase/src/Firebase';


  class SignUp extends Component{
    constructor() {
      super();
      this.state = { 
        userName: '',
        email: '', 
        password: '',
        confirmpassword:'',
        // genderValue:'',
        dob:'',
        employeeid:'',
        // country:'',
        // state:'',
        // city:'',
        joblocation:'',
        mobile:'',
        // bloodGroupValue:'',
        // jobProfile:'',
        isLoading: false
      }
    }

     

    //  Gender =[
    //   { label1: 'Male', value1: 'Male' },
    //   { label1: 'Female', value1: 'Female' },
    // ]

    //  BloodGroup =[
    //   { label1: 'A RhD positive (A+)', value1: '1' },
    //   { label1: 'A RhD negative (A-)', value1: '2' },
    //   { label1: 'B RhD positive (B+)', value1: '3' },
    //   { label1: 'B RhD negative (B-)', value1: '4' },
    //   { label1: 'O RhD positive (O+)', value1: '5' },
    //   { label1: 'O RhD negative (O-)', value1: '6' },
    //   { label1: 'AB RhD positive (AB+)', value1: '7' },
    //   { label1: 'AB RhD negative (AB-)', value1: '8' },
    // ]


    


    // useEffect(() => {
  
    //   var config = {
    //     method: 'get',
    //     url: 'https://api.countrystatecity.in/v1/countries',
    //     headers: {
    //       'X-CSCAPI-KEY': 'd01BSGhkRE55VTkySEtPVHNXcXRLWmVQV1VGYlkxVTlWVmlCb29BcA=='
    //     }
    //   };
  
    //   axios(config)
    //     .then(function (response) {
    //       console.log(JSON.stringify(response.data));
    //       var count = response.data.length
    //       console.log(count,"count");
    //       let countryArray = []
    //       for (var i = 0; i < count; i++){
    //         countryArray.push({
    //           value2: response.data[i].iso2,
    //           label2: response.data[i].name
    //         })
    //       }
    //       setcountryData(countryArray)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });        
    //  },[]);
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }

    registerUser = () => {
      
      if(this.state.userName.length == ''){
        // console.log('hello....')
        Alert.alert('Please enter your Name')
      } else if(this.state.email.length == ''){
        Alert.alert('Please enter your Email')
      } else if(this.state.password.length == ''){
        Alert.alert('Please enter your Password')
      } else if(this.state.confirmpassword.length == ''){
        Alert.alert('Please Confirm Your Password')
      } else if(this.state.dob.length == ''){
        Alert.alert('Please enter your DOB')
      } else if(this.state.employeeid.length == ''){
        Alert.alert('Please enter your ID')
      } else if(this.state.joblocation.length == ''){
        Alert.alert('Please enter your Job Location')
      } else if(this.state.mobile.length == ''){
        Alert.alert('Please enter your Mobile No.')
      }
      else {
        this.setState({
          isLoading: true,
        })
        console.log('there is an error....')
        Firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            userName: this.state.userName
          })
          console.log('User registered successfully!')
          this.setState({
            isLoading: false,
            userName: '',
            email: '', 
            password: '',
            // confirmpassword:'',
            // dob:'',
            // employeeid:'',
            // joblocation:'',
            // mobile:'',
            // jobProfile:'',

          })
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))     
        // console.log(error.message, "this is error message....") 
      }
    }

    //  submit=()=>{
      // if(userName.length<1){
      //   Alert.alert("please enter your name")
      // } 
    //   else if(email.length<1){
    //     Alert.alert("please enter email")
    //   }
    //   // else if(!reg.test({email})){
    //   //   Alert.alert("please enter valid email address")
    //   // }
    //   else if(password.length<1){
    //     Alert.alert("please enter password")
    //   }  
    //   else if(confirmpassword.length<1){
    //     Alert.alert('please confirm your password')
    //   }
    //   else if(gender.length<1){
    //     Alert.alert('please select your gender')
    //   }
    //   else if(dob.length<1){
    //     Alert.alert('please select your DOB')
    //   }
    //   else if(employeeid.length<1){
    //     Alert.alert('please enter your employeeid')
    //   }
    //   // else if(country != null && country.length<1){
    //   //   Alert.alert('please select your country')
    //   // }
    //   // else if(state != null && state.length<1){
    //   //   Alert.alert('please select your state')
    //   // }
    //   // else if(city != null && city.length<1){
    //   //   Alert.alert('please select your city')
    //   // }
    //   else if(joblocation.length<1){
    //     Alert.alert('please select your location')
    //   }
    //   else if(bloodGroup.length<1){
    //     Alert.alert('please select your blood group')
    //   }
    //   else if(jobProfile.length<1){
    //     Alert.alert('please enter your job profile')
    //   }
    //   else{
    //     // Alert.alert("Your account created successfully! Now you can Login your account")
    //     Alert.alert("You are successfully signup!",userName)
    //     {navigation.navigate("Login")}
    //   }   
      
    // } 
  
  render() {  
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
      {/* User name ........... */}
      <Text style={Styles.username}>Name</Text>
      <TextInput placeholder="Enter your username"  style={Styles.input}
      autoCapitalize="none"
      value={this.state.userName}
       onChangeText={(val)=>this.updateInputVal(val, 'userName')}>
      </TextInput>
      

      {/* Email Address............ */}
      <Text style={Styles.username}>Email Address</Text>
      <TextInput placeholder="Enter your email" style={Styles.input}
      autoCapitalize="none"
      value={this.state.email}
      onChangeText={(val)=>this.updateInputVal(val, 'email')}>

      </TextInput>

     {/* password.................. */}
      <Text style={Styles.username}>Password</Text>
      <TextInput placeholder="Enter your password" style={Styles.input} 
      secureTextEntry={true}
      autoCapitalize="none"
      value={this.state.password}
      onChangeText={(val)=>this.updateInputVal(val, 'password')}>

      </TextInput>

      {/* confirm password */}
      <Text style={Styles.username}>Confirm Password</Text>
      <TextInput placeholder="Confirm your password" style={Styles.input} 
      secureTextEntry={true}
      autoCapitalize="none"
      value={this.state.confirmpassword}
      onChangeText={(val)=>this.updateInputVal(val, 'confirmpassword')}>

      </TextInput>

      {/* Gender */}
      {/* <Text style={Styles.username}>Gender</Text>
      <Dropdown
        style={Styles.dropdownInput}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        iconStyle={Styles.iconStyle}
        itemTextStyle={{color:'grey'}}
        data={Gender}
        search
        maxHeight={300}
        labelField='label1'
        valueField='value1'
        placeholder="Select Gender "
        searchPlaceholder="Search here..."
        value={this.state.genderValue}
        onChangeText={(text)=>setGenderValue(text)}
        onChange={(item) => {
          setGenderValue(item.genderValue);
          setGender(genderValue); 
        }} /> */}

      {/* DOB */}
      <Text style={Styles.username}>Date of Birth</Text>
      <TextInput placeholder="select DOB" style={Styles.input} 
      autoCapitalize="none"
      value={this.state.dob}
      onChangeText={(val)=>this.updateInputVal(val, 'dob')}>

      </TextInput>

      {/* Employee id */}
      <Text style={Styles.username}>Employee Id</Text>
      <TextInput placeholder="employee id" style={Styles.input} 
      autoCapitalize="none"
      value={this.state.employeeid}
      onChangeText={(val)=>this.updateInputVal(val, 'employeeid')}>

      </TextInput>

      {/* Country */}
      {/* <Text style={Styles.username}>Country</Text>
      <Dropdown
        style={Styles.dropdownInput}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        itemTextStyle={{color:'grey'}}
        iconStyle={Styles.iconStyle}
        data={countryData}
        search
        maxHeight={300}
        labelField="label2"
        valueField="value2"
        placeholder="Select Country "
        searchPlaceholder="Search here..."
        value={value2}
        onChangeText={(text)=>setValue2(text)}
        onChange={(item) => {
          console.log(item);
          setValue2(item.value2);
          handleState(item.value2)
          setErrorCountry('');
          setCountry(item.label2);
        }}
      /> */}

      {/* State */}
      {/* <Text style={Styles.username}>State</Text>
      <Dropdown
        style={Styles.dropdownInput}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        iconStyle={Styles.iconStyle}
        itemTextStyle={{color:'grey'}}
        data={stateData}
        search
        maxHeight={300}
        labelField="label3"
        valueField="value3"
        placeholder="Select State "
        searchPlaceholder="Search here..."
        value={value3}
        //onChangeText={(text)=>setValue3(text)}
        onChange={item => {
          setValue3(item.value3);
          handleCity(value2,item.value3)
          setErrorState('');
          setState(item.label3);
        }}
      /> */}

      {/* City */}
      {/* <Text style={Styles.username}>City</Text>
      <Dropdown
        style={Styles.dropdownInput}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        iconStyle={Styles.iconStyle}
        itemTextStyle={{color:'grey'}}
        data={cityData}
        search
        maxHeight={300}
        labelField="label4"
        valueField="value4"
        placeholder="Select City "
        searchPlaceholder="Search here..."
        value={value4}
        onChangeText={(text)=>setValue4(text)}
        onChange={(item) => {
          console.log(item,"city onchange");
          setValue4(item.value4);
          setLable4(item.label4);
          setErrorCity('');
          setCity(item.label);
        }}
      /> */}

      {/* Job Location */}
      <Text style={Styles.username}>Job Loaction</Text>
      <TextInput placeholder="select your job location" style={Styles.input} 
      autoCapitalize="none"
      value={this.state.joblocation}
      onChangeText={(val)=>this.updateInputVal(val, 'joblocation')}>

      </TextInput>

      {/* Contact no. */}
      <Text style={Styles.username}>Mobile</Text>
       <PhoneInput
            containerStyle={{width: "90%",height: 60,
            marginTop:5,
            backgroundColor:'white',
            marginHorizontal:20}}
            //ref={phoneInput}
            textInputProps={{ maxLength: 10 }}
            // textContainerStyle={{backgroundColor: 'gray', }}
            //defaultValue={value}
            defaultCode="IN"
            layout="first"
            textInputStyle={{padding:0, color: 'black'}} 
            onChangeText={(val)=>this.updateInputVal(val, 'mobile')}
            // onChange={handleMobileChange} 
            // onChangeCountry={(text)=>setCountryCode(text)}
            // onChangeFormattedText={handleMobileChange}
            // defaultValue={countryCode}
            value={this.state.mobile}
            withShadow
            withDarkTheme
            // autoFocus
          />  

      {/* Blood group */}
      {/* <Text style={Styles.username}>Blood Group</Text>
       <Dropdown
        style={Styles.dropdownInput}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        iconStyle={Styles.iconStyle}
        itemTextStyle={{color:'grey'}}
        data={BloodGroup}
        search
        maxHeight={300}
        labelField='label1'
        valueField='value1'
        placeholder="Select Blood Group "
        searchPlaceholder="Search here..."
        value={this.state.bloodGroupValue}
        onChangeText={(text)=>setBloodGroupValue(text)}
        onChange={(item) => {
          setBloodGroupValue(item.bloodGroupValue);
          setBloodGroup(bloodGroupValue); 
        }} /> */}

      {/* Profile */}
      {/* <Text style={Styles.username}>Job Profile</Text>
      <TextInput placeholder="Enter your job profile" style={Styles.input} 
      autoCapitalize="none"
      value={this.state.jobProfile}
      onChangeText={(val)=>this.updateInputVal(val, 'jobprofile')}>

      </TextInput> */}


      {/* signup button..................... */}
      <TouchableOpacity style={Styles.button}
        onPress={()=>{this.registerUser()}}>
        <Text style={Styles.signup}>SignUp</Text>
      </TouchableOpacity>
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
    marginHorizontal:50,
  },
  username:{
    marginHorizontal:20,
    fontSize:18,
    marginVertical:8,
  },
  input:{
    margin:15,
    borderWidth:3,
    borderColor:"skyblue",
    fontSize:15,
  },
  signup:{
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
    marginHorizontal:100,
    paddingVertical:20, 
  },
  // dropdown: {
  //   marginHorizontal:20,
  //   height:40,
  //   borderBottomColor: 'white',
  //   borderBottomWidth: 1,
  //   marginTop:-4,
  // },
  placeholderStyle: {
    fontSize: 15,
    // color:"white",
    marginHorizontal:5,
  },
  selectedTextStyle: {
    fontSize: 15,
    // color:"white",
  },
  iconStyle: {
    width: 20,
    height: 20, 
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'black'
  },
  dropdownInput:{
    margin:15,
    height:55,
    borderWidth:3,
    borderColor:"skyblue",
    fontSize:15,
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

export default SignUp






















































// import React, { useState, useEffect } from "react";
// import{View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, StatusBar } from "react-native";
// import PhoneInput from "react-native-phone-number-input";
// import { Dropdown } from 'react-native-element-dropdown';
// // import axios from "axios";
// import axios, * as others from 'axios';
// import Firebase from '../../Firebase/src/Firebase';


//   const SignUp =({navigation})=>{

//     const[userName, setUserName] = useState('')
//     const[errorUserName, setErrorUserName] = useState('')

//     const[email, setEmail] = useState('')
//     const[errorEmail, setErrorEmail] = useState('')

//     const[password, setPassword] = useState('')
//     const[errorPassword, setErrorPassword] = useState('')

//     const[confirmpassword, setConfirmpassword] = useState('')
//     const[errorConfirmpassword, setErrorConfirmPassword] = useState('')

//     const[gender, setGender] = useState('')
//     const[errorGender, setErrorGender] = useState('')

//     const[dob, setDob] = useState('')
//     const[errorDob, setErrorDob] = useState('')

//     const[employeeid, setEmployeeid] = useState('')
//     const[errorEmployeeid, setErrorEmployeeid] = useState('')

//     const[country, setCountry] = useState('')
//     const[errorCountry, setErrorCountry] = useState('') 
    
//     const[state, setState] = useState('')
//     const[errorState, setErrorState] = useState('')

//     const[city, setCity] = useState('')
//     const[errorCity, setErrorCity] = useState('')

//     const[joblocation, setJobLocation] = useState('')
//     const[errorJobLocation, setErrorJobLocation] = useState('')

//     const[mobile, setMobile] = useState('')
//     const[errorMobile, setErrorMobile] = useState('')

//     const[bloodGroup, setBloodGroup] = useState('')
//     const[errorBloodGroup, setErrorBloodGroup] = useState('')

//     const[jobProfile, setJobProfile] = useState('')
//     const[errorJobProfile, setErrorJobProfile] = useState('')
    
//     const [genderValue, setGenderValue] = useState(null);

//     const [bloodGroupValue, setBloodGroupValue] = useState(null);

//     // const [countryData, setCountryData] = useState(null);

//     // const [stateData, setStateData] = useState(null);

//     // const [cityData, setCityData] = useState(null);

//     // const [countryValue, setCountryValue] = useState('')
//     // const [stateValue, setStateValue] = useState('')
//     // const [cityValue, setCityValue] = useState('')

//     const [countryData, setcountryData] = useState([])
//     const [stateData, setstateData] = useState([])
//     const [cityData, setcityData] = useState([])

//     const [countries, setCountries] = useState(null)
//     const [states, setStates] = useState(null)
//     const [cities, setCities] = useState(null)

//     const [value2, setValue2] = useState("");
//     const [value3, setValue3] = useState("");
//     const [value4, setValue4] = useState("");  

//     const Gender =[
//       { label1: 'Male', value1: 'Male' },
//       { label1: 'Female', value1: 'Female' },
//     ]

//     const BloodGroup =[
//       { label1: 'A RhD positive (A+)', value1: '1' },
//       { label1: 'A RhD negative (A-)', value1: '2' },
//       { label1: 'B RhD positive (B+)', value1: '3' },
//       { label1: 'B RhD negative (B-)', value1: '4' },
//       { label1: 'O RhD positive (O+)', value1: '5' },
//       { label1: 'O RhD negative (O-)', value1: '6' },
//       { label1: 'AB RhD positive (AB+)', value1: '7' },
//       { label1: 'AB RhD negative (AB-)', value1: '8' },
//     ]


//     // useEffect(()=>{
//     //   var config = {
//     //     method: 'get',
//     //     url: 'https://api.countrystatecity.in/v1/countries',
//     //     headers: {
//     //       'X-CSCAPI-KEY': 'NHhKWnpFNEE4b0lJbUtpWmZvallvbmo4V1NHSzM5aVB5RDJucXFZbg=='
//     //     }
//     //   };
      
//     //   axios(config)
//     //   .then(function (response) {
//     //     // console.log(JSON.stringify(response.data));
//     //     var count = Object.keys(response.data).length;
//     //     let countryArray = [];
//     //     for(var i = 0; i< count; i++){
//     //       countryArray.push({
//     //         value2: response.data[i].iso2,
//     //         label2: response.data[i].name,
//     //       });
//     //       setCountryData(countryArray)
//     //     }
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //   });
//     //   }, [])
//     //   // country api end here.........
      
      
//     //   // state api start here..........
      
//     //   const handleState = (countryCode)=>{
//     //     var config = {
//     //       method: 'get',
//     //       url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
//     //       headers: {
//     //         'X-CSCAPI-KEY': 'NHhKWnpFNEE4b0lJbUtpWmZvallvbmo4V1NHSzM5aVB5RDJucXFZbg=='
//     //       }
//     //     };
        
//     //     axios(config)
//     //     .then(function (response) {
//     //       console.log(JSON.stringify(response.data));
//     //       var count = Object.keys(response.data).length;
//     //     let stateArray = [];
//     //     for(var i = 0; i< count; i++){
//     //       stateArray.push({
//     //         value3: response.data[i].iso2,
//     //         label3: response.data[i].name,
//     //       });
//     //       setStateData(stateArray)
//     //     }
//     //     })
//     //     .catch(function (error) {
//     //       console.log(error);
//     //     });
//     //   }
//     //   // state api end here............
      
//     //   // city api start here..........
      
//     //   const handleCity = (countryCode, stateCode)=>{
//     //     var config = {
//     //       method: 'get',
//     //       url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
//     //       headers: {
//     //         'X-CSCAPI-KEY': 'NHhKWnpFNEE4b0lJbUtpWmZvallvbmo4V1NHSzM5aVB5RDJucXFZbg=='
//     //       }
//     //     };
        
//     //     axios(config)
//     //     .then(function (response) {
//     //       console.log(JSON.stringify(response.data));
//     //       var count = Object.keys(response.data).length;
//     //       let cityArray = [];
//     //       for(var i = 0; i< count; i++){
//     //         cityArray.push({
//     //           value4: response.data[i].id,
//     //           label4: response.data[i].name,
//     //         });
//     //         setCityData(cityArray)
//     //       }
//     //     })
//     //     .catch(function (error) {
//     //       console.log(error);
//     //     });
//     //   }
//     //   // city api end here...........


//     useEffect(() => {
//       // axios = require('axios')
  
//       var config = {
//         method: 'get',
//         url: 'https://api.countrystatecity.in/v1/countries',
//         headers: {
//           'X-CSCAPI-KEY': 'd01BSGhkRE55VTkySEtPVHNXcXRLWmVQV1VGYlkxVTlWVmlCb29BcA=='
//         }
//       };
  
//       axios(config)
//         .then(function (response) {
//           console.log(JSON.stringify(response.data));
//           var count = response.data.length
//           console.log(count,"count");
//           let countryArray = []
//           for (var i = 0; i < count; i++){
//             countryArray.push({
//               value2: response.data[i].iso2,
//               label2: response.data[i].name
//             })
//           }
//           setcountryData(countryArray)
//         })
//         .catch(function (error) {
//           console.log(error);
//         });        
//      },[]);


    

//     const submit=()=>{
//       // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{0,9})+$/
//       // const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       // const reg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
//       // const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
//       // const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/
//       // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,12})+$/
//       if(userName.length<1){
//         Alert.alert("please enter your name")
//       } 
//       else if(email.length<1){
//         Alert.alert("please enter email")
//       }
//       // else if(!reg.test({email})){
//       //   Alert.alert("please enter valid email address")
//       // }
//       else if(password.length<1){
//         Alert.alert("please enter password")
//       }  
//       else if(confirmpassword.length<1){
//         Alert.alert('please confirm your password')
//       }
//       else if(gender.length<1){
//         Alert.alert('please select your gender')
//       }
//       else if(dob.length<1){
//         Alert.alert('please select your DOB')
//       }
//       else if(employeeid.length<1){
//         Alert.alert('please enter your employeeid')
//       }
//       else if(country != null && country.length<1){
//         Alert.alert('please select your country')
//       }
//       else if(state != null && state.length<1){
//         Alert.alert('please select your state')
//       }
//       else if(city != null && city.length<1){
//         Alert.alert('please select your city')
//       }
//       else if(joblocation.length<1){
//         Alert.alert('please select your location')
//       }
//       else if(bloodGroup.length<1){
//         Alert.alert('please select your blood group')
//       }
//       else if(jobProfile.length<1){
//         Alert.alert('please enter your job profile')
//       }
//       else{
//         // Alert.alert("Your account created successfully! Now you can Login your account")
//         Alert.alert("You are successfully signup!",userName)
//         {navigation.navigate("Login")}
//       }   
      
//     } 
    
//   return(
//     <View style={Styles.container}>
//       <StatusBar hidden={true} />
//       <ScrollView>
//       <Image 
//        style={Styles.logo}
//        source ={{uri:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hibvigazow9rhyoj1d52"}}
//       />
//       {/* User name ........... */}
//       <Text style={Styles.username}>Name</Text>
//       <TextInput placeholder="Enter your username"  style={Styles.input}
//       autoCapitalize="none"
//       value={userName}
//        onChangeText={(userName)=>setUserName({userName})}>
//       </TextInput>
      

//       {/* Email Address............ */}
//       <Text style={Styles.username}>Email Address</Text>
//       <TextInput placeholder="Enter your email" style={Styles.input}
//       autoCapitalize="none"
//       value={email}
//       onChangeText={(email)=>setEmail({email})}>

//       </TextInput>

//      {/* password.................. */}
//       <Text style={Styles.username}>Password</Text>
//       <TextInput placeholder="Enter your password" style={Styles.input} 
//       secureTextEntry={true}
//       autoCapitalize="none"
//       value={password}
//       onChangeText={(password)=>setPassword({password})}>

//       </TextInput>

//       {/* confirm password */}
//       <Text style={Styles.username}>Confirm Password</Text>
//       <TextInput placeholder="Confirm your password" style={Styles.input} 
//       secureTextEntry={true}
//       autoCapitalize="none"
//       value={confirmpassword}
//       onChangeText={(password)=>setConfirmpassword({password})}>

//       </TextInput>

//       {/* Gender */}
//       <Text style={Styles.username}>Gender</Text>
//       {/* <TextInput placeholder="Select your gender" style={Styles.input} 
//       autoCapitalize="none"
//       value={gender}
//       onChangeText={(gender)=>setGender({gender})}>

//       </TextInput> */}
//       <Dropdown
//         style={Styles.dropdownInput}
//         placeholderStyle={Styles.placeholderStyle}
//         selectedTextStyle={Styles.selectedTextStyle}
//         inputSearchStyle={Styles.inputSearchStyle}
//         iconStyle={Styles.iconStyle}
//         itemTextStyle={{color:'grey'}}
//         data={Gender}
//         search
//         maxHeight={300}
//         labelField='label1'
//         valueField='value1'
//         placeholder="Select Gender "
//         searchPlaceholder="Search here..."
//         value={genderValue}
//         onChangeText={(text)=>setGenderValue(text)}
//         onChange={(item) => {
//           setGenderValue(item.genderValue);
//           setGender(genderValue); 
//         }} />

//       {/* DOB */}
//       <Text style={Styles.username}>Date of Birth</Text>
//       <TextInput placeholder="select DOB" style={Styles.input} 
//       autoCapitalize="none"
//       value={dob}
//       onChangeText={(dob)=>setDob({dob})}>

//       </TextInput>

//       {/* Employee id */}
//       <Text style={Styles.username}>Employee Id</Text>
//       <TextInput placeholder="employee id" style={Styles.input} 
//       autoCapitalize="none"
//       value={employeeid}
//       onChangeText={(employeeid)=>setEmployeeid({employeeid})}>

//       </TextInput>

//       {/* Country */}
//       <Text style={Styles.username}>Country</Text>
//       {/* <TextInput placeholder="select your country" style={Styles.input} 
//       autoCapitalize="none"
//       value={country}
//       onChangeText={(country)=>setCountry({country})}>

//       </TextInput> */}
//       <Dropdown
//         style={Styles.dropdownInput}
//         placeholderStyle={Styles.placeholderStyle}
//         selectedTextStyle={Styles.selectedTextStyle}
//         inputSearchStyle={Styles.inputSearchStyle}
//         itemTextStyle={{color:'grey'}}
//         iconStyle={Styles.iconStyle}
//         data={countryData}
//         search
//         maxHeight={300}
//         labelField="label2"
//         valueField="value2"
//         placeholder="Select Country "
//         searchPlaceholder="Search here..."
//         value={value2}
//         onChangeText={(text)=>setValue2(text)}
//         onChange={(item) => {
//           console.log(item);
//           setValue2(item.value2);
//           handleState(item.value2)
//           setErrorCountry('');
//           setCountry(item.label2);
//         }}
//       />

//       {/* State */}
//       <Text style={Styles.username}>State</Text>
//       {/* <TextInput placeholder="select your state" style={Styles.input} 
//       autoCapitalize="none"
//       value={state}
//       onChangeText={(state)=>setState({state})}>

//       </TextInput> */}
//       <Dropdown
//         style={Styles.dropdownInput}
//         placeholderStyle={Styles.placeholderStyle}
//         selectedTextStyle={Styles.selectedTextStyle}
//         inputSearchStyle={Styles.inputSearchStyle}
//         iconStyle={Styles.iconStyle}
//         itemTextStyle={{color:'grey'}}
//         data={stateData}
//         search
//         maxHeight={300}
//         labelField="label3"
//         valueField="value3"
//         placeholder="Select State "
//         searchPlaceholder="Search here..."
//         value={value3}
//         //onChangeText={(text)=>setValue3(text)}
//         onChange={item => {
//           setValue3(item.value3);
//           handleCity(value2,item.value3)
//           setErrorState('');
//           setState(item.label3);
//         }}
//       />

//       {/* City */}
//       <Text style={Styles.username}>City</Text>
//       {/* <TextInput placeholder="select your city" style={Styles.input} 
//       autoCapitalize="none"
//       value={city}
//       onChangeText={(city)=>setCity({city})}>

//       </TextInput> */}
//       <Dropdown
//         style={Styles.dropdownInput}
//         placeholderStyle={Styles.placeholderStyle}
//         selectedTextStyle={Styles.selectedTextStyle}
//         inputSearchStyle={Styles.inputSearchStyle}
//         iconStyle={Styles.iconStyle}
//         itemTextStyle={{color:'grey'}}
//         data={cityData}
//         search
//         maxHeight={300}
//         labelField="label4"
//         valueField="value4"
//         placeholder="Select City "
//         searchPlaceholder="Search here..."
//         value={value4}
//         onChangeText={(text)=>setValue4(text)}
//         onChange={(item) => {
//           console.log(item,"city onchange");
//           setValue4(item.value4);
//           setLable4(item.label4);
//           setErrorCity('');
//           setCity(item.label);
//         }}
//       />

//       {/* Job Location */}
//       <Text style={Styles.username}>Job Loaction</Text>
//       <TextInput placeholder="select your job location" style={Styles.input} 
//       autoCapitalize="none"
//       value={joblocation}
//       onChangeText={(joblocation)=>setJobLocation({joblocation})}>

//       </TextInput>

//       {/* Contact no. */}
//       <Text style={Styles.username}>Mobile</Text>
//       {/* <TextInput placeholder="select your mobile number" style={Styles.input} 
//       autoCapitalize="none"
//       value={mobile}
//       onChangeText={(contact)=>setMobile({contact})}>

//       </TextInput> */}
//        <PhoneInput
//             containerStyle={{width: "90%",height: 60,
//             marginTop:5,
//             backgroundColor:'white',
//             marginHorizontal:20}}
//             //ref={phoneInput}
//             textInputProps={{ maxLength: 10 }}
//             // textContainerStyle={{backgroundColor: 'gray', }}
//             //defaultValue={value}
//             defaultCode="IN"
//             layout="first"
//             textInputStyle={{padding:0, color: 'black'}} 
//             onChangeText={(e)=>setMobile(e)}
//             // onChange={handleMobileChange} 
//             // onChangeCountry={(text)=>setCountryCode(text)}
//             // onChangeFormattedText={handleMobileChange}
//             // defaultValue={countryCode}
//             value={mobile}
//             withShadow
//             withDarkTheme
//             // autoFocus
//           />  

//       {/* Blood group */}
//       <Text style={Styles.username}>Blood Group</Text>
//       {/* <TextInput placeholder="select your Blood Group" style={Styles.input} 
//       autoCapitalize="none"
//       value={bloodGroup}
//       onChangeText={(bloodgroup)=>setBloodGroup({bloodgroup})}>

//       </TextInput> */}
//        <Dropdown
//         style={Styles.dropdownInput}
//         placeholderStyle={Styles.placeholderStyle}
//         selectedTextStyle={Styles.selectedTextStyle}
//         inputSearchStyle={Styles.inputSearchStyle}
//         iconStyle={Styles.iconStyle}
//         itemTextStyle={{color:'grey'}}
//         data={BloodGroup}
//         search
//         maxHeight={300}
//         labelField='label1'
//         valueField='value1'
//         placeholder="Select Blood Group "
//         searchPlaceholder="Search here..."
//         value={bloodGroupValue}
//         onChangeText={(text)=>setBloodGroupValue(text)}
//         onChange={(item) => {
//           setBloodGroupValue(item.bloodGroupValue);
//           setBloodGroup(bloodGroupValue); 
//         }} />

//       {/* Profile */}
//       <Text style={Styles.username}>Job Profile</Text>
//       <TextInput placeholder="Enter your job profile" style={Styles.input} 
//       autoCapitalize="none"
//       value={jobProfile}
//       onChangeText={(jobProfile)=>setJobProfile({jobProfile})}>

//       </TextInput>


//       {/* signup button..................... */}
//       <TouchableOpacity style={Styles.button}
//         onPress={()=>{submit()}}>
//         <Text style={Styles.signup}>SignUp</Text>
//       </TouchableOpacity>
//       </ScrollView>
//     </View>
//   )
//  }


// const Styles = StyleSheet.create({
//   logo:{
//     width:"auto",
//     height:80,
//     marginVertical:40,
//     marginHorizontal:50,
//   },
//   username:{
//     marginHorizontal:20,
//     fontSize:18,
//     marginVertical:8,
//   },
//   input:{
//     margin:15,
//     borderWidth:3,
//     borderColor:"skyblue",
//     fontSize:15,
//   },
//   signup:{
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
//     marginHorizontal:100,
//     paddingVertical:20, 
//   },
//   // dropdown: {
//   //   marginHorizontal:20,
//   //   height:40,
//   //   borderBottomColor: 'white',
//   //   borderBottomWidth: 1,
//   //   marginTop:-4,
//   // },
//   placeholderStyle: {
//     fontSize: 15,
//     // color:"white",
//     marginHorizontal:5,
//   },
//   selectedTextStyle: {
//     fontSize: 15,
//     // color:"white",
//   },
//   iconStyle: {
//     width: 20,
//     height: 20, 
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//     color:'black'
//   },
//   dropdownInput:{
//     margin:15,
//     height:55,
//     borderWidth:3,
//     borderColor:"skyblue",
//     fontSize:15,
//   }

// })

// export default SignUp
