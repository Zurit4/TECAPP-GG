import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { View } from 'react-native';

export default function FadeInView({ children, delay = 0, slide = false }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(slide ? 20 : 0); // slide: movimiento vertical al aparecer

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800, delay });
    translateY.value = withTiming(0, { duration: 800, delay });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
}
