import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../../shared/colors';
import styles from '../styles'

interface Product {
    id: string;
    name: string;
    tonkho: number;
    giaban: number;
    giagoc: number;
    image: string;
  }

interface Inventory {
  id: string;
  name: string;
  vitri: string;
  sanpham: Product;
}

interface InventoryScreenProps {
  data: Inventory[];
  onInventoryPress: (inventory: Inventory) => void;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ data, onInventoryPress }) => {
  const renderFooter = () => {
    return (
      <View style={{ height: 100 }} />
    );
  };

  const renderItem = ({ item, index }: { item: Inventory; index: number }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemOdd : styles.itemEven,
      ]}
    >
      <TouchableWithoutFeedback onPress={() => onInventoryPress(null)}>
        <View style={styles.containerItem}>
          <View style={[{marginRight:10}]}>
          </View>
          <View style={styles.twoColumn}>
            <View style={[styles.column, {marginLeft:10, alignItems: 'flex-start',}]}>
              <Text style={styles.Text}>{item.name}</Text>
              <Text style={styles.itemID}>{item.id}</Text>
            </View>
            <View style={[styles.column, {alignItems: 'flex-end',}]}>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
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
  };

  return (
    <SafeAreaView style={[styles.containerList, {marginTop: 20}]}>
      {/* Thanh bar */}
      <View style={styles.containerBar}>
        <View style={styles.statusBar}>
            <Text style={styles.titleText}>Inventory</Text>
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
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
export default InventoryScreen;