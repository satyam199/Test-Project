import React,{useState} from 'react';
import {Text, View, ScrollView, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from 'react-native-element-dropdown';


const EditProfile = () => {

  const[mobile, setMobile] = useState('')

  // const[gender, setGender] = useState('')

  const [genderValue, setGenderValue] = useState(null);

  const [bloodGroupValue, setBloodGroupValue] = useState(null);

  const Gender =[
    { label1: 'Male', value1: 'Male' },
    { label1: 'Female', value1: 'Female' },
  ]

  const BloodGroup =[
    { label1: 'A RhD positive (A+)', value1: '1' },
    { label1: 'A RhD negative (A-)', value1: '2' },
    { label1: 'B RhD positive (B+)', value1: '3' },
    { label1: 'B RhD negative (B-)', value1: '4' },
    { label1: 'O RhD positive (O+)', value1: '5' },
    { label1: 'O RhD negative (O-)', value1: '6' },
    { label1: 'AB RhD positive (AB+)', value1: '7' },
    { label1: 'AB RhD negative (AB-)', value1: '8' },
  ]


  return (
    <View style={Styles.container}>
    <ScrollView>
    <StatusBar hidden={true} />
    <Image 
       style={Styles.logo}
       source ={{uri:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hibvigazow9rhyoj1d52"}}
      />
      {/* User name ........... */}
      <Text style={Styles.username}>Name</Text>
      <TextInput placeholder="Enter your username"  style={Styles.input}
      autoCapitalize="none">
      </TextInput>
      

      {/* Email Address............ */}
      <Text style={Styles.username}>Email Address</Text>
      <TextInput placeholder="Enter your email" style={Styles.input}
      autoCapitalize="none">
      </TextInput>

      {/* Profile */}
      <Text style={Styles.username}>Job Profile</Text>
      <TextInput placeholder="Enter your job profile" style={Styles.input} 
      autoCapitalize="none">
      </TextInput>

      {/* Employee id */}
      <Text style={Styles.username}>Employee Id</Text>
      <TextInput placeholder="employee id" style={Styles.input} 
      autoCapitalize="none">
      </TextInput>

      {/* Job Location */}
      <Text style={Styles.username}>Job Loaction</Text>
      <TextInput placeholder="select your job location" style={Styles.input} 
      autoCapitalize="none">
      </TextInput>
      
      {/* Contact no. */}
      <Text style={Styles.username}>Mobile</Text>
      <PhoneInput
            containerStyle={{width: "90%",height: 60,
            marginTop:5,
            backgroundColor:'white',
            marginHorizontal:20}}
            textInputProps={{ maxLength: 10 }}
            defaultCode="IN"
            layout="first"
            textInputStyle={{padding:0, color: 'black'}} 
            onChangeText={(e)=>setMobile(e)}
            value={mobile}
            withShadow
            withDarkTheme
            // autoFocus
          />  

       {/* Gender */}
      <Text style={Styles.username}>Gender</Text>
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
        value={genderValue}
        onChangeText={(text)=>setGenderValue(text)}
        onChange={(item) => {
          setGenderValue(item.genderValue);
          // setGender(genderValue); 
        }} />

        {/* Blood group */}
      <Text style={Styles.username}>Blood Group</Text>
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
        value={bloodGroupValue}
        onChangeText={(text)=>setBloodGroupValue(text)}
        onChange={(item) => {
          setBloodGroupValue(item.bloodGroupValue);
          // setBloodGroup(bloodGroupValue); 
        }} />

        {/* Submit button..................... */}
      <TouchableOpacity style={{marginHorizontal:20, height:45, backgroundColor:'#ff8c00', borderRadius:12, marginTop:50, marginBottom:20}}>
        <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', marginTop:10, color:'skyblue'}}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
    </View>
  );
};
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
  dropdownInput:{
    margin:15,
    height:55,
    borderWidth:3,
    borderColor:"skyblue",
    fontSize:15,
  }
})
export default EditProfile;