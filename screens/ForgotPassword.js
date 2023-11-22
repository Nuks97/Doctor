import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
<View style={styles.container}>
  <ImageBackground style={styles.backImage} source={require('../assets/1327232.jpg')}>
    <View style={styles.whiteSheet} />
    <SafeAreaView style={styles.form}>
      <Text style={styles.title}>Reset Password</Text>
      
      <Text style={styles.headerText}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
      />
      
      <TouchableOpacity /* onPress={onPressReset} */ style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </ImageBackground>
</View>
    
    

  )
}

export default ForgotPassword

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
    marginTop: 70,
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
    height: 380,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '55%',
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
  headerText: {
    fontWeight: "900",
    fontSize: 20,
    color: "#4269f5",
    marginTop: 70,
  },
    loginText: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#4269f5",
        paddingTop: 70,
        marginLeft: 60,
        
      },
    
      headerText: {
        fontWeight: "700",
        fontSize: 20,
        color: "#4269f5",

      },
      input: {
        height: 58,
        width: "100%",
        borderBottomColor: "#4269f5",
        borderBottomWidth: 2,
        color: "black",
      },
      buttonStyle: {
            width: "70%",
            height: 55,
            backgroundColor: "lightblue",
            borderRadius: 50,
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
        
      },
      buttonText: {
        color: "white",
        fontSize: 20,
      },

})