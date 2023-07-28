import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'

const Back = () => {
  return (
    <View style={styles.cardStyle}>
      {/* <Text style={styles.text}>Back</Text> */}
      <Image source={require('../src/back.png')} style={styles.ImageStyle} />
    </View>
  )
}

export default Back;

const styles = StyleSheet.create({
    cardStyle:{
        borderWidth:1,
        height:426,
        width:300,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'darkblue',
        // marginTop:100
    },
    text:{
        fontSize:40,
        color:'white'
    },
    ImageStyle:{
      height:'100%',
      width:'100%'
    }
})