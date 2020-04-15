import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import IconContainer from '../../components/IconContainer';
import IntroductionTextContainer from '../../components/IntroductionTextContainer';
import { CALL_LOG_PERMISSIONS } from '../../../assets/text/eng/callLogPermissions';
import styles from '../../styles/allStyles';

const iconPic = require('../../../assets/img/phone-history-store-icon.png');

const CallLogPermsReqsScreen = (props) => {
  CallLogPermsReqsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  const { navigate } = props.navigation;
  let whereToNavigate;
  console.log('These are the props',props);
  return (
    <View style={styles.container}>
      <IconContainer
        iconSource={iconPic}
      />
      <IntroductionTextContainer textToShow={CALL_LOG_PERMISSIONS} />
      <TouchableOpacity
        onPress={() => navigate('CallLogListScreen')}
        style={styles.touchableBtn}
      >
        <Text style={styles.text}>View Call Logs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CallLogPermsReqsScreen;
