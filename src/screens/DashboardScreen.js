import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const DashbordScreen = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CallLogPermsReqsScreen')}>
        <Text>Go to calls</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SmsPermsReqsScreen')}>
        <Text>Go to sms</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DashbordScreen;
