import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../style';
import SupplierList from './SupplierList';
import { getSupplierData } from './DataSupplier';

const SupplierScreen = ({ navigation }) => {
  const [supplierData, setSupplierData] = useState([]);

  useEffect(() => {
    getSupplierData()
      .then((nhaCungCapArray) => {
        setSupplierData(Object.values(nhaCungCapArray));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSupplierPress = (supplier) => {
    const index = supplierData.indexOf(supplier);
    const iD = supplierData[index].ID;
    navigation.navigate('DetailSupplier', { supplier, iD });
  };

  console.log(supplierData);

  const handleAddPress = () => {
    navigation.navigate('NewSupplier');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Suppliers</Text>
        <TouchableOpacity onPress={handleAddPress} style={[{marginRight: 10,}]}>
            <Ionicons name="add" size={30} color="blue" />
          </TouchableOpacity>
      </View>
      {/* danh sach nha cung cap */}
      <SupplierList data={supplierData} onSupplierPress={handleSupplierPress} />
    </SafeAreaView>
  );
};
export default SupplierScreen;