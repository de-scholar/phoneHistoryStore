import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconContainer from '../components/IconContainer';
import IntroductionTextContainer from '../components/IntroductionTextContainer';
import {SMS_PERMISSIONS} from '../../assets/text/eng/callLogPermissions';

const SmsPermsReqsScreen = props => {
  return (
    <View style={styles.container}>
      <IconContainer
        iconSource={require('../../assets/img/phone-history-store-icon.png')}
      />
      <IntroductionTextContainer textToShow={SMS_PERMISSIONS} />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SmsListScreen')}
        style={styles.touchableBtn}>
        <Text style={styles.text}>Sync your sms</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(100,120,255)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 15,
    color: 'rgb(255,255,255)',
    textAlign: 'center',
  },
  touchableBtn: {
    marginTop: -20,
    marginBottom: 10,
    padding: 5,
    width: '80%',
    borderRadius: 30,
    backgroundColor: 'rgba(200,200,220,0.8)',
  },
});

export default SmsPermsReqsScreen;
