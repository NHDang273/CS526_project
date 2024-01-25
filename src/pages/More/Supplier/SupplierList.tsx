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
import Colors from '../../../shared/colors';

interface Supplier {
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

  const renderItem = ({ item }: { item: Supplier }) => (
    <View>
      <TouchableWithoutFeedback onPress={() => onSupplierPress(item)}>
        <View>
          <Text>{item.TenNhaCungCap}</Text>
          <Text style={[{ color: 'red' }]}>Address: {item.DiaChi}</Text>
          <Text style={[{ color: 'red' }]}>{item.Email}</Text>
          <Text>Phone: {item.SoDienThoai}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={[
          { height: 'auto', flex: 1, backgroundColor: Colors.background, borderRadius: 12 },
        ]}
      >
        {/* danh sach nha cung cap */}
        <FlatList
          data={data}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          keyExtractor={(item) => item.TenNhaCungCap}
        />
        <Text style={[{ height: 50 }]}></Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupplierList;