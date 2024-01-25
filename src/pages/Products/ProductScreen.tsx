import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
import ProductList, { data} from './ProductList';

const ProductScreen = ({ navigation }) => {
  const handleProductPress = () => {
    navigation.navigate('DetailProduct');
  };

  const gotoNewProductScreen = () => {
    navigation.navigate('NewProduct');
  };

  

    return (
        <SafeAreaView style={styles.container}>
        {/* Màn hình sản phầm */}
        <ProductList data={data} onProductPress={handleProductPress} />

        {/* nút thêm sản phẩm */}
        <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={gotoNewProductScreen}>
                <FontAwesome
                name="plus-square"
                size={20}
                color={Colors.background}
                />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
  },
  containerBar: {
    borderRadius:12,
  },
  containerList: {
    flex:1,
    backgroundColor:Colors.background,
    marginTop: 10,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusBar: {
    height: 70,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
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
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: Colors.blue,
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTotal: {
    backgroundColor: Colors.background,
    borderBottomStartRadius:18,
    borderBottomEndRadius:18,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
  },
  text: {
    fontSize: 14,
    margin: 5,
    padding:5,
  },
  row: {
    flexDirection: 'row',
  },
});

export default ProductScreen;