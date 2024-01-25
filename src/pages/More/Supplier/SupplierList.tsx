import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../style';
import styles1 from '../../Products/styles';
import Colors from '../../../shared/colors';

interface Supplier {
  ID: string;
  TenNhaCungCap: string;
  DiaChi: string;
  Email: string;
  SoDienThoai: number;
}

interface SupplierListProps {
  data: Supplier[];
  onSupplierPress: (supplier: Supplier) => void;
}

const SupplierList: React.FC<SupplierListProps> = ({ data, onSupplierPress }) => {
  const renderFooter = () => {
    return (
      <View style={{ height: 100 }} />
    );
  };

  const renderItem = ({ item, index }: { item: Supplier; index: number  }) => (
    <View
      style={[
        {borderRadius:12,},
        styles1.item,
        index % 2 === 0 ? styles1.itemOdd : styles1.itemEven,
      ]}
    >
      <TouchableWithoutFeedback onPress={() => onSupplierPress(item)}>
        <View>
          <Text style={[{ color: 'red', fontSize:16, fontWeight: 'bold', }]}>Supplier: {item.TenNhaCungCap}</Text>
          <Text style={[{ color: 'black' }]}>Phone Number: {item.SoDienThoai}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          { height: 'auto', flex: 1, backgroundColor: Colors.background, borderRadius: 12, marginTop: -15, marginLeft:10, marginRight:10,},
        ]}
      >
        {/* danh sach nha cung cap */}
        <FlatList
          data={data}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          keyExtractor={(item) => item.ID}
        />
        <Text style={[{ height: 50 }]}></Text>
      </View>
    </SafeAreaView>
  );
};
export {Supplier};
export default SupplierList;