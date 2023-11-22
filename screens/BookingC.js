import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground} from 'react-native'
import React from 'react'

const BookingC = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/check1.jpg')} style={styles.success}>
   

    <View>
    <Text style={styles.msg}>{'Your appointment successfully booked'}</Text>
    </View>
    <View>
 
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('DrawerNav');
      }}>
      <Text>Go to Home</Text>
    </TouchableOpacity>

    </View>
    </ImageBackground>
  </View>
);
};
  

export default BookingC

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'green',
        
      },
      success: {
        
        width: '98%',
        height: '97%',
        resizeMode: 'repeat',
marginLeft: 5,
marginRight: 3,
marginTop: 40,
borderRadius: 20,
marginBottom: 30

      },
      msg: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 20,
        alignSelf: 'center',
        marginTop: '140%',
      },
      go: {
       width: " 80%",
       height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop:"13%",
        marginLeft: 30,
      },

      button: {
        backgroundColor: '#4269f5',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
       width: '70%',
       marginLeft: 60,
       marginTop: 20,
      },

})