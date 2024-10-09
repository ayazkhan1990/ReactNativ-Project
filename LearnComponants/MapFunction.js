import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const MapFunction = () => {
  
  const users = [
    { id: 1, name: 'ayaz' },
    { id: 2, name: 'khan' },
    { id: 3, name: 'ayaz' },
    { id: 4, name: 'khan' },
    { id: 5, name: 'ayaz' },
    { id: 6, name: 'khan' },
    { id: 7, name: 'ayaz' },
    { id: 8, name: 'khan' },
    { id: 9, name: 'ayaz' },
    { id: 10, name: 'khan' },
    { id: 11, name: 'ayaz1' },
    { id: 12, name: 'khan2' },
    { id: 13, name: 'ayaz3' },
    { id: 14, name: 'khan4' },
    { id: 15, name: 'ayaz5' },
    { id: 16, name: 'Nehakhan1' },
    { id: 16, name: 'Nehakhan2' },
    { id: 16, name: 'Nehakhan3' },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Sample</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor:"blue",
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin:10,
  },
});

export default MapFunction