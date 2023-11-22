import { StyleSheet, Text, View, TouchableOpacity,  Alert, ImageBackground, TextInput, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { useState } from 'react';
const ProfileEditScreen = () => {

  const [userData, setUserData] = useState(null);

  return (
    <View style={styles.container}>
    <ScrollView >
      <SafeAreaView style={styles.form}>
      
    <Text style={styles.headerText}>Last Name</Text>
          <TextInput
            style={styles.input}
            //onChangeText={setLastName}
            //value={lastName}
            placeholder="lastName"
            keyboardType= 'ascii-capable'
          /> 
          
          <Text style={styles.headerText}>FullNames</Text>
          <TextInput
            style={styles.input}
            //onChangeText={setLastName}
            //value={lastName}
            placeholder="FullNames"
            keyboardType= 'ascii-capable'
          /> 
          
          <Text style={styles.headerText}>Location</Text>
          <TextInput
            style={styles.input}
            //onChangeText={setLastName}
            //value={lastName}
            placeholder="Location"
            keyboardType= 'ascii-capable'
          /> 
          
          <Text style={styles.headerText}>Specialisation</Text>
          <TextInput
            style={styles.input}
            //onChangeText={setLastName}
            //value={lastName}
            placeholder="Specialisation"
            keyboardType= 'ascii-capable'
          /> 
          
          <Text style={styles.headerText}>Email</Text>
          <TextInput
            style={styles.input}
            //onChangeText={setLastName}
            //value={lastName}
            placeholder="Email"
            keyboardType= 'ascii-capable'
          /> 

      
      </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default ProfileEditScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
 
  input: {
    height: 58,
    width: "105%",
    borderBottomColor: "black",
    borderBottomWidth: 3,
    color: "black",
    marginTop: 10,
    
  },
  form: {
    flex: 1,
     justifyContent: 'center',
     marginHorizontal: 30,
     marginTop: 200,
     marginLeft: 10,
   },
   headerText: {
    fontWeight: "900",
    fontSize: 20,
    color: "#4269f5",
    
  },

})