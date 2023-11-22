import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import{db} from '../FireBase';
import { addDoc, collection, doc, serverTimestamp, setDoc,  } from 'firebase/firestore';


let DaysList = [];
const Appointment = ({route, navigation}) => {

 const { item } = route.params;
    
    const[selectedSlot, setSelectedSlot]=useState(-1);
    const [selectedDay, setSelectedDay] = useState(-1);
    const [slots, setSlots] = useState([
      {slot: '10:00-12:00PM' },
      {slot: '12:00-02:00PM'},
      {slot: '02:00-04:00PM' },
      {slot: '04:00-06:00PM'},
      {slot: '06:00-08:00PM'},
      {slot: '08:00-11:00PM'},
    ]);
const[selectedgender, setSelectedgender] = useState('Male');
const [days, setDays] = useState([]);
const[ name, SetName] = useState('');
const [isPressed, setIsPressed] = useState( false);

  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({day:i, selected: false});
    }
    setDays(DaysList);
  }, []);
  const getDays = month => {
    let days = 1;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;

  };

  const handleBookNowPress = async () => {
    if (selectedDay === -1) {
      // Date not selected
      alert("Please select a date.");
    } else if (selectedSlot === '') {
      // Time slot not selected
      alert("Please select a time slot.");
    } else if (selectedgender === '') {
      // Gender not selected (assuming -1 represents not selected)
      alert("Please select your gender.");
    } else if (name === "") {
      alert("Please enter your name ");
    } else {
      try {
        // All required fields are selected, proceed with booking
        // You can perform your booking logic here
        // For example, you can make an API request to book the appointment
  
        const docRef = await addDoc(collection(db, "Bookings"), {
          name: name,
          Date: selectedDay,
          slot: selectedSlot,
          Gender: selectedgender
        });
  
       
  
        // Show a success message after the data is saved
        navigation.navigate("BookingC");
      } catch (error) {
        // Handle any errors that occur during data saving
        console.error("Error saving data: ", error);
        alert("An error occurred while booking. Please try again later.");
      }
    }
  };
  

 
  
  

  return (
    <SafeAreaView style= {styles.container}>
      <ImageBackground /* source= {require('../assets/head.png')}*/style={styles.background}>
    <ScrollView>
    <View style={styles.container}>
        <Image source = {require('../assets/Dpro.png')} style= {styles.Dpro}/>
       <Text style={styles.name}>DR {route.params?.lastName} { route.params?.fullNames}</Text> 
     
      <Text style={styles.special}>Skin Doctor</Text>
      <Text style={styles.heading}>Select Date</Text>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 70,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedDay == index ? '#4269f5' : 'white',
                    borderWidth: selectedDay == index ? 0 : 1,
                    marginLeft: 10,
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    if (item.day < new Date().getDate()) {
                    } else {

                        console.log (setSelectedDay(index))
                      setSelectedDay(index);
                    }
                  }}>
                  <Text style={{color: selectedDay == index ? '#fff' : 'blue'}}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>



      <Text style={styles.heading}>Available Slots</Text>
      
      <View>
          <FlatList
            numColumns={2}
            data={slots}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    {borderColor: index == selectedSlot ? 'blue' : 'black'},
                  ]}
                  onPress={() => {
                    setSelectedSlot(index);
                  }}>
                  <Text
                    style={{color: index == selectedSlot ? 'blue' : 'black'}}>
                    {item.slot}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

      <Text style={styles.heading}> Patient's Name</Text>
      <TextInput style={styles.nameInput}
      placeholder='Enter your name'
      value={name}
          onChangeText={text => SetName(text)}
      />

<Text style={styles.heading}> Select Gender</Text>
<View style={styles.genderView}>
<TouchableOpacity style={ [styles.gender,{ borderColor: selectedgender === 'Male' ? '#4269f5': 'black'}]} onPress= {()=> {setSelectedgender('Male');}}>
<Text style={styles.gtext}> Male </Text>
</TouchableOpacity>

<TouchableOpacity style={[ styles.gender,{ borderColor: selectedgender=== 'Female' ? '#4269f5': 'black'} ]} onPress= {()=> {setSelectedgender('Female');}}>
<Text style={styles.gtext}> Female </Text>
</TouchableOpacity>

</View>
<View>

<TouchableOpacity  onPress={handleBookNowPress}  style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
</View>
<View style={styles.space}>


</View>


    </View>
    </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  )
}

export default Appointment

const styles = StyleSheet.create({
container: {
flex :1,
backgroundColor: ' green'


},
Dpro:{
width: 100,
height: 90,
alignSelf: 'center',
marginTop: 60,
borderRadius: 30,
},
name: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 22,

},
timeSlot:{

    width: '45%',
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    

},
slots:{
marginTop: 30,

},
heading:{
fontSize: 18,
fontWeight: '700',
marginTop: 15,
marginLeft: 15,

},
nameInput:{

    borderRadius: 10,
    marginTop: 10,
    width: '95%',
    height: 45,
    borderWidth: 3,
    marginLeft: 2,
    alignSelf: 'center',
    paddingLeft: 10,
},
genderView:{
marginTop: 10,
justifyContent: "center",
alignItems:'center',
flexDirection:'row'

},
gender:{

    borderRadius: 50,
    width: '45%',
    height: 70,
   justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    margin: 5,
},
gtext: {
fontSize: 20,
fontWeight:'500',
 
},
button: {
    backgroundColor: '#4269f5',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: '70%',
    marginLeft: 60,
},
special: {
fontSize: 16,
fontWeight: '700',
alignSelf: 'center',
marginTop: 5,
color: 'red',
padding: 10,


},
space: {
    marginTop: 20,
},
timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background:{
    flex: 1,
    resizeMode: 'cover'
  },
})