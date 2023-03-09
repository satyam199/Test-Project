import React from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { color } from "react-native-reanimated";

const ListScreen = ()=>{
    const friends = [
        {
            name: 'Satyam',
            age: 23,
            mail:'satyam@gmail.com'
        },
        {
            name: 'Shivam',
            age: 26,
            mail:'shivam@gmail.com'
        },
        {
            name: 'Sundaram',
            age: 20,
            mail:'sundaram@gmail.com'
        },  
        {
            name: 'Amandeep',
            age: 25,
            mail:'aman@gmail.com'
        },
        {
            name: 'Vibhakar',
            age: 23,
            mail:'vibhakar@gmail.com'
        },
        {
            name: 'Arvind',
            age: 26,
            mail:'arvind@gmail.com'
        },
        {
            name: 'Sanjay',
            age: 20,
            mail:'sanjay@gmail.com'
        },  
        {
            name: 'Prabhas',
            age: 25,
            mail:'prabhas@gmail.com'
        },
        {
            name: 'Abhishek',
            age: 25,
            mail:'abhishek@gmail.com'
        }
    ]
    return(
        <View>
            <FlatList data={friends} 
            // horizontal
            // showsHorizontalScrollIndicator={true}
            renderItem={({item})=>{
                return (
                <TouchableOpacity>
                <Text style={Style.text}>Name: {item.name},  Age: {item.age},  Mail: {item.mail}</Text>
                
                </TouchableOpacity>
                )
            }}/>
        
        </View>
        
    )

}

const Style = StyleSheet.create({
    text:{
        fontSize:20,
        marginVertical:10,
        color:"darkred",
    }
})

export default ListScreen