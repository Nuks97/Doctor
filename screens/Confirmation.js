import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Confirmation = ({route,navigation}) => {
  const { selectedDay, selectedSlot, fullNames, lastName } = route.params;

  const Slots = () => {
    if (selectedSlot === 0) {
      return '08:00-10:00 AM';
    } else if (selectedSlot === 1) {
      return '10:00-12:00 AM';
    } else if (selectedSlot === 2) {
      return '12:00-02:00 PM';
    } else if (selectedSlot === 3) {
      return '02:00-04:00 PM';
    } else if (selectedSlot === 4) {
      return '04:00-06:00 PM';
    } else if (selectedSlot === 5) {
      return '06:00-08:00 PM';
    }
    // Return a default value or handle other cases if needed
    return 'Slot not selected';
  };
  

  return (
    <View style= {styles. container}>
     <View style= {styles.say}>
      <Text> You are  booking a consultation with : </Text>
      </View>

      <View style= {styles.icon }>
      
      <Text style={styles.name}>DR : {lastName} { fullNames} </Text> 
 
</View>
 <View style= {styles.icon } >
 
  <View style={styles.arrow }> 
 
  
 <MaterialIcons name="today" size={25} color="black" />
 <Text>  </Text>
 </View>
      <Text style={styles.name}> Day : {selectedDay+1 } th </Text>
      </View> 
      <View style= {styles.icon }>

        <View style={styles.arrow } >

          <Text> </Text>
      <Entypo name="time-slot" size={25} color="black" />
      </View>
      <Text style={styles.name}> Slot : {Slots()}</Text>
      </View>
    </View>
  )
}


{/*
  selectedDay: selectedDay, // Pass selectedDay
  selectedSlot: selectedSlot, 
  lastName: route.params?.lastName, // Pass lastName
  fullNames: route.params?.fullNames, // Pass selectedSlot
*/}

export default Confirmation

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: 'green',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        justifyContent: 'center',
       
        
        },
        icon:{
          flexDirection: "row",
          paddingLeft : 10,
          marginTop: 15,
          alignSelf: ''
        },
        arrow: {
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 5,
          //backgroundColor: "green",
        marginRight: 10,

        },
name: {
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 3,

},
say: { 

  alignSelf: 'center'
}
})