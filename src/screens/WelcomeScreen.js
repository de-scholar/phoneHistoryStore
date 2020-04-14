import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconContainer from '../components/IconContainer';
import IntroductionTextContainer from '../components/IntroductionTextContainer';
import { WELCOME_TEXT } from '../../assets/text/eng/welcomeText';

const WelcomeScreen = () => (
  <View style={styles.container}>
    <IconContainer
      iconSource={require('../../assets/img/phone-history-store-icon.png')}
    />
    <IntroductionTextContainer textToShow={WELCOME_TEXT} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(100,120,255)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
