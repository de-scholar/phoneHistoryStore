import React, {Component} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import CallLogs from 'react-native-call-log';
import {ListCalls} from '../components/ListingCalls';

class CallLogListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
  }

  componentDidMount = async () => {
    if (Platform.OS !== 'ios') {
      try {
        //ask for permission
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
          CallLogs.loadAll().then(call => this.setState({FlatListItems: call}));
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
  };

  render() {
    return <ListCalls FlatListItems={this.state.FlatListItems} />;
  }
}

export default CallLogListScreen;
