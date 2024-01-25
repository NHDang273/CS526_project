import React, { useState, useContext } from 'react';
import { View, Image, Dimensions, StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import Colors from '../../shared/colors';
import Bar from '../../components/Bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../utils/AuthContext';
import path from 'path';

import { getDatabase, ref, onValue } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOpvdy5a6y6sL4t1x8EMxnFfbzh9q1b_8",
  authDomain: "myproject-c9b45.firebaseapp.com",
  databaseURL: "https://myproject-c9b45-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myproject-c9b45",
  storageBucket: "myproject-c9b45.appspot.com",
  messagingSenderId: "910814047722",
  appId: "1:910814047722:web:4d87fd4713973a221f9693",
  measurementId: "G-7YQHWEKD2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
// Xây dựng tham chiếu đến nút "Email" trong "TAIKHOAN"
// Xây dựng hàm để tìm người dùng dựa trên email
function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    const usersRef = ref(db, '/__collections__/TaiKhoan');
    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      const foundUser = Object.keys(users).find((userId) => {
        return users[userId].Email === email;
      });
      resolve(foundUser);
    }, (error) => {
      reject(error);
    });
  });
}

// Xây dựng tham chiếu đến nút "Email" trong "TAIKHOAN"
function GETEmail(userId) {
  return new Promise((resolve, reject) => {
    const emailRef = ref(db, `/__collections__/TaiKhoan/${userId}/Email`);
    onValue(emailRef, (snapshot) => {
      const emailValue = snapshot.val();
      resolve(emailValue);
    }, (error) => {
      reject(error);
    });
  });
}

// Xây dựng tham chiếu đến nút "Password" trong "TAIKHOAN"
function GETPassword(userId) {
  return new Promise((resolve, reject) => {
    const passwordRef = ref(db, `/__collections__/TaiKhoan/${userId}/MatKhau`);
    onValue(passwordRef, (snapshot) => {
      const passwordValue = snapshot.val();
      resolve(passwordValue);
    }, (error) => {
      reject(error);
    });
  });
}

function LoginScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const { updateLoggedInStatus } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userCheck, setuserCheck] = useState(false);
  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  const handleSignupPress = () => {
    goToRegisterScreen();
    console.log('Signup pressed');
  };

  const handleLinkPress = (link) => {
    console.log('Link pressed:', link);
  };

  const handleLoginPress = async () => {
    setEmailError(email === '');
    setPasswordError(password === '');
  
    if (email === '' || password === '') {
      console.log('Email and password are required');
      return;
    }
  
    try {
      const foundUserId = await findUserByEmail(email);
  
      if (!foundUserId) {
        console.log('User not found');
        return;
      }
  
      const Femail = await GETEmail(foundUserId);
      const Fpassword = await GETPassword(foundUserId);
  
      if (email !== Femail || password !== Fpassword) {
        setuserCheck(true);
        return;
      } else {
        setuserCheck(false);
      }
  
      navigation.navigate('HomeTabs', { screen: 'Home' });
      updateLoggedInStatus(true);
      console.log('Login pressed');
    } catch (error) {
      console.log('Error retrieving user:', error);
    }
  };
  

  const handleFacebookPress = () => {
    console.log('Facebook pressed');
  };

  const handleGooglePress = () => {
    console.log('Google pressed');
  };

  const handleResetEmailPress = () => {
    console.log('Resend activation email pressed');
  };

  const handleForgotPasswordPress = () => {
    console.log('Forgot password pressed');
  };

  const renderErrorMessage = (error) => {
    return error && <Text style={styles.errorMessage}>Please enter your {error}</Text>;
  };

  return (
    <View style={styles.background}>
      <Bar />
      <TouchableOpacity style={styles.rightButton}>
        <Ionicons name="language" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView>
      <Image
        source={require('../../assets/images/wolf2.png')}
        style={[styles.image, { width: windowWidth }]}
      />
      <View style={styles.borderInput}>
        <View style={[styles.border, emailError && styles.errorBorder]}>
          <Image
            source={require('../../assets/images/email.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
          />
          {renderErrorMessage(emailError)}
        </View>
        <View style={[styles.border, passwordError && styles.errorBorder]}>
          <Image
            source={require('../../assets/images/lock.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
          />
          {renderErrorMessage(passwordError)}
        </View>
        {userCheck && <Text style={styles.errorMessage}>Email or password is incorrect!</Text>}
      </View>
      <View>
        <View>
          <TouchableOpacity style={styles.borderButtonLogin} onPress={handleLoginPress}>
            <Text style={styles.textinButonLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.borderButtonFace} onPress={handleFacebookPress}>
            <Image
              source={require('../../assets/images/facebook.png')}
              style={[styles.iconImage, { width: windowWidth }]}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.borderButtonGoogle} onPress={handleGooglePress}>
            <Image
              source={require('../../assets/images/google.png')}
              style={[styles.iconImage, { width: windowWidth }]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleSignupPress} style={styles.borderButtonSignup}>
            <Text style={styles.textinButonSignup}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.noBorder}>
            <Text style={styles.textinButtonReset}>Resend activation email</Text>
          </TouchableOpacity>

            <TouchableOpacity style={styles.noBorder}>
                <Text style={styles.textinButtonReset}>Forgot password</Text>
            </TouchableOpacity>
        </View>
      </View>
      {/* Chèn các điều khoản và chính sách */}
      <View style={styles.container1}>
          <Text style={styles.text}> By clicking Log in, you agree to our 
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => handleLinkPress('từ thứ nhất')}
            >
              <Text style={styles.linkText}> Privacy Policy </Text>
            </TouchableHighlight>
            and that you have read our
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => handleLinkPress('từ thứ hai')}
            >
              <Text style={styles.linkText}> Terms and Conditions </Text>
            </TouchableHighlight>
            .
          </Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    height: 60,
    flex: 1,
    marginLeft: 15,
  },
  icon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    paddingTop: 60,
    marginLeft: 5,
  },
  border: {
    height: 60,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    paddingLeft: 10,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1.5,
    flexDirection: 'row',
  },
  errorBorder: {
    height: 60,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    paddingLeft: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
  },
  errorMessage: {
    position: 'absolute',
    bottom: -18,
    fontSize: 10,
    color: 'red',
  },
  borderInput: {
    marginTop: 50,
  },
  image: {
    resizeMode: 'contain',
    width: 108,
    height: 108,
    alignSelf: 'center',
    marginTop: 60,
  },
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  borderButtonLogin: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
    borderRadius: 18,
    backgroundColor: Colors.blue,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinButonLogin: {
    color: 'white',
    fontSize: 16,
  },
  textinButonSignup: {
    color: Colors.darkgray,
    fontSize: 16,
  },
  textinButtonReset: {
    color: Colors.darkgray,
    fontSize: 14,
  },
  text: {
    color: Colors.darkgray,
    fontSize: 11,
    padding: 10,
  },
  linkText: {
    color: 'blue',
    fontSize: 11,
    fontStyle: 'italic',
  },
  borderButtonSignup: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    borderRadius: 18,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light,
    borderColor: Colors.border,
    borderWidth: 1,
    borderBottomWidth: 3,
    flex: 1,
  },
  borderButtonFace: {
    marginBottom: 10,
    marginLeft: 15,
    marginEnd: 15,
    marginTop: 5,
    borderRadius: 18,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light,
    borderColor: Colors.border,
    borderWidth: 1,
    borderBottomWidth: 2,
    flexBasis: 50,
    flexGrow: 1,
  },
  borderButtonGoogle: {
    marginBottom: 10,
    marginRight: 15,
    marginTop: 5,
    marginStart: 15,
    borderRadius: 18,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light,
    borderColor: Colors.border,
    borderWidth: 1,
    borderBottomWidth: 3,
    flexBasis: 50,
    flexGrow: 1,
  },
  noBorder: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 18,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    alignContent: 'center',
  },
  rightButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginTop: 30,
    marginRight: 10,
  },
  iconImage: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
});

export default LoginScreen;