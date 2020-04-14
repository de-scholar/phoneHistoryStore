import React, {Component} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import ListingSms from '../components/ListingSms.js';
import SmsAndroid from 'react-native-get-sms-android';

export default class SmsListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
  }
  componentDidMount = async () => {
    if (Platform.OS !== 'ios') {
      try {
        const smsPermsReq = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          {
            title: 'Phone History Store',
            message:
              'It is requesting for SMS permissions to access your SMS Boxes',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (smsPermsReq === PermissionsAndroid.RESULTS.GRANTED) {
          const smsFilter = {
            box: 'sent',
          };
          SmsAndroid.list(
            JSON.stringify(smsFilter),
            fail => {
              console.log(
                'Retrieving sms failed because of the following error ',
                fail,
              );
            },
            (count, smsList) => {
              const smsArr = JSON.parse(smsList);
              this.setState({FlatListItems: smsArr});
            },
          );
        }
      } catch (err) {
        alert(err);
      }
    } else {
      alert(
        'You cannot access sms list on iPhone, because of security concern!',
      );
    }
  };
  render() {
    return <ListingSms FlatListItems={this.state.FlatListItems} />;
  }
}
