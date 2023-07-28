import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const Front = () => {
  return (
    <View style={styles.cardStyle}>
      {/* <Text style={styles.text}>Front</Text> */}
      <Image source={require('../src/front.jpg')} style={styles.ImageStyle} />
    </View>
  )
}

export default Front;

const styles = StyleSheet.create({
    cardStyle:{
        borderWidth:1,
        height:426,
        width:300,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'skyblue',
        // marginTop:100
    },
    text:{
        fontSize:40,
        color:'black'
    },
    ImageStyle:{
      height:'100%',
      width:'100%'
    }
})