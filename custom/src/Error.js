import React, {useEffect, useState} from "react";
import { View, Text, ActivityIndicator} from "react-native";

const Error=()=>{
    const [isLoad, setIsLoad] = useState(false)
  
    useEffect(()=>{
        setIsLoad(true)
        setTimeout(()=>{
         setIsLoad(false)
        }, 4000)
    }, []); 

    return(
        <View style={{marginHorizontal:20}}>
            {
          isLoad ? <ActivityIndicator color={'skyblue'} size={'large'} style={{top:200}} animating={isLoad}/> :
          <View>
            <Text style={{color:'skyblue', fontSize:20, fontWeight:'bold', marginTop:10}}>Error</Text>
            <Text>Something want wrong! not authorized this app by the client.</Text>
            </View>
           }

        </View>
    )
}

export default Error