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

const DetailSupplier = ({ navigation, route }) => {
  const { supplier } = route.params;
  console.log(supplier );

  const handleInfoIconPress = () => {
    navigation.navigate('EditSupplier');
    console.log('Adjust was pressed.');
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
            <Text style={styles.textLeft}>Name</Text>
            <Text style={styles.textRight}>NCC A</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Address</Text>
            <Text style={styles.textRight}>123 Đường ABC, Quận 1</Text>
          </View>
          <View style={[styles.textContainer, styles.row,]}>
            <Text style={[styles.textLeft, {flex:2}]}>Phone Number</Text>
            <Text style={styles.textRight}>0123456789</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Email</Text>
            <Text style={styles.textRight}>daccuong123@gmail.com</Text>
          </View>
        </View>
        <Text style={[{height:50}]}></Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailSupplier;