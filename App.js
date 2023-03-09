
import 'react-native-gesture-handler';
import React, {useCallback, useEffect} from "react";
import {DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigation/src/Authstack';
import BottomTab from './Navigation/src/BottomTab';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App =()=>{
  const theme = useColorScheme();

  const appearance = useColorScheme();
  const setAppTheme = useCallback(async () => {
    const IS_FIRST = await get('IS_FIRST');
    if (IS_FIRST === null) {
      save('Theme', appearance);
      save('IsDefault', true);
      save('IS_FIRST', true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  return(
    <>
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
    {/* <NavigationContainer theme={theme === 'dark' ? Colors.dark : Colors.light}> */}
      
      <AuthStack/>
      {/* <BottomTab/> */}
      {/* <AppStack/> */}
     
    </NavigationContainer>
    </>
  )
}

export default App



















