import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const DashbordScreen = ({ navigation }) => {
  DashbordScreen.propTypes = {
    navigation: PropTypes.object.isRequired
  };
  const { navigate } = navigation;
  
  return (
  <View>
    <TouchableOpacity
      onPress={() => navigate('CallLogPermsReqsScreen')}
    >
      <Text>Go to calls</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('SmsPermsReqsScreen')}
    >
      <Text>Go to sms</Text>
    </TouchableOpacity>
  </View>
)};

export default DashbordScreen;
