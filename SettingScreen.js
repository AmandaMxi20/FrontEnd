import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingScreen() {
  return (
      
      <View style={styles.container}>
        <header style={styles.navbar}  >
          <text style={styles.textBase} > Settings</text>
        </header>
        <View>
            <text>Notification</text> 
            <text>Sound</text>
            <text>Camera</text>
            
        </View>
       
       
    
      </View>  
  )  
}
const style = StyleSheet.create({
    container : {

    },
    navbar: {
     height : 40,
     backgroundColor: "Blue"
    },
    textBase: {
      fontSize: 24,
      Color: "White"
    }
})




