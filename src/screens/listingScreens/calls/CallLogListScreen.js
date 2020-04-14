import React, { Component } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import CallLogs from 'react-native-call-log';
import { ListCalls } from '../../../components/ListingCalls';

class CallLogListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
  }

  async componentDidMount() {
    if (Platform.OS !== 'ios') {
      try {
        // permission
        const callPermsGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Phone History Store',
            message:
              'Phone History Store is requesting for permissions to access your call logs',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (callPermsGranted === PermissionsAndroid.RESULTS.GRANTED) {
          const allCalls = await CallLogs.loadAll();
            // .then((call) => this.setState({ FlatListItems: call }));
          const incomingCalls = [];
          allCalls.forEach((currCall) => { 
            if (currCall.rawType === 1) {
              currCall.callType = 'Incoming call'
              incomingCalls.push(currCall);
            };
          });
          this.setState({ FlatListItems: incomingCalls });
        } else {
          alert('Access Call log permissions denied');
        }
      } catch (err) {
        alert(err);
      }
    } else {
      alert(
        'Sorry! You cannot get call logs on iPhone because of the security concern!',
      );
    }
  }

  render() {
    const { FlatListItems } = this.state;
    return <ListCalls FlatListItems={FlatListItems} />;
  }
}

export default CallLogListScreen;
