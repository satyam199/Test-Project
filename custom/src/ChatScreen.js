import React from 'react';
import {Text, View, StatusBar, ScrollView} from 'react-native';
import externalStyle from '../../coustomStyle/src/styleSheet';

const ChatScreen = () => {
  return (
    <View>
    <StatusBar hidden={true} />
     {/* header bar start here.............. */}
      <View style={externalStyle.headerBar}>
            <Text style={{color:'#87ceeb', textAlign:'center', fontSize:25, marginTop:15}}>Chat Here</Text>
      </View>
      {/* header bar end here............... */}
      <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontWeight:'bold'}}>Hello, This is your chat screen...!</Text>
      <Text>Update soon....!</Text>
    </View>
    </ScrollView>
    </View>
  );
};
export default ChatScreen;