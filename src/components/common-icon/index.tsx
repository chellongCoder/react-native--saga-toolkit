import commonStyles from '@theme/commonStyles';
import React, { memo } from 'react';
import { View, Text, Image, StyleProp, ViewStyle, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';

const _Icon = ({
  icon,
  size = 2.5,
  tintColor,
  style,
  ml,
  mr,
  mb,
  mt,
  mh,
  mv,
}: {
  icon: number;
  size?: number;
  tintColor?: string;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  mh?: number;
  mv?: number;
}) => {
  return (
    <Animated.View
      style={[
        {
          width: size * 10,
          height: size * 10,
        },
        { marginLeft: ml, marginRight: mr, marginTop: mt, marginBottom: mb, marginHorizontal: mh, marginVertical: mv },
        style,
      ]}
    >
      <FastImage tintColor={tintColor} resizeMode="contain" style={commonStyles.image} source={icon} />
    </Animated.View>
  );
};

export const Icon = memo(_Icon);
