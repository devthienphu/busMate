import React from 'react'

import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./src/screens/onBoarding";
import SignIn from "./src/screens/signIn";
import SignUp from "./src/screens/signUp";
import Home from "./src/screens/home";
import BusLookUp from "./src/screens/busLookUp"
import Weather from "./src/screens/weather"
import Feedback from "./src/screens/feedback";
import FindBus from "./src/screens/findBus";
import BusDetail from "./src/screens/busDetail";
import Report from "./src/screens/report";
import Notification from "./src/screens/notification";
import FindRoute from './src/screens/findRoute';
import RouteDetail from './src/screens/routeDetail';
import BookTicket from './src/screens/bookTicket';
import MyTicket from './src/screens/myTicket';
import Profile from './src/screens/profile';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.otf'),
    'Poppins-BlackItalic': require('./assets/fonts/Poppins-BlackItalic.otf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.otf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.otf'),
    'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.otf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.otf'),
    'Poppins-ExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.otf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.otf'),
    'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.otf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.otf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.otf'),
    'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.otf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.otf'),
    'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.otf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.otf'),
    'Poppins-ThinItalic': require('./assets/fonts/Poppins-ThinItalic.otf')
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BusLookUp" component={BusLookUp} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="FindBus" component={FindBus} />
        <Stack.Screen name="BusDetail" component={BusDetail} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="FindRoute" component={FindRoute} />
        <Stack.Screen name="RouteDetail" component={RouteDetail} />
        <Stack.Screen name="BookTicket" component={BookTicket} />
        <Stack.Screen name="MyTicket" component={MyTicket} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
