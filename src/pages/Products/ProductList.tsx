
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
import styles from './styles'

interface Product {
  ID: string;
  TenSP: string;
  TonKho: number;
  GiaBan: number;
  GiaNhap: number;
  Image: string;
  MoTa: string;
  NhaCungCap: string;
}

interface ProductListProps {
  data: Product[];
  onProductPress: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ data, onProductPress }) => {
  const renderFooter = () => {
    return (
      <View style={{ height: 100 }} />
    );
  };

  const renderItem = ({ item, index }: { item: Product; index: number }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemOdd : styles.itemEven,
      ]}
    >
      <TouchableWithoutFeedback onPress={() => onProductPress(item)}>
        <View style={styles.containerItem}>
          <View style={[{marginRight:10}]}>
            <Image source={{ uri: item.Image }} style={styles.imageOfProduct} />
          </View>
          <View style={styles.twoColumn}>
            <View style={[styles.column, {marginLeft:10, alignItems: 'flex-start',}]}>
              <Text style={styles.Text}>{item.TenSP}</Text>
              <Text style={styles.itemID}>{item.ID}</Text>
            </View>
            <View style={[styles.column, {alignItems: 'flex-end',}]}>
              <Text style={[styles.Text, {color: isPressed?Colors.blue:'black'}]}>{isPressed?item.GiaBan:item.GiaNhap}</Text>
              <Text style={[styles.Text, {color: Colors.green}]}>{item.TonKho}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
  const [selectedOption, setSelectedOption] = useState('Original price');
  const [isPressed, setIsPressed] = useState(false);
  const [filterPressed, setFilterPressed] = useState(false);
  const [arrowRotated, setArrowRotated] = useState(false);

  const handleArrowPress = () => {
    setArrowRotated(!arrowRotated);
  };

  const handleSearchPress = () => {
    // Xử lý sự kiện khi nhấn nút Search
  };

  const handleFilterPress = () => {
    setFilterPressed(true);
    // Xử lý sự kiện khi nhấn nút Filter
  };

  const handlePress = () => {
    // Toggle the pressed state
    setIsPressed(!isPressed);
  
    // Update the selectedOption based on the pressed state
    if (isPressed) {
      setSelectedOption('Original price');
    } else {
      setSelectedOption('Selling price');
    }
  };

  return (
    <View style={styles.containerList}>
      {/* Thanh bar */}
      <View style={styles.containerBar}>
        <View style={styles.statusBar}>
            <Text style={styles.titleText}>Products</Text>
            <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleSearchPress}>
                <FontAwesome
                name="search"
                size={24}
                color="gray"
                style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFilterPress}>
                <FontAwesome
                name="filter"
                size={24}
                color={filterPressed ? Colors.blue : 'gray'}
                style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleArrowPress}>
                <Ionicons
                name="ios-arrow-up"
                size={24}
                color={arrowRotated ? Colors.blue : 'gray'}
                style={[styles.icon, arrowRotated && styles.rotatedArrow]}
                />
            </TouchableOpacity>
            </View>
        </View>
    </View>
      <TouchableOpacity style={[styles.containerTotal, styles.row]} onPress={handlePress}>
        <View style={[styles.row, {flex:3}]}>
          {/* <Text style={[styles.text, {color:Colors.blue, marginRight:-10}]}>{itemCount}</Text> */}
          <Text style={[styles.text,]}>Products  -  Inventory</Text>
          {/* <Text style={[styles.text, {color:Colors.green, marginLeft:-10}]}>{totalTonKho}</Text> */}
        </View>
        <Text style={[styles.text, { flex: 1, textAlign: 'right', color: isPressed ? Colors.blue : 'black' }]}>{selectedOption}</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item.ID}
      />
    </View>
  );
};
export default ProductList;