import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: string;
  name: string;
  tonkho: number;
  giaban: number;
  giagoc: number;
  image: string;
}

  // Danh sách dữ liệu mẫu
  const data = [
    { id: 'SP000001', name: 'Ahri', tonkho: 4, giaban:10, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
    { id: 'SP000002', name: 'Dynasty Ahri', tonkho: 2, giaban:975, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg' },
    { id: 'SP000003', name: 'Midnight Ahri', tonkho: 1, giaban:750, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg' },
    { id: 'SP000004', name: 'Foxfire Ahri', tonkho: 5, giaban:750, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg' },
    { id: 'SP000005', name: 'Popstar Ahri', tonkho: 10, giaban:975, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg' },
    { id: 'SP000006', name: 'Chanllenger Ahri', tonkho: 2, giaban:5000, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_5.jpg' },
    { id: 'SP000007', name: 'Academy Ahri', tonkho: 1, giaban:750, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg' },
    { id: 'SP000008', name: 'Arcade Ahri', tonkho: 5, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg' },
    { id: 'SP000009', name: 'Star Gurardian Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg' },
    { id: 'SP000010', name: 'K/DA Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg' },
    { id: 'SP000011', name: 'Prestige K/DA Ahri', tonkho: 2, giaban:10000, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg' },
    { id: 'SP000012', name: 'Elderwood Ahri', tonkho: 1, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_17.jpg' },
    { id: 'SP000013', name: 'Spirit Blossom Ahri', tonkho: 5, giaban:1820, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg' },
    { id: 'SP000014', name: 'K/DA All Out Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg' },
    { id: 'SP000015', name: 'Coven Ahri', tonkho: 10, giaban:975, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg' },
    { id: 'SP000016', name: 'Prestige K/DA Ahri (2022)', tonkho: 5, giaban:10000, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_65.jpg' },
    { id: 'SP000017', name: 'Arcana Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg' },
    { id: 'SP000018', name: 'Snow Moon Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_76.jpg' },
  ];
  const itemCount = data.length;
  const totalTonkho = data.reduce((accumulator, item) => accumulator + item.tonkho, 0);

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
            <Image source={{ uri: item.image }} style={styles.imageOfProduct} />
          </View>
          <View style={styles.twoColumn}>
            <View style={[styles.column, {marginLeft:10, alignItems: 'flex-start',}]}>
              <Text style={styles.Text}>{item.name}</Text>
              <Text style={styles.itemID}>{item.id}</Text>
            </View>
            <View style={[styles.column, {alignItems: 'flex-end',}]}>
              <Text style={[styles.Text, {color: isPressed?Colors.blue:'black'}]}>{isPressed?item.giaban:item.giagoc}</Text>
              <Text style={[styles.Text, {color: Colors.green}]}>{item.tonkho}</Text>
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
          <Text style={[styles.text, {color:Colors.blue, marginRight:-10}]}>{itemCount}</Text>
          <Text style={[styles.text,]}>Products  -  Inventory</Text>
          <Text style={[styles.text, {color:Colors.green, marginLeft:-10}]}>{totalTonkho}</Text>
        </View>
        <Text style={[styles.text, { flex: 1, textAlign: 'right', color: isPressed ? Colors.blue : 'black' }]}>{selectedOption}</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    containerList: {
      flex:1,
      backgroundColor:Colors.backgroundHome,
    },
    containerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop:10,
    },
    twoColumn: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    item: {
      paddingHorizontal: 15,
      paddingVertical: 20,
      backgroundColor: Colors.background,
      borderBottomWidth: 1,
      borderBottomColor: Colors.silver,
    },
    itemEven: {
      backgroundColor: Colors.light,
    },
    itemOdd: {
      backgroundColor: Colors.background,
    },
    Text: {
      fontSize: 18,
    },
    itemID: {
      color: 'gray',
      fontSize: 14,
    },
    imageOfProduct: {
      borderRadius:12,
      height:60,
      width: 60,
    },
    column: {
      flex: 1,
      justifyContent: 'center',
    },
    containerTotal: {
      backgroundColor: Colors.background,
      borderBottomStartRadius:18,
      borderBottomEndRadius:18,
      borderTopWidth: 0.5,
      borderTopColor: 'gray',
      marginBottom:10,
    },
    text: {
      fontSize: 14,
      margin: 5,
      padding:5,
    },
    row: {
      flexDirection: 'row',
    },
    containerBar: {
      borderRadius:12,
    },
    statusBar: {
      height: 70,
      backgroundColor: Colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginBottom:-10,
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginHorizontal: 10,
    },
    rotatedArrow: {
      transform: [{ rotate: '180deg' }],
    },
    titleText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
  });

export { data, itemCount, totalTonkho };
export default ProductList;