import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
// import ProductList, {data} from './ProductList';
import ProductList from './ProductList';
import { getProductData } from './DataProduct';

const ProductScreen = ({ navigation }) => {
  const [productData, setProductData] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  const reload = () => {
    setReloadData(!reloadData);
  };

  useEffect(() => {
    getProductData()
      .then((productData) => {
        setProductData(Object.values(productData));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [reloadData]);

  const handleProductPress = (product) => {
    const index = productData.indexOf(product);
    const iD = productData[index].ID;
    navigation.navigate('DetailProduct', { product, iD });
  };
  // const handleProductPress = () => {
  //   navigation.navigate('DetailProduct');
  // };

  console.log(productData);

  const gotoNewProductScreen = () => {
    navigation.navigate('NewProduct');
  };
    return (
        <SafeAreaView style={styles.container}>
        {/* Màn hình sản phầm */}
        <ProductList data={productData} onProductPress={handleProductPress} />

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
        {/* nút reload */}
        <View style={[{position:'relative', bottom: 20, left: 20,}]}>
            <TouchableOpacity style={[styles.addButton, {backgroundColor:Colors.backgroundHome, height:150, width: 150}]} onPress={reload}>
            <FontAwesome
                name="refresh"
                size={20}
                color={Colors.backgroundHome}
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