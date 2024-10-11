import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListItemFlat = () => {
  const users = [
    { id: 1, name: 'ayaz1', email: 'ayaz@gmail.com' },
    { id: 2, name: 'khan', email: 'ayazkhan1@gmai.com' },
    { id: 3, name: 'ayaz', email: 'ayazkhan2@gmai.com' },
    { id: 4, name: 'khan', email: 'ayazkhan3@gmai.com' },
    { id: 5, name: 'ayaz', email: 'ayazkhan4@gmai.com' },
    { id: 6, name: 'khan', email: 'ayazkhan5@gmai.com' },
    { id: 7, name: 'ayaz', email: 'ayazkhan6@gmai.com' },
    { id: 8, name: 'khan', email: 'ayazkhan7@gmai.com' },
    { id: 9, name: 'ayaz', email: 'ayazkhan8@gmai.com' },
    { id: 10, name: 'khan', email: 'ayazkhan9@gmai.com' },
  ];

  return (
    <View>
      <Text style={styles.title}>Grid List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}  // Ensure unique keys
          // Number of columns for grid layout
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.item}>{item.id}</Text>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 20,
    textAlign: 'center',
    width: '50%',  // Adjusted width for grid items
    height: 30,

  },
  box: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    margin: 5,  // Space between grid items
  },
});

export default ListItemFlat;
