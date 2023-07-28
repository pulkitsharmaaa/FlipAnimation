// this code is used for testing different approch. we are not using this file in our peoject.
// ignore

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import React from 'react';

import Front from './card/Front';

import Back from './card/Back';

import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';




const App = () => {

  const rotate = useSharedValue(0);




  const frontAnimatedStyles = useAnimatedStyle(() => {

    return {

      transform: [{ rotateY: `${interpolate(rotate.value, [0, 1], [0, 180])}deg` }]

    };

  });




  const backAnimatedStyles = useAnimatedStyle(() => {

    return {

      transform: [{ rotateY: `${interpolate(rotate.value, [0, 1], [180, 360])}deg` }]

    };

  });




  return (

    <View style={styles.container}>

      <View style={{ alignSelf: 'center' }}>

        <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>

          <Front />

        </Animated.View>

        <Animated.View style={[styles.backcard, backAnimatedStyles]}>

          <Back />

        </Animated.View>

      </View>

      <TouchableOpacity style={styles.btn} onPress={() => {

        rotate.value = rotate.value ? 0 : 1;

        rotate.value = withTiming(rotate.value, { duration: 1000 }, (finished) => {

          if (finished) {

            console.log(rotate.value);

          }

        });

      }}>

        <Text style={styles.btnText}>Flip</Text>

      </TouchableOpacity>

    </View>

  );

};




export default App;




const styles = StyleSheet.create({

  container: {

    flex: 1,

    paddingTop: 100,

  },

  btn: {

    height: 50,

    backgroundColor: 'green',

    width: 100,

    borderRadius: 10,

    justifyContent: 'center',

    marginTop: 25,

    alignSelf: 'center',

  },

  btnText: {

    fontSize: 25,

    alignSelf: 'center',

    color: 'white',

  },

  frontcard: {

    position: 'absolute',

    backfaceVisibility: 'hidden',

  },

  backcard: {

    backfaceVisibility: 'hidden',

    transform: [{ rotateY: '180deg' }],

  },

});


