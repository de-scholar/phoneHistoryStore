import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const IconContainer = props => {
  return (
    <View>
      <Image style={styles.iconContainer} source={props.iconSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 50,
    height: 350,
    width: 350,
  },
});

export default IconContainer;
