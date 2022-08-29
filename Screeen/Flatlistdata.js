import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import FlatListItems from './FlatListItems';

const Flatlistdata = () => {
  const stories = [
    {
      key: 1,
      name: 'zeus',

      img: require('./die-g43384c835_1280.png'),
    },
    {
      key: 2,
      name: 'prime',
      img: require('./instagram-gf5f3b56a1_1280.png'),
    },
    {
      key: 3,
      name: 'hades',
      img: require('./lion-ged70c1069_1280.png'),
    },
    {
      key: 4,
      name: 'nexus',
      img: require('./twitter-g638dc98bf_1280.png'),
    },
    {
      key: 5,
      name: 'nexus',
      img: require('./die-g43384c835_1280.png'),
    },
    {
      key: 6,
      name: 'nexus',
      img: require('./whatsapp-g57224acbb_1920.png'),
    },
    {
      key: 7,
      name: 'nexus',
      img: require('./die-g43384c835_1280.png'),
    },
    {
      key: 8,
      name: 'nexus',
      img: require('./die-g43384c835_1280.png'),
    },
  ];

  return (
    <View>
      <FlatList
        horizontal={true}
        data={stories}
        renderItem={({item}) => {
          return <FlatListItems Image={item.img} Title={item.name} />;
        }}
      />
    </View>
  );
};

export default Flatlistdata;

const styles = StyleSheet.create({
  text: {
    margin: 5,
    fontSize: 20,
    color: 'black',
  },
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             