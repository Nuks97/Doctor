import { ImageBackground, StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
  
  
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import{db} from '../FireBase';
import{auth} from '../FireBase';
import { useState,useEffect } from 'react';
import { doc,getDoc } from 'firebase/firestore';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';

//import { useAuth } from '@react-native-firebase/auth'
//import { getFirestore } from 'firebase/firestore';

//const db= getFirestore();

const Home = ({route,navigation}) => {
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const[userData, setUserData] = useState({});
const[ IsDoctor, SetRole] = useState(false);
const [doctorData, setDoctorData] = useState([]);

const itemData = {
  // Your item data here
};



  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, "users", userId); // Assuming your users collection is "users"
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserData(userData);
          setEmail(userData.email);
          SetRole(userData.Role)
          //if (userData.hasOwnProperty("lastName") && userData.hasOwnProperty("email")) {
            //setLastName(userData.lastName); // Corrected function name
            //setEmail(userData.email);
         // }
        }
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchDoctorUserData = async () => {
      const collectionRef = collection(db, 'users'); // Replace 'users' with your collection name
      const q = query(collectionRef, where('Role', '==', 'Doctor')); // Use 'q' instead of 'query'
  
      try {
        const querySnapshot = await getDocs(q); // Use 'q' here
        const doctorUserData = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          doctorUserData.push(userData);
           // Log the user data for doctors
        });

        setDoctorData(doctorUserData);
        console.log(doctorUserData);

      } catch (error) {
        console.error('Error fetching doctor user data: ', error);
      }
    };
  
    fetchDoctorUserData();
  }, [db]);
  
  


// const [isAdmin, setIsAdmin] = useState(false);

  /*useEffect(() => {
    getUserInfomation();
  }, []);

  const getUserInfomation = async () => {
    const docRef = doc(db, "users" );
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  const userData = docSnap.data();
  if (userData.hasOwnProperty("lastname") && userData.hasOwnProperty("email")) {
    setlastName("Name:", userData.lastNamename);
    setEmail("Email:", userData.email);
  } else {
    console.log("Name or Email field missing in document:", docSnap.id);
  }
} else {
  console.log("No such document!");
}

  };
*/


  return (
    <View style={styles.Wrapper}>
      <ImageBackground  source= {require('../assets/head.png')}style={styles.background}>
      <ScrollView style={styles.Wrapper}>
        <Image
          source={require('../assets/banner.jpg')} // Check this path
          style={styles.banner}
        />
       
        <Text style={styles.heading}>Nearby Doctors</Text>
        <View style={{marginTop: 20, alignItems: 'center'}}>  
        <FlatList
  
data={doctorData}
keyExtractor={(item)=> item}
renderItem ={({item})=> (


  <View style={styles.docItem}>
    <Image
                      source={require('../assets/Dpro.png')}
                      style={styles.docImg}
                    />
  <View style={styles.itemView}>
  <View style={styles. details}>

<Text> DR : {item.lastName} {item.fullNames}  </Text>
<Text> Email: {item.email}</Text>
<Text> Location: {item.tion}</Text>


</View>
<TouchableOpacity
  onPress={() => {
    navigation.navigate('Appointment', item);
  }}
>
  <View
    style={{
      width: 150,
      height: 40,
      backgroundColor: 'blue', // Example background color
      justifyContent: 'center',
      alignSelf: "center",
      borderRadius: 10,
      marginTop: 10,
    }}
  >
    <Text style={{ color: 'white', alignSelf: "center" }}>Book Appointment</Text>
  </View>
</TouchableOpacity>

</View>

</View>
)}
numColumns={2}

/>

</View>
        
      </ScrollView>
      </ImageBackground>
    </View>
  );
 
  
  
}

export default Home

const styles = StyleSheet.create({

  Wrapper:{
    flex: 1,
 
  },

    banner: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 5,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },

  TextView:{ 
padding: 40,
color: 'red',
marginTop: 20

  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  docItem: {
    width: '45%',
    backgroundColor: '#4269f5',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
    height: 230,

  },
  inputContainer: {
    width: '100%',
    height: '25%',
    padding: 25,
    alignContent: 'center ',
    marginTop: 100,
  },
  menuIconHolder: {
   // backgroundColor: "red",
    height: "100%",
    width: "15%",
    justifyContent: "baseline",
    alignItems: "baseline",
    left: 0,
   
   
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },

  details:{

padding: 5,

  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
  background:{
    flex: 1,
    resizeMode: 'cover'
  },
})