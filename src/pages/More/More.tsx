import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../shared/colors';
import { Dimensions } from 'react-native';

const More = ({ navigation }) => {

    const handleUserPress = () => {
        navigation.navigate('DetailProfile');
        console.log('Profile was pressed.');
      };
      const handleCompanyPress = () => {
        navigation.navigate('Register');
        console.log('Company was pressed.');
      };
      const handleSettingsPress = () => {
        navigation.navigate('Setting');
        // Xử lý khi nút Settings được nhấn
        console.log('Settings');
      };
    
      const handleTermsPress = () => {
        // Xử lý khi nút Terms được nhấn
        console.log('Terms');
      };
    
      const handleLogoutPress = () => {
        // Xử lý khi nút Logout được nhấn
        navigation.navigate('Login');
        console.log('Logout');
      };

      const handleSupplierPress = () => {
        console.log('Suppliers');
        navigation.navigate('Supplier');
      }

      const handleInventoryPress = () => {
        navigation.navigate('Inventory');
      }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:Colors.backgroundHome}}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>

            {/* Thông tin người dùng */}
            <View style={{ height: 'auto', backgroundColor: Colors.background, padding: 20, borderBottomLeftRadius: 18, borderBottomRightRadius: 18}}>
                {/* Phần User */}
                <TouchableOpacity style={[styles.borderButton, {paddingBottom: 15,}]} onPress={handleUserPress}>
                    <View style={styles.row}>
                    <Image
                        source={require('../../assets/images/wolf2.png')}
                        style={styles.iconUser}
                    />
                        <View style={[{flex: 1, marginLeft: 15,}]}>
                                <Text style={styles.upperText}>Nguyễn Đắc Cường</Text>
                                <Text style={styles.lowerText}>Chi nhánh trung tâm</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={[styles.row, {marginBottom:-15}]}>
                    <TouchableOpacity style={[styles.borderButtonMembership, styles.row]}>
                        <Ionicons name="medal" size={25} style={styles.iconMember} />
                        <Text style={styles.textMembership}>Diamond Member</Text>
                        {/* Bấm vào đây để chuyển chế độ membership */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCompanyPress} style={styles.company}>
                        <Text style={[styles.bottomText, {flex:1}]}>Tên công ty</Text>
                        <View style={[styles.iconNext,]}>
                            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Các nút tùy chọn */}
            <View style={{ height: 'auto', padding: 10, }}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.row]} onPress={handleSupplierPress}>
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Supplier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.row]} onPress={handleInventoryPress}>
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Inventory</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Import</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Export</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Import</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Export</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Import</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Export</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Import</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Export</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Import</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.row]} >
                        <Ionicons name= 'add' size={24} style={styles.icon} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Export</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* Các cài đặt */}
            <View style={{height: 'auto'}}>
                <View style={[{margin:15, borderRadius:12, backgroundColor: Colors.background}]}>
                    <TouchableOpacity style={[styles.button1, styles.borderButton, styles.row]} onPress={handleSettingsPress}>
                        <Ionicons name="md-settings" size={25} style={[styles.icon, styles.iconSettings]} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button1, styles.borderButton, styles.row]} onPress={handleTermsPress}>
                        <Ionicons name="md-document" size={25} style={[styles.icon, styles.iconDocument]} />
                        <Text style={[styles.buttonLabel, {marginStart: 10,}]}>Terms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button1, styles.row]} onPress={handleLogoutPress}>
                        <Ionicons name="md-log-out" size={25} style={[styles.icon, styles.iconLogout]} />
                        <Text style={[styles.buttonLabel, {marginStart: 10, color: 'red'}]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 'auto', backgroundColor:'white', margin:15, borderRadius:12}}>
              <Text style={[styles.text, { backgroundColor: Colors.backgroundHome, color: 'gray', padding: 30,}]}>Version: 1.0.0</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      paddingTop:20,
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
    },
    profileContainer: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
      },
    row: {
        flexDirection: 'row',
      },
    upperText: {
        marginTop: 3,
        fontSize: 18,
      },
    lowerText: {
        marginTop: 5,
        fontSize: 14,
        color: 'dimgray',
      },
    bottomText: {
        marginTop: 5,
        fontSize: 14,
      },
    textMembership: {
        fontSize: 13,
        paddingLeft: 10,
        paddingRight: 5,
        color: Colors.background,
      },
    iconUser: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
      },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'dimgray',
        marginTop: 13,
        marginBottom: 2,
      },
    borderButtonMembership: {
        marginTop: 5,
        borderRadius: 6,
        height: 30,
        width: 'auto',
        alignItems: 'center',
        backgroundColor: Colors.blue,
      },
    iconNext: {
        marginTop: 5,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      },
    iconMember: {
        color: Colors.background,
        marginRight: -5,
        marginLeft: 5,
      },
    company: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:5,
        flex:1,
      },
      button: {
        flex:1,
        height: 70,
        margin: 5,
        padding:10,
        alignItems:'center',
        backgroundColor: Colors.background,
        borderRadius: 12,
        borderColor: Colors.light,
        borderWidth: 1,
      },
      icon: {
        color: Colors.blue,
      },
      buttonLabel: {
        fontSize: 16,
      },
      button1: {
        backgroundColor: Colors.background,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:12,
        margin: 5,
      },
      borderButton: {
        borderBottomWidth:1,
        borderBottomColor: 'gray',
      },
      iconSettings: {
        color: 'gray',
      },
      iconDocument: {
        color: 'gray',
      },
      iconLogout: {
        color: 'red',
      },
  });

export default More;