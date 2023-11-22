import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
//import firebase from 'firebase';
import Firebase from '../FireBase';
//import app from "firebase";
//import db from 'firebase';
//import auth from 'firebase';
import{db} from '../FireBase';
import{auth} from '../FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, serverTimestamp, setDoc,  } from 'firebase/firestore';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';





const RegisterScreen = ({navigation }) => {

 
  // ... Other parts of your component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNames, setFullNames] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [location2, setLocation2] = useState(" ");
  const [ loading, setLoading] = useState(false);
  const [ Role, SetRole] = useState('');
  const [ tion, SetTion] = useState('');

  
  const onPressSignUp = async () => {
    if (lastName === "") {
      alert("Please enter last name before proceeding");
    } else if (fullNames === "") {
      alert("You must enter full name(s)");
    } else if (phoneNumber === "") {
      alert("You must enter phone number");
    } else if (email === "") {
      alert("You must enter a valid email address");
    } else if (password === "") {
      alert("Please create your new password of at least 6 characters");
    } else if (password.length < 6) {
      alert("Password should be more than 6 characters");
    } else if (repeatPassword === "") {
      alert("Enter Confirm password");
    } else if (password !== repeatPassword) {
      alert("Passwords do not match");
    } else if (phoneNumber.length !== 10) {
      alert("Phone number length must be 10");
    } else {
      try {

        setLoading(true);

        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        if (res && res.user) {
          const userData = {
            fullNames,
            lastName,
            email,
            tion,
            Role,
            password, // Note: Storing passwords in plaintext is not recommended for security reasons
            phoneNumber,
            timeStamp: serverTimestamp(),
          };
  
          await setDoc(doc(db, "users", res.user.uid), userData);
          setLoading(false);
          navigation.navigate("Logins");
        }
      } catch (error) {
        setLoading(false);
        alert(error.message);
      }
    }
  };
  
  



  return (
    
    <View style={styles.container}>
      <ImageBackground style={styles.backImage}  source={require('../assets/1327232.jpg')}/>
      <View style={styles.whiteSheet}/>
     
    <ScrollView  >
      <SafeAreaView style = {styles.form}>
    

<Text style={styles.title}>Register</Text>
        




          <Text style={styles.headerText}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
            keyboardType= 'ascii-capable'
          /> 
          

          

          <Text style={styles.headerText}>Full Name(s)</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFullNames}
            value={fullNames}
            placeholder="Full Name(s)"
            KeyboardType= 'ascii-capable '
          />
         

       
          <Text style={styles.headerText}>Role</Text>
          <TextInput
            style={styles.input}
            onChangeText={SetRole}
            value={Role}
            placeholder="Patient or Doctor"
            KeyboardType= 'ascii-capable '
          />

         

         
<Text style={styles.headerText}>Phone Numbers</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="Phone Numbers"
          KeyboardType='numeric'
          />
       
         

      



<Text style={styles.headerText}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"

          />
         


          
          <Text style={styles.headerText}>Location</Text>
          <TextInput
            style={styles.input}
            onChangeText={SetTion}
            value={tion}
            placeholder="Location"
            KeyboardType= 'ascii-capable '
          />

        

          <Text style={styles.headerText}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter Password"
            secureTextEntry
            />
           

            
          <Text style={styles.headerText}>Repeat Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setRepeatPassword}
            value={repeatPassword}
            placeholder="Enter Password"
            secureTextEntry
          />



<View>
<TouchableOpacity onPress={onPressSignUp}style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        
        </View>
        <View style={styles.jk}>


        </View>
      

        </SafeAreaView>
    </ScrollView>
    <View styles={styles.Loader}>
        {loading && <ActivityIndicator size={100} color="#4269f5" />}
        </View>
    </View>

  
   
    
  );
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },

loginText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#4269f5",
    paddingTop: 25,
    marginLeft: 15,
  },
formContainer: {
    //height: DEVICE_HEIGHT * 0.07,
    width: "100%",
     justifyContent:'center',
    // backgroundColor:"red",
    marginTop: 20,
    padding: 5,
    marginLeft: 15,
    height: "12%",
   flex: 1,
   
  },
  headerText: {
    fontWeight: "900",
    fontSize: 20,
    color: "#4269f5",
    
  },
  input: {
    height: "60%",
    width: "90%",
    borderBottomColor: "white",
    borderBottomWidth: 3,
    color: "white",
  },
  buttonStyle: {
    width: "70%",
    height: 55,
    backgroundColor: "#green",
    borderRadius: 50,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  registerText: {
    color: "white",
    fontSize: 17,
    marginLeft: 15,
  },
  registerText: {
    color: "white",
    alignSelf: "flex-start",
    marginHorizontal: 20,
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonStyle: {
    width: "70%",
    height: 55,
    backgroundColor: "#407ad6",
    borderRadius: 50,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  Loader: {
   flex: 1,
    marginVertical: 60,
  


  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
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
    height: 320,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '70%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 70,
   
  },
  form: {
   flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 200,
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

  jk:{

    marginTop: 40,
  },

})

    