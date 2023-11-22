import { TouchableOpacity,StyleSheet, Text, TextInput, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { auth} from '../FireBase'
import {app} from '../FireBase'
import {  signInWithEmailAndPassword } from 'firebase/auth'




const Logins = ({navigation}) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const onPressLogIn = () => {
  if (email.length == 0 || password.length == 0) {
    alert("Please fill in all the fields");
    return;
  } else {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigation.navigate( 'DrawerNav');;
    })
      .catch((error) => {
        alert(error);
      });
  }
};


  return (

  <View style= {styles.container}>
    <ImageBackground style={styles.backImage}  source={require('../assets/1327232.jpg')}/>
   
     <View style={styles.whiteSheet}/>
    <SafeAreaView style={styles.form}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.headerText}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.headerText}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
     
      
      <TouchableOpacity  onPress={onPressLogIn} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    
      <Text
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }} 
        style={styles.registerText}
      >
        Create account
      </Text>

      <Text
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }} 
        style={styles.registerText}
      >
        Forgot password
      </Text>
      </SafeAreaView>
      </View>
     
  )
}

//<ImageBackground  source={require('../assets/1327232.jpg')} Style ={styles.Image}></ImageBackground>

export default Logins

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#4269f5",
    alignSelf: "center",
    paddingBottom: 24,
    marginTop: 60,
  },
  input: {
    height: 58,
    width: "100%",
    borderBottomColor: "#4269f5",
    borderBottomWidth: 3,
    color: "black",
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 70,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#4269f5',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  registerText: {
    color: "#4269f5",
    alignSelf: "flex-start",
    marginHorizontal: 5,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
  headerText: {
    fontWeight: "900",
    fontSize: 20,
    color: "#4269f5",
    marginTop: 5
  },
})
