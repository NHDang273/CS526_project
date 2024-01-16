import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../shared/colors';
import ProductList, { data } from '../Products/ProductList';
import styles from '../../components/styleSelling';

type DataSellingItem = {
  idHD: string;
  id: string;
  soluongban: number;
  tong: number;
  name?: string;
  tonkho?: number;
  giaban?: number;
  giagoc?: number;
  image?: string;
};

  // Danh sách dữ liệu mẫu, có lẽ cần tạo một bảng chỉ cần 2 cái này thôi, mấy cái thông tin khác của sản phẩm tôi lấy từ bên ProductListComponet.tsx
  const dataSelling: DataSellingItem[] = [
    { idHD: 'HD000002',id: 'SP000002', soluongban:0, tong:0 },
    { idHD: 'HD000002',id: 'SP000003', soluongban:3, tong:0 },
    { idHD: 'HD000002',id: 'SP000004', soluongban:2, tong:0 },
    { idHD: 'HD000002',id: 'SP000005', soluongban:5, tong:0 },
    { idHD: 'HD000002',id: 'SP000006', soluongban:1, tong:0 },
    { idHD: 'HD000002',id: 'SP000007', soluongban:2, tong:0 },
    { idHD: 'HD000002',id: 'SP000008', soluongban:4, tong:0 },
    { idHD: 'HD000002',id: 'SP000009', soluongban:7, tong:0 },
    { idHD: 'HD000002',id: 'SP000010', soluongban:1, tong:0 },
  ];

  // Lặp qua từng phần tử trong dataSelling
for (let i = 0; i < dataSelling.length; i++) {
  const id = dataSelling[i].id; // Lấy ID từ bảng dataSelling

  // Tìm phần tử tương ứng trong mảng data dựa trên ID
  const foundProduct = data.find(product => product.id === id);

  if (foundProduct) {
    // Assign values from foundProduct to dataSelling
    dataSelling[i].name = foundProduct.name;
    dataSelling[i].tonkho = foundProduct.tonkho;
    dataSelling[i].giaban = foundProduct.giaban;
    dataSelling[i].giagoc = foundProduct.giagoc;
    dataSelling[i].image = foundProduct.image;
    dataSelling[i].tong = dataSelling[i].giaban*dataSelling[i].soluongban;
  }
}

var totalAmount = 0;
  // Lặp qua từng phần tử trong dataSelling
  for (let i = 0; i < dataSelling.length; i++) {
    totalAmount = totalAmount+dataSelling[i].tong;

  }

interface SellingProduct {
  data: DataSellingItem[];
  onProductPress: (product: DataSellingItem) => void;
}

const SellingProduct: React.FC<SellingProduct> = ({ data, onProductPress }) => {
  const renderFooter = () => {
    return (
      <View style={{ height: 100, backgroundColor: 'white' }} />
    );
  };

  const renderItem = ({ item, index }: { item: DataSellingItem; index: number }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemOdd : styles.itemEven,
      ]}
    >
      <TouchableWithoutFeedback onPress={() => onProductPress(item)}>
        <View style={styles.containerItem}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.imageOfProduct} />
          </View>
          <View style={styles.twoColumn}>
            <View style={[styles.column, { alignItems: 'flex-start', marginLeft: 10,}]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={[styles.itemText, {color: Colors.darkgray, fontSize:16}]}>{item.id}</Text>
              <View style={styles.row}>
              <Text style={styles.itemText}>{item.giaban}</Text>
                <Text style={[styles.itemText, {color: Colors.green}]}> x </Text>
                <Text style={[styles.itemText, {color: Colors.green}]}>{item.soluongban}</Text>
              </View>
            </View>
            <View style={[styles.column, { alignItems: 'flex-end' }]}>
              <Text style={[styles.itemText, {color: Colors.blue}]}>{item.tong}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.containerList}>
      <FlatList
        data={dataSelling}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export { dataSelling, totalAmount };
export default SellingProduct;
