import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../shared/colors';
import { id, writeSupplierData } from './hehe';


const NewSupplier = ({ navigation }) => {
  
    const [Name, setName] = useState('daccuong');
    const [Address, setAddress] = useState('Nguyễn Đắc Cường');
    const [phoneNumber, setPhoneNumber] = useState('012345678');
    const [email, setEmail] = useState('daccuong123@gmail.com');

    const [isNameFocused, setNameFocused] = useState(false);
    const [isAddressFocused, setAddressFocused] = useState(false);
    const [isPhoneNumberFocused, setPhoneNumberFocused] = useState(false);
    const [isEmailFocused, setEmailFocused] = useState(false);

    const [initialName, setInitialName] = useState('daccuong');
    const [initialAddress, setInitialAddress] = useState('Nguyễn Đắc Cường');
    const [initialPhoneNumber, setInitialPhoneNumber] = useState('012345678');
    const [initialEmail, setInitialEmail] = useState('daccuong123@gmail.com');
  
    const handleEditPress = (field) => {
      switch (field) {
        case 'Name':
          // Xử lý chỉnh sửa trường Name
          break;
        case 'Address':
          // Xử lý chỉnh sửa trường Address
          break;
        case 'phoneNumber':
          // Xử lý chỉnh sửa trường phoneNumber
          break;
        case 'email':
          // Xử lý chỉnh sửa trường email
          break;
        default:
          break;
      }
    };

    const handleReset = (field) => {
      switch (field) {
        case 'Name':
          setName(initialName);
          break;
        case 'Address':
          setAddress(initialAddress);
          break;
        case 'phoneNumber':
          setPhoneNumber(initialPhoneNumber);
          break;
        case 'email':
          setEmail(initialEmail);
          break;
        default:
          break;
      }
    };
  
    const goBack = () => {
        navigation.navigate('More');
    };
    const handleSavePress = () => {
      console.log('Save was pressed.');
      writeSupplierData(id, Name, Address, phoneNumber, email);
      goBack();
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={[{padding: 5}]} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>New supplier</Text>
        </View>
        <ScrollView style={[{margin: 10, borderRadius: 12,}]}>
          <View style={[{height:'auto', backgroundColor: Colors.background, borderRadius: 12,}]}>
            <View
              style={[
                styles.textContainer,
                isNameFocused && { borderColor: 'red' }
              ]}
            >
              <Text style={styles.textLeft}>Name</Text>
              <TextInput
                style={styles.textRight}
                placeholder='Name'
                onChangeText={(text) => setName(text)}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
              />
              <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('Name')}>
                <Ionicons name="refresh" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.textContainer,
                isAddressFocused && { borderColor: 'red' }
              ]}
            >
              <Text style={styles.textLeft}>Address</Text>
              <TextInput
                style={styles.textRight}
                placeholder='Address'
                onChangeText={(text) => setAddress(text)}
                onFocus={() => setAddressFocused(true)}
                onBlur={() => setAddressFocused(false)}
              />
              <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('Address')}>
                <Ionicons name="refresh" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.textContainer,
                isPhoneNumberFocused && { borderColor: 'red' }
              ]}
            >
              <Text style={styles.textLeft}>Phone Number</Text>
              <TextInput
                style={styles.textRight}
                placeholder='Phone number'
                onChangeText={(text) => setPhoneNumber(text)}
                onFocus={() => setPhoneNumberFocused(true)}
                onBlur={() => setPhoneNumberFocused(false)}
              />
              <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('phoneNumber')}>
                <Ionicons name="refresh" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.textContainer,
                isEmailFocused && { borderColor: 'red' }
              ]}
            >
              <Text style={styles.textLeft}>Email</Text>
              <TextInput
                style={styles.textRight}
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
              <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('email')}>
                <Ionicons name="refresh" size={20} color="black"/>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[{height:50}]}></Text>
        </ScrollView>
  
        {/* Save */}
        <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}>
          <TouchableOpacity style={styles.borderButtonSave} onPress={handleSavePress}>
            <Text style={[styles.textinButonSave]}>Save</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop:30,
    backgroundColor: Colors.backgroundHome,
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor:Colors.background,
    paddingBottom:10,
    },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign:'left',
    flex:1,
    },
  textLeft: {
    padding:15,
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    alignSelf:'center',
  },
  textRight: {
    padding:15,
    flex: 2,
    color: 'gray',
    fontSize: 16,
    textAlign: 'left',
  },
  textContainer: {
    height:80,
    flexDirection:'row',
    borderWidth:1,
    borderColor:Colors.background,
    marginTop:0.5,
    borderRadius:12,
  },
  borderButtonSave: {
    marginLeft:15,
    marginRight:15,
    borderRadius:18,
    backgroundColor:Colors.blue,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinButonSave:{
    color: 'white',
    fontSize: 16,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default NewSupplier;