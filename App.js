import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from  './screens/Home';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import Logins from './screens/Logins';
import DrawerNav from './Navigation/DrawerNav';
import Appointment from './screens/Appointment';
import BookingC from './screens/BookingC';
import BookedSessions from './screens/BookedSessions';
import ProfileEditScreen from './screens/ProfileEditScreen'
import Confirmation from './screens/Confirmation';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="Logins"
      screenOptions={{headerShown: false}}>


<Stack.Screen name ="DrawerNav" component={DrawerNav}/>
          
<Stack.Screen  name="Logins" component={Logins} /> 

               <Stack.Screen name = "RegisterScreen" component = {RegisterScreen}/>
             <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
             <Stack.Screen name = "Appointment" component={Appointment}/>
      <Stack.Screen name = "BookingC" component={BookingC}/>
      <Stack.Screen name = "BookedSessions" component={BookedSessions}/>
      <Stack.Screen name = "ProfileEditScreen" component={ProfileEditScreen}/>
      <Stack.Screen name = "Confirmation" component={Confirmation}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
// <Stack.Screen name="Home" component={HomeStack} />
