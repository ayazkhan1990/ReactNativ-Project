import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Exstyle from '../style';

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [display, setDisplay] = useState(false);

  // Function to reset all input fields
  const resetValue = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false); // Optionally hide the display when reset
  };

  return (
    <View>
      {!showForm ? (
        <View style={{ paddingBottom: 10 }}>
          <Button title="Show Form" onPress={() => setShowForm(true)} />
        </View>
      ) : (
        <View>
          <Text style={styles.textBox}>Simple Form</Text>
          <TextInput
            style={Exstyle.textinput}
            placeholder="Enter The Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            style={Exstyle.textinput}
            placeholder="Enter The Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={Exstyle.textinput}
            placeholder="Enter The Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
              value={password}
          />
          <View style={{ paddingBottom: 10 }}>
            <Button title="Print Details" onPress={() => setDisplay(true)} />
          </View>

          <Button title="Clear" onPress={resetValue} />
        </View>
      )}

      {display && (
        <View>
          <Text style={styles.textBox}>Name: {name}</Text>
          <Text style={styles.textBox}>Email: {email}</Text>
          <Text style={styles.textBox}>Password: {password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default SimpleForm;
