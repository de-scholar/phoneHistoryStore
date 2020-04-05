import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  PermissionsAndroid,
  Platform,
  FlatList,
} from 'react-native';
import CallLogs from 'react-native-call-log';

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
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Phone History Store is requesting for permissions',
            message: 'It wants to access your call logs',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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

  FlatListItemSeparator = () => {
    return <View style={styles.flatlistItemSeparatorStyles} />;
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View>
              <Text style={styles.item}>
                Name : {item.name ? item.name : 'Unknown'}
                {'\n'}
                DateTime : {item.dateTime}
                {'\n'}
                Duration : {item.duration}
                {'\n'}
                PhoneNumber : {item.phoneNumber}
                {'\n'}
                RawType : {item.rawType}
                {'\n'}
                TimeStamp : {item.timestamp}
                {'\n'}
                Type : {item.type}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
  flatlistItemSeparatorStyles: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
});

export default CallLogListScreen;
