import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export const flatListItemSeparator = () => {
  return <View style={styles.flatlistItemSeparatorStyles} />;
};

export const ListCalls = props => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={props.FlatListItems}
        ItemSeparatorComponent={flatListItemSeparator}
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
};

export const styles = StyleSheet.create({
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
    height: 1,
    width: '100%',
    backgroundColor: 'rgb(0,0,0)',
  },
});
