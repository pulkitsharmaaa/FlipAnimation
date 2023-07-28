import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Front from './card/Front';
import Back from './card/Back';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const rotate = useSharedValue(0);

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]) + 'deg';

    return {
      transform: [{ rotateY: withTiming(rotateValue, { duration: 1000 }) }],
    };
  });

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]) + 'deg';

    return {
      transform: [{ rotateY: withTiming(rotateValue, { duration: 1000 }) }],
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

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          console.log(rotate.value);
          rotate.value = rotate.value ? 0 : 1;
        }}
      >
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
  },
});
