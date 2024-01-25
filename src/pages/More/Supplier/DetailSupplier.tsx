import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../style';
import Colors from '../../../shared/colors';
import { deleteSupplierData } from './hehe';
import { Alert } from 'react-native';


const DetailSupplier = ({ navigation, route }) => {
  const { supplier, iD } = route.params;
  console.log(supplier );
  console.log(iD);

  const handleInfoIconPress = (supplier) => {
    navigation.navigate('EditSupplier', {supplier});
    console.log('Adjust was pressed.');
  };
  const handelDeletePress = () => {
    Alert.alert(
      'Xác nhận xóa',
      'Bạn có chắc chắn muốn xóa?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteSupplierData(iD);
          },
        },
      ],
      { cancelable: true }
    );
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{supplier.TenNhaCungCap}</Text>
        <TouchableOpacity onPress={handleInfoIconPress}>
          <View style={styles.headerTextContainer}>
            <Ionicons name="pencil" size={25} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={[{height: 'auto', marginTop: 20, backgroundColor: Colors.background, borderRadius: 12,}]}>
        <View>
        <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>ID</Text>
            <Text style={styles.textRight}>{supplier.ID}</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Name</Text>
            <Text style={styles.textRight}>{supplier.TenNhaCungCap}</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Address</Text>
            <Text style={styles.textRight}>{supplier.DiaChi}</Text>
          </View>
          <View style={[styles.textContainer, styles.row,]}>
            <Text style={[styles.textLeft, {flex:2}]}>Phone Number</Text>
            <Text style={styles.textRight}>{supplier.SoDienThoai}</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Email</Text>
            <Text style={styles.textRight}>{supplier.Email}</Text>
          </View>
        </View>
        <Text style={[{height:50}]}></Text>
        {/* Delete */}
        <View style={[{flex:1, marginTop:50}]}>
          <TouchableOpacity style={[{backgroundColor: Colors.diamond, width:150, alignSelf:'center'}]} onPress={handelDeletePress}>
              <Text style={[styles.textLeft, {textAlign:'center',padding: 5, color: 'white', flex:1,}]}>Delete</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailSupplier;