import React from 'react';
import {Text, View, TouchableOpacity,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const DashbordScreen = ({ navigation }) => {
  DashbordScreen.propTypes = {
    navigation: PropTypes.object.isRequired
  };
  const { navigate } = navigation;
  
  return (
  <View style={styles.dashBoardContainer}>
      <TouchableOpacity
        style={styles.dashBoardBtns}
        onPress={() => navigate('CallLogPermsReqsScreen')}>
          <Text style={styles.text}>Incoming calls</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.dashBoardBtns}>
      <Text style={styles.text}>Outgoing calls</Text>
    </TouchableOpacity>
      <TouchableOpacity
        style={styles.dashBoardBtns}>
          <Text style={styles.text}>Missed calls</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.dashBoardBtns}>
      <Text style={styles.text}>Rejected calls</Text>
    </TouchableOpacity>
      <TouchableOpacity
        style={styles.dashBoardBtns}>
          <Text style={styles.text}>Inbox SMS</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.dashBoardBtns}
    >
      <Text style={styles.text}>Sent box SMS</Text>
    </TouchableOpacity>
      <TouchableOpacity
        style={styles.dashBoardBtns}>
          <Text style={styles.text}>Draft SMS</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.dashBoardBtns}>
      <Text style={styles.text}>Outbox SMS</Text>
    </TouchableOpacity>
  </View>
)};

const styles = StyleSheet.create({
  dashBoardContainer: {
    backgroundColor: '#4B4A67',
    height: '100%',
    padding: '10%',
    justifyContent: 'center',
  },
  dashBoardBtns: {
    padding: '4%',
    margin: '1%',
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'rgb(200,200,220)',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default DashbordScreen;
