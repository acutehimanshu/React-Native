import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [students, setStudents] = useState([]);

  const doSomething = () => {
    fetch('http://192.168.0.106:5050/students')
      .then(res => res.json())
      .then((obj) => {
        console.log(JSON.stringify(obj));
        if (Array.isArray(obj.students)) {
          setStudents(obj.students); // Update state with the student data
        } else {
          console.error("Expected students to be an array");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.rn}</Text>
      <Text style={styles.cell}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title='Fetch Students' onPress={doSomething} />
      {students.length > 0 && (
        <FlatList
          data={students}
          renderItem={renderItem}
          keyExtractor={(item) => item.rn.toString()}
          style={styles.table}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    marginTop: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});
