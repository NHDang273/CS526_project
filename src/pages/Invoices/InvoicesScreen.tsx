import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
import SellingProduct, {dataSelling, totalAmount} from './SellingProduct';
import styles from '../../components/styleSelling';

const InvoicesScreen = ({ navigation }) => {
  const [arrowRotated, setArrowRotated] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Original price');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handlePress = () => {
    setSelectedOption(selectedOption === 'Original price' ? 'Selling price' : 'Original price');
  };
  const handleProductPress = () => {
    navigation.navigate('DetailInvoices');
  };

  const handleArrowPress = () => {
    setArrowRotated(!arrowRotated);
  };

  const handleSearchPress = () => {
    // Xử lý sự kiện khi nhấn nút Search
  };

  const handleFilterPress = () => {
    // Xử lý sự kiện khi nhấn nút Filter
    setIsFilterVisible(!isFilterVisible);
  };

  // Danh sách dữ liệu mẫu
    const data = [
      { id: 'HD000001', customerName: 'Ahri', time: 4},
      { id: 'HD000002', customerName: 'Dynasty Ahri', time: 2},
      { id: 'HD000003', customerName: 'Midnight Ahri', time: 1},
      { id: 'HD000004', customerName: 'Foxfire Ahri', time: 5},
      { id: 'HD000005', customerName: 'Popstar Ahri', time: 10},
      { id: 'HD000006', customerName: 'Chanllenger Ahri', time: 2},
      { id: 'HD000007', customerName: 'Academy Ahri', time: 1},
      { id: 'HD000008', customerName: 'Arcade Ahri', time: 5},
      { id: 'HD000009', customerName: 'Star Gurardian Ahri', time: 10},
      { id: 'HD000010', customerName: 'K/DA Ahri', time: 10},
      { id: 'HD000011', customerName: 'Prestige K/DA Ahri', time: 2},
      { id: 'HD000012', customerName: 'Elderwood Ahri', time: 1},
      { id: 'HD000013', customerName: 'Spirit Blossom Ahri', time: 5},
      { id: 'HD000014', customerName: 'K/DA All Out Ahri', time: 10},
      { id: 'HD000015', customerName: 'Coven Ahri', time: 10},
      { id: 'HD000016', customerName: 'Prestige K/DA Ahri (2022)', time: 5},
      { id: 'HD000017', customerName: 'Arcana Ahri', time: 10},
      { id: 'HD000018', customerName: 'Snow Moon Ahri', time: 10},
    ];
  const renderFooter = () => {
    return (
      // View trắng ở cuối danh sách
      <View style={{ height: 100, backgroundColor: 'white' }} />
    );
  };
  
  const itemCount = data.length;

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemOdd : styles.itemEven,
      ]}
    >
      <TouchableWithoutFeedback onPress={handleProductPress}>
        <View style={styles.containerItem}>
            <View style={styles.twoColumn}>
                <View style={[styles.column, { alignItems: 'flex-start', marginLeft: 10,}]}>
                    <Text style={styles.itemID}>{item.id}</Text>
                    <Text style={styles.itemTime}>{item.time}</Text>
                </View>
                <View style={[styles.column, { alignItems: 'flex-end' }]}>
                    <Text style={styles.totalAmount}>{totalAmount}</Text>
                    <Text style={styles.itemText}>{item.customerName}</Text>
                </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

    return (
        <SafeAreaView style={styles.container}>
            {/* Thanh bar */}
            <View style={styles.containerBar}>
                <View style={styles.statusBar}>
                    <Text style={styles.titleText}>Invoices</Text>
                    <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={handleSearchPress}>
                        <FontAwesome
                        name="search"
                        size={24}
                        color="gray"
                        style={styles.icon}
                        />
                    </TouchableOpacity>
                    <View>
                      <TouchableOpacity onPress={handleFilterPress}>
                          <FontAwesome
                          name="filter"
                          size={24}
                          color={isFilterVisible ? Colors.blue : 'gray'}
                          style={styles.icon}
                          />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleArrowPress}>
                        <Ionicons
                        name="ios-arrow-up"
                        size={24}
                        color={arrowRotated ? Colors.blue : 'gray'}
                        style={[styles.arrowIcon, arrowRotated && styles.rotatedArrow]}
                        />
                    </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnInfo} onPress={handlePress}>
                        <View style={styles.rowItem}>
                            <Text style={styles.textGreen}>{itemCount}</Text>
                            <Text style={styles.text}>Invoicess</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        {/* Danh sách các sản phầm */}
        <View style={styles.containerList}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                ListFooterComponent={renderFooter}
                keyExtractor={(item) => item.id}>
            </FlatList>
        </View>
        
        {isFilterVisible && (
          <View style={[styles.containerList]}>
            <TouchableOpacity style={[{borderBottomWidth:1, borderBottomColor:'gray', alignItems:'center', padding: 15}]}>
              <Text>ID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{borderBottomWidth:1, borderBottomColor:'gray', alignItems:'center', padding: 15}]}>
              <Text>Date</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{borderBottomWidth:1, borderBottomColor:'gray', alignItems:'center', padding: 15}]}>
              <Text>Customer Name</Text>
            </TouchableOpacity>
          </View>)}
    </SafeAreaView>
  );
};

export default InvoicesScreen;