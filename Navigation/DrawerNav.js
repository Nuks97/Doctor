import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Logins from '../screens/Logins';

import CustomDrawer from './CustomDrawer';
import BookingC from '../screens/BookingC';
import BookedSessions from '../screens/BookedSessions';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName= "Home"
    drawerContent={(props) => <CustomDrawer {...props} />}
    
    >
    
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="BookingC" component={BookingC} />
   
      
    </Drawer.Navigator>
      
  );
}