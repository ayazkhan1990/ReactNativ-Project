import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const GridList = () => {
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
    { id: 17, name: 'Nehakhan2' },
    { id: 18, name: 'Nehakhan3' },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30, padding:10}}>Grid List</Text>

      <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
        {
          users.map((item) => <Text style={styles.item}>{ item.name }</Text>)
        }
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 137,
    height: 130,
    padding:10, 
  },
});

export default GridList