import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {styles, flatListItemSeparator} from '../components/ListingCalls';

const ListingSms = props => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={props.FlatListItems}
        ItemSeparatorComponent={flatListItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item}>
              SMS ID: {item._id}
              {'\n\n'}
              Address : {item.address}
              {'\n\n'}
              Date: {new Date(item.date).toString()}
              {'\n\n'}
              Type: {item.type}
              {'\n\n'}
              Body :{item.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListingSms;
