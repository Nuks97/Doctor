// BookedSessions.js

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore"; // Import Firestore functions
import { db } from "../FireBase";
import { auth } from "../FireBase";

const BookedSessions = () => {
  const [bookedSessions, setBookedSessions] = useState({}); // Initialize as an object
  const [bookingData, setBookingData] = useState({});

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db, "users");

      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
    };

    fetchProducts();
  }, [items]);
  console.log(items);

  return (
    <View style={styles.container}>
<FlatList
data={items}
keyExtractor={(item)=> item}
renderItem ={({item})=> (
  <View style={styles.itemView}>
  <View>
<Text> {item.email}</Text>
<Text> {item.lastName}</Text>



</View>

</View>
)}
/>
<Text> peter</Text>

     </View>
  );
};

export default BookedSessions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

});
