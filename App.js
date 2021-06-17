import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Easing,
} from 'react-native';

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  const springValue = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([
      Animated.delay(2000),
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim4, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Logic whenever an iteration finishes...
      Animated.loop(
        Animated.parallel([
          fadeInAndOut1,
          fadeInAndOut2,
          fadeInAndOut3,
          fadeInAndOut4,
          Animated.timing(springValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    });
  };

  let fadeInAndOut4 = Animated.sequence([
    Animated.timing(fadeAnim4, {
      toValue: 0.8,
      duration: 750,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim4, {
      toValue: 0.5,
      duration: 750,
      useNativeDriver: true,
    }),
  ]);
  let fadeInAndOut3 = Animated.sequence([
    Animated.timing(fadeAnim3, {
      toValue: 0.8,
      duration: 750,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim3, {
      toValue: 0.5,
      duration: 750,
      useNativeDriver: true,
    }),
  ]);
  let fadeInAndOut2 = Animated.sequence([
    Animated.timing(fadeAnim2, {
      toValue: 0.8,
      duration: 750,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim2, {
      toValue: 0.5,
      duration: 750,
      useNativeDriver: true,
    }),
  ]);
  let fadeInAndOut1 = Animated.sequence([
    Animated.timing(fadeAnim1, {
      toValue: 0.8,
      duration: 750,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim1, {
      toValue: 0.5,
      duration: 750,
      useNativeDriver: true,
    }),
  ]);

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>
        HOW TO USE
      </Text>
      <Animated.View
        style={[
          styles.fadingContainer1,
          {
            // Bind opacity to animated value
            opacity: fadeAnim1,
          },
        ]}>
        <Text style={styles.fadingText}>PART 1</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer2,
          {
            // Bind opacity to animated value
            opacity: fadeAnim2,
          },
        ]}>
        <Text style={styles.fadingText}>PART 2</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer3,
          {
            // Bind opacity to animated value
            opacity: fadeAnim3,
          },
        ]}>
        <Text style={styles.fadingText}>PART 3</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonRow,
          {
            // Bind opacity to animated value
            opacity: fadeAnim4,
          },
        ]}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          GOT IT!
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  fadingContainer1: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 20,
    justifyContent: 'center',
  },
  fadingContainer2: {
    flex: 2,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 20,
    justifyContent: 'center',
  },
  fadingContainer3: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 20,
    justifyContent: 'center',
  },
  fadingText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonRow: {
    marginTop: 16,
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 25,
    backgroundColor: '#0275d8',
    borderRadius: 15,
  },
});

export default App;
