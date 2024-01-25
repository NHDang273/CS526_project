import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/Home/HomeScreen';
import NotificationsScreen from './pages/Notifications/NotificationsScreen';
import LoginScreen from './pages/Login/LoginScreen';
import RegisterScreen from './pages/Register/RegisterScreen';
import DetailProfileScreen from './pages/More/Profile/DetailProfileScreen';

import { Ionicons } from '@expo/vector-icons';
import AuthContext from './utils/AuthContext';
import Colors from './shared/colors';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './assets/themes/theme';
import * as ScreenOrientation from 'expo-screen-orientation';

import { Platform, StatusBar } from 'react-native';
import ChangeInformationScreen from './pages/More/Profile/ChangeInformationScreen';
import ResetPasswordScreen from './pages/More/Profile/ResetPasswordScreen';
import InvoicesScreen from './pages/Invoices/InvoicesScreen';
import DetailInvoicesScreen from './pages/Invoices/DetailInvoicesScreen';
import SettingScreen from './pages/More/Settings/SettingScreen';
import More from './pages/More/More';

import { LogBox } from 'react-native';
import InventoryScreen from './pages/Products/Inventory/InventoryScreen';
import SupplierStackScreen from './pages/More/Supplier/index';
import ProductStackScreen from './pages/Products';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

StatusBar.setBarStyle('dark-content');
StatusBar.setBackgroundColor('white');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = ({ isLoggedIn }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Invoices"
        component={InvoicesScreen}
        options={{
          tabBarLabel: 'Invoices',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStackScreen}
        options={{
          tabBarLabel: 'Products',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basket" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };
  // Xoay màn hình
  useEffect(() => {
    const lockScreenOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.ALL
      );
    };

    lockScreenOrientation();

    return () => {
      unlockScreenOrientation();
    };
  }, []);

  const unlockScreenOrientation = async () => {
    await ScreenOrientation.unlockAsync();
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, updateLoggedInStatus }}
    >
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="HomeTabs">
              {() => <HomeTabs isLoggedIn={isLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="DetailProfile" component={DetailProfileScreen} />
            <Stack.Screen name="ChangeInformation" component={ChangeInformationScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />

            <Stack.Screen
              name="SupplierStack"
              component={SupplierStackScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="Inventory" component={InventoryScreen} />
            <Stack.Screen name="DetailInvoices" component={DetailInvoicesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
};

export default App;