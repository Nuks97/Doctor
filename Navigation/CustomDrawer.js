import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import { doc,getDoc } from 'firebase/firestore';
import{db} from '../FireBase';
import{auth} from '../FireBase';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Logins from '../screens/Logins';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const CustomDrawer = ({ navigation }) => {

    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const[userData, setUserData] = useState({});
    const[ IsDoctor, SetRole] = useState('')
 
    
    
    
      useEffect(() => {
        const fetchUserData = async () => {
          if (auth.currentUser) {
            const userId = auth.currentUser?.uid;
            const userDocRef = doc(db, "users", userId); // Assuming your users collection is "users"
            const userDocSnap = await getDoc(userDocRef);
    
            if (userDocSnap.exists()) {
              const userData = userDocSnap.data();
              setUserData(userData);
              SetRole(userData.Role)
            }
          }
        };
    
        fetchUserData();
      }, []);


  return (
    
        <View style= { styles.Container}>
           
          <ImageBackground source={require('../assets/head.png')} style={styles.bgImageStyle}>
          <Image source ={require( "../assets/profile.png")} style= { styles.profile}/>
            
            <View style={styles.icon}>
            <AntDesign name="user" size={25} color="black" /> 
                 <Text style={styles.nameText}>{userData.lastName}  {userData.fullNames}</Text>
                </View>
            <View style={styles.icon}>
                  <MaterialIcons
                    name="email"
                    size={25}
                    color="black"
                  />
                  <Text style={styles.phoneNumberText}>{userData.email}</Text>
                </View>
            
          </ImageBackground>


          {IsDoctor ? (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate("PostNotification")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                  <MaterialCommunityIcons
                    name="account"
                    size={35}
                    color="blue"
                  />
                  <Text style={styles.optionName}>View Appointments </Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={35}
                    color="white"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("Function Coming Soon")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                  <MaterialIcons
                    name="bookmark-border"
                    size={35}
                    color="blue"
                  />
                  <Text style={styles.optionName}>Inquiry</Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={35}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Function Coming Soon")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                  <MaterialIcons
                    name="bookmark-border"
                    size={35}
                    color="blue"
                  />
                  <Text style={styles.optionName}>Reciepts</Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={35}
                    color="white"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Users")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                  <MaterialIcons name="info-outline" size={35} color="blue" />
                  <Text style={styles.optionName}>Users</Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={35}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => alert("Function Coming Soon")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                <FontAwesome name="ambulance" size={24} color="white" />
                  <Text style={styles.optionName}>Get an Ambulence  </Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="white"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("Function Coming Soon")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                  <MaterialIcons
                    name="payment"
                    size={29}
                    color="white"
                  />
                  <Text style={styles.optionName}>Payments</Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="white"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("Function Coming Soon")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                <Fontisto name="prescription" size={24} color="white" />
                  <Text style={styles.optionName}>Prescription</Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="white"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("BookedSessions")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                <AntDesign name="book" size={24} color="white" />
                  <Text style={styles.optionName}>Booked Appointments</Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="white"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("Function Coming Soon")}
                style={styles.option}
              >
                <View style={styles.iconTextName}>
                  <MaterialIcons name="info-outline" size={29} color="white" />
                  <Text style={styles.optionName}>Inquiry</Text>
                </View>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </>
          )}

          
      <View style={ styles.logout}>
      <TouchableOpacity
            onPress={() => navigation.navigate("Logins")}
            style={styles.option1}
          >
            <View style={styles.iconTextName}>
              <MaterialCommunityIcons name="logout" size={40} color="#63b9eb" />
              <Text style={styles.optionName1}>Sign Out</Text>
            </View>
            <View style={styles.arrow}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={35}
                color="white"
              />
            </View>
          </TouchableOpacity>
          </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    bgImageStyle: {
       //  backgroundColor: "#eb7a34",
       padding: 16,
       paddingTop : 48,
        width: "undefined",
        //justifyContent: "center",
        //alignItems: "center",
        marginTop: 30,
    //resizeMode : 'cover',
    boarderRadius: 70,
    
    },

    profile:{

      height: 70,
      width: 100,
      borderRadius: 60,
      marginBottom: 0,
      alignSelf: "center",
    
     
    },
    Container : {
      flex: 1,
      backgroundColor: "white"
    },
    iconTextName: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
       
        //backgroundColor: "red",
      },

      arrow: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
        //backgroundColor: "green",
      },
      option: {
        backgroundColor: "#63b9eb",
        width: "98%",
        marginTop: 15,
        flexDirection: "row",
        borderRadius: 10,
        padding: 10,
      
        paddingLeft: 10,
      },
      nameText: {
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 10,
        alignSelf: "center"
      },
      phoneNumberText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 20,
        alignSelf: "center",
        paddingLeft: 10,
      },
logout: {  

    width: "100%",
    height: 70,
    marginTop: 100,
   backgroundColor: " white"
},
optionName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  icon:{
    flexDirection: "row"
  },
  option1: {

    backgroundColor: "white",
    width: "98%",
    marginTop: 5,
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
  
    paddingLeft: 10,
    
  },
  optionName1:{
    color: "#63b9eb",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,

  },

})